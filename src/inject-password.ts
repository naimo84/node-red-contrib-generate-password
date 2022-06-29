
import { Red, Node } from 'node-red';
import { createSandbox, sendResults } from './sandbox';
var generator = require('generate-password');
const handlebars = require('handlebars');


module.exports = function (RED: Red) {
    function templateNode(config: any) {
        RED.nodes.createNode(this, config);

        let node = this;
        const func = config.func;
        const injecttext = config.injecttext;

        this.on('input', (msg, send, done) => {
            const text = RED.util.evaluateNodeProperty(config.text, config.texttype, config, msg);
            let configOptions = RED.util.evaluateNodeProperty(config.options === '' ? "{}" : config.options, config.optionstype, config, msg);

            let options = JSON.parse(JSON.stringify(configOptions?.length || {
                length: 10,
                numbers: true
            }));

            execute(msg, node, send, done, func, options, text, injecttext);
        });
    }

    function execute(node, msg, send, done, func, options, text, injecttext) {
        if (injecttext === "func") {
            const reg = /newPassword/g;
            let result2 = reg.exec(func);
            let counter = 0
            while (result2 && result2[0] !== "") {
                func = func.replace('newPassword', 'password' + counter)
                counter++;
                result2 = reg.exec(func);
            }

            let compiler = ""
            for (let i = 0; i < counter; i++) {
                compiler = `"password${i}": "${generator.generate(options)}", ${compiler}`
            }
            compiler = `{ ${compiler.substring(0, compiler.length - 2)} }`

            let funccompiled = handlebars.compile(func);
            let result = funccompiled(JSON.parse(compiler))
            func = result;

            let context = createSandbox(node, RED, func);
            context.msg = msg;
            context.send = send;
            context.done = done;

            node.script.runInContext(context);
            sendResults(node, send, msg._msgid, context.results, false, RED, context);
        } else {
            try {
                const reg = /newPassword/g;
                let result2 = reg.exec(JSON.stringify(text || "{{newPassword}}"));
                let counter = 0
                while (result2 && result2[0] !== "") {
                    text = JSON.stringify(text|| "{{newPassword}}").replace('newPassword', 'password' + counter)
                    counter++;
                    result2 = reg.exec(JSON.stringify(text));
                }

                let compiler = ""
                for (let i = 0; i < counter; i++) {
                    compiler = `"password${i}": "${generator.generate(options)}", ${compiler}`
                }
                compiler = `{ ${compiler.substring(0, compiler.length - 2)} }`

                let funccompiled = handlebars.compile(text);
                let result = funccompiled(JSON.parse(compiler))

                send({
                    payload: JSON.parse(result)
                });
                done();
            } catch (err) {
                done(err);
            }
        }
    }

    RED.nodes.registerType("inject-password", templateNode);
}
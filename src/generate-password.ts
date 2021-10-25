
import { Red, Node } from 'node-red';
var generator = require('generate-password');


module.exports = function (RED: Red) {
    function templateNode(config: any) {
        RED.nodes.createNode(this, config);

        let node = this;
        this.on('input', (msg) => {
            let options = JSON.parse(RED.util.evaluateNodeProperty(config.options, config.optionstype, config, msg) || {
                length: 10,
                numbers: true
            });
            var password = generator.generate(options);
            node.send(Object.assign(msg, { payload: password }));
        });
    }

    RED.nodes.registerType("generate-password", templateNode);
}
# Node RED 

> Node-RED is a tool for wiring together hardware devices, APIs and online services in new and interesting ways.

## :question: Get Help

 For bug reports and feature requests, open issues. :bug: 

## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply to everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations] **PayPal**— You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/T6T412CXA) **Ko-fi**— I'll buy a ~~tea~~ coffee. :coffee: :wink:
 - ![](./examples/bitcoin.png) **Bitcoin**—You can send me bitcoins at this address (or scanning the code): `3GqiebqcZeonziRUMYxU35J3jPSMJzpTAc`
 

Thanks! :heart:

## :cloud: Installation

First of all install [Node-RED](http://nodered.org/docs/getting-started/installation)

```sh
$ sudo npm install -g node-red
# Then open  the user data directory  `~/.node-red`  and install the package
$ cd ~/.node-red
$ npm install node-red-contrib-generate-password
```

Or search template in the manage palette menu

Then run

```
node-red
```

## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

```sh
git clone https://github.com/naimo84/node-red-contrib-generate-password.git
cd /path/to/node-red-contrib-generate-password
npm install
gulp
cd ~/.node-red 
npm install /path/to/node-red-contrib-generate-password
```

## :memo: Documentation




# Password Injector

This node is used to inject a password into the flow.

### Options

```json
{
    length: 10,
    numbers: true,
    uppercase: false
}
```


Available options

Any of these can be passed into the options object for each function.

      
| Name                     | Description                                                           | Default Value |
|--------------------------|-----------------------------------------------------------------------|---------------|
| length                   | Integer, length of password.                                          | 10            |
| numbers*                 | Boolean, put numbers in password.                                     | false         |
| symbols*                 | Boolean or String, put symbols in password.                           | false         |
| lowercase*               | Boolean, put lowercase in password                                    | true          |
| uppercase*               | Boolean, use uppercase letters in password.                           | true          |
| excludeSimilarCharacters | Boolean, exclude similar chars, like 'i' and 'l'.                     | false         |
| exclude                  | String, characters to be excluded from password.                      | ''            |
| strict                   | Boolean, password must include at least one character from each pool. | false         |

### Formated function

<p>
    The formated function can be used like the standard node-red function node, but with the special feature {{newPassword}}.
    {{newPassword}} will be replaced with a new generated password.
</p>
<p>
    <img src="https://github.com/naimo84/node-red-contrib-generate-password/raw/master/examples/inject-password.png"/>
</p>

## :scroll: The MIT License
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Coded with :heart: in :cloud:


[badge_brave]: ./examples/support_banner.png
[badge_paypal]: https://img.shields.io/badge/Donate-PayPal-blue.svg

[paypal-donations]: https://paypal.me/NeumannBenjamin
[brave]: https://brave.com/nai412
[contributing]: /CONTRIBUTING.md
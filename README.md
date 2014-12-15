#  [![Build Status](https://secure.travis-ci.org/Sontan/node-erip-hgrosh.png?branch=master)](http://travis-ci.org/Sontan/node-erip-hgrosh)

> Library to use HutkiGrosh API to ERIP in nodejs.


## Install

```sh
$ npm install --save node-erip-hgrosh
```


## Usage

```js
var node-erip-hgrosh = require('node-erip-hgrosh');

var credential = {
  "user":"username@org.com",
  "pwd":"pSSw_ord7"
};

var hgrosh = new HGrosh(domain, credential);
```

If your system requires that requests be made through
an HTTP or HTTPS proxy, you can either set an environment
variables https_proxy and http_proxy,
or pass in the optional third option:

```
var slack = new Slack(domain,token,{proxy: http_proxy});
```


```sh
$ npm install --global node-erip-hgrosh
$ node-erip-hgrosh --help
```

```sh
# creates a browser.js
$ npm run browser
```


## License

MIT © [Egor Kuryanovich](sontan.name)

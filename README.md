#  [![Build Status](https://secure.travis-ci.org/Sontan/node-erip-hgrosh.png?branch=master)](http://travis-ci.org/Sontan/node-erip-hgrosh)

<<<<<<< HEAD
Library to use [HutkiGrosh](http://hutkigrosh.by) API to ERIP in nodejs.
=======
> Library to use HutkiGrosh API to ERIP in nodejs.
>>>>>>> e13b7c436bf0fb39c3e2df54630343487becf67b


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

<<<<<<< HEAD
var hgrosh = new HGrosh(credential);
=======
var hgrosh = new HGrosh(domain, credential);
>>>>>>> e13b7c436bf0fb39c3e2df54630343487becf67b
```

If your system requires that requests be made through
an HTTP or HTTPS proxy, you can either set an environment
variables https_proxy and http_proxy,
or pass in the optional third option:

```
<<<<<<< HEAD
var hgrosh = new HGrosh(credential, {proxy: http_proxy});
```

## Available API

| HGrosh API  | Function |
| ------------- | ------------- |
|: Security/logIn  :|: HGrosh.logIn(credential) :|
|: Security/logOut  :|: HGrosh.logOut() :|
|: Invoicing/Bill  :|: HGrosh.addBill(bill) :|
|: Invoicing/Bills  :|: HGrosh.loadBills(start, end, sortby)  :|

## Chaining requests

You could use promises or callback functions to chain your 
requests to HutkiGrosh. Unfortunately there are problems 
with concurrent requests on their side.

```js
var hgrosh = new HGrosh(credential);
hgrosh.addBill(bill)
  .then(function(result) 
    { 
      hgrosh.loadBills(0,30,1).
        then(function(result) 
          { 
            var json = JSON.parse(result.body);
            console.log(json);
          }); 
    });
```

```js
var hgrosh = new HGrosh(credential);
hgrosh.addBill(bill, 
  function(err, result) 
  { 
    hgrosh.loadBills(0,30,1,
      function(err, result) 
      { 
        var json = JSON.parse(result);
        console.log(json);
      }); 
  });
```

### HGrosh._send

### HGrosh.logIn

### HGrosh.logOut

### HGrosh.addBill

### HGrosh.loadBills

## See also

* [HutkiGrosh API documentation](http://www.hutkigrosh.by/Docs/API%20%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D0%B0%20%D0%A5%D1%83%D1%82%D0%BAi%20%D0%93%D1%80%D0%BE%D1%88.ru.pdf)
=======
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

>>>>>>> e13b7c436bf0fb39c3e2df54630343487becf67b

## License

MIT © [Egor Kuryanovich](sontan.name)

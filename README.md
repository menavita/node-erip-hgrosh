
Library to use [HutkiGrosh](http://hutkigrosh.by) API to ERIP in nodejs.
=======

## Install

```sh
$ npm install --save node-erip-hgrosh
```

## Usage

```js
var HGrosh = require('node-erip-hgrosh');

var credential = {
  user:"username@org.com",
  pwd:"pSSw_ord7",
  production: true
};

var hgrosh = new HGrosh(credential);
```
Setting production to false will direct your requests
to trial.hgrosh.by instead of www.hutkigrosh.by.

If your system requires that requests be made through
an HTTP or HTTPS proxy, you can either set an environment
variables https_proxy and http_proxy,
or pass in the optional third option:

```
var hgrosh = new HGrosh(credential, {proxy: http_proxy});
```

## Available API

| HGrosh API  | Function |
| ------------- | ------------- |
| Security/logIn   | HGrosh.logIn(credential) |
| Security/logOut  | HGrosh.logOut() |
| Invoicing/Bill   | HGrosh.addBill(bill) |
| Invoicing/Bill(billId)   | HGrosh.infoBill(billId)|
| Invoicing/Bills  | HGrosh.loadBills(start, end, sortby)  |

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

```sh
$ npm install --global node-erip-hgrosh
$ node-erip-hgrosh --help
```

```sh
# creates a browser.js
$ npm run browser
```

## License

MIT © [Egor Kuryanovich](http://sontan.name/)

'use strict';

var request  = require('request');
var deferred = require('deferred');

function HGrosh(credential, http_proxy_options) {
  // Определяем домен в зависимости от типа запуска
  this.domain = credential.production ? 'https://www.hutkigrosh.by' : 'http://trial.hgrosh.by';

  // Сохраняем реквизиты для авторизации
  this.credential = credential;

  // Данные для прокси-сервера
  this.http_proxy_options = http_proxy_options;

  // Создаем банку для печенек
  this.jar = request.jar();
}

HGrosh.prototype.infoBill = function(billId, cb)
{
  var _this = this;

  // Авторизируемся
  return this.logIn()
    .then(function() 
    {
      // Отправляем данные 
      return _this._send('/API/v1/Invoicing/Bill('+billId+')', {method: 'GET'}, null, cb);
    });
}

HGrosh.prototype.addBill = function(bill, cb)
{
  var _this = this;

  // Авторизируемся
  return this.logIn()
    .then(function() 
    {
      // Отправляем данные 
      return _this._send('/API/v1/Invoicing/Bill', {}, bill, cb);
    });
}

HGrosh.prototype.loadBills = function(start, end, sortby, cb)
{
  var _this = this;

  // Авторизируемся
  this.logIn()
    .then(function() 
    {
      // Отправляем данные 
      return _this._send('/API/v1/Invoicing/Bills('+start+','+end+','+sortby+')', {method: 'GET'}, null, cb);
    });
}





HGrosh.prototype.logIn = function(cb)
{
  return this._send('/API/v1/Security/LogIn', {}, this.credential, cb);
}

HGrosh.prototype.logOut = function(cb)
{
  return this._send('/API/v1/Security/LogOut', {}, null, cb);
}

// Отправляем запрос в HutkiGrosh™
HGrosh.prototype._send = function(url, options, message, cb) {
  
  var option = {
    method: options.method || 'POST',
    proxy: (this.http_proxy_options && this.http_proxy_options.proxy) || process.env.https_proxy || process.env.http_proxy,
    url:   this.domain+url,
    body:  JSON.stringify(message),
    jar:   this.jar,
    headers: {
      'content-type': 'application/Json',
      'accept': 'application/json'
    }
  };

  console.log("\n");
  console.log(this.domain+url);


  if(!cb) var d = deferred();

  var req = request(option, function(err, res, body) {
    if (err) console.log('Error:' + err);
    
    console.log(body);
    if (body) console.log(JSON.parse(body));

    if (d) return err ? d.reject(err) : d.resolve({res: res, body: body});
    if (cb) return cb.call(null, err, body);
    return null;
  });

  return d ? d.promise : req;
};

module.exports = HGrosh;
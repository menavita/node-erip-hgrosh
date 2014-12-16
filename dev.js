var HGrosh = require('../node-erip-hgrosh');

var credential = {
  user: 'alik@fyva.pro',
  pwd: '!123qweHUT',
  production: false
};

var bill_required = {
  eripId: 10880001,
  invId:  'C1234',
  dueDt:  '/Date(928138800000+0300)/',
  amt:    99000,
  curr:   'BYR'
};

var bill = {
  billID: null,
  eripId: 10880001,
  invId: '5',
  dueDt: '/Date(1418936399000+0300)/',
  addedDt: '/Date(1418631870000+0300)/',
  payedDt: null,
  fullName: 'Курьянович Егор Владимиорвич',
  mobilePhone: '+375259832403',
  notifyByMobilePhone: true,
  email: null,
  notifyByEMail: false,
  fullAddress: 'г.Минск, пр.Победителей, д.1, кв.1',
  amt: 120000,
  curr: 'BYR',
  statusEnum: 0,
  info: null,
  products:[{
    invItemId: 'Артикул 123',
    desc: 'Услуга, за которую производят оплату',
    count: 1,
    amt: 120000
  }]
};

var hgrosh = new HGrosh(credential);
hgrosh.addBill(bill).then(function() { var hgrosh2 = new HGrosh(credential);
hgrosh2.loadBills(0,30,1); });


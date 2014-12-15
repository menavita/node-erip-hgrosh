#!/usr/bin/env node
'use strict';
var meow = require('meow');
var nodeEripHgrosh = require('./');

var cli = meow({
    help: [
        'Usage',
        '  node-erip-hgrosh <input>',
        '',
        'Example',
        '  node-erip-hgrosh Unicorn'
    ].join('\n')
});

nodeEripHgrosh(cli.input[0]);

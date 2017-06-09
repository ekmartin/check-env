#!/usr/bin/env node
var cowsay = require('cowsay');
var check = require('./');

try {
  check(process.argv.slice(2));
} catch(err) {
  console.error(cowsay.say({
    text: err.message
  }));

  process.exit(1);
}

#!/usr/bin/env node
const check = require('./index.js');
const cowsay = require('cowsay');

try{
  check(process.argv.slice(2));
}catch(e){
  console.error(cowsay.say({
    text : e.message,
  }));
  process.exit(1);
}

// OK
process.exit(0);
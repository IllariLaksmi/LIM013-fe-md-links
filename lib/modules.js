"use strict";

var _index = require("./index.js");

const fs = require('fs');

const path = require('path');

const jsdom = require("jsdom");

const {
  JSDOM
} = jsdom;

const marked = require("marked");

const {
  program
} = require('commander');

program.version('0.0.1');
let route = process.argv[2];
console.log(_index.mdlinks.readingDirectories(_index.mdlinks.takingThePath(route)));
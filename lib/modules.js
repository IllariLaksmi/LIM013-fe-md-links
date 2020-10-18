"use strict";

var _index = require("./index.js");

var _validate = require("./validate.js");

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

let links = _index.mdlinks.readingMdFile(route);

(0, _validate.validate)(links);
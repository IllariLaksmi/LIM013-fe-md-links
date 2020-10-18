import {mdlinks} from './index.js'
import {validate} from './validate.js'
import {stats} from './stats.js'
const fs = require('fs');
const path = require('path');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const marked = require("marked");
const { program } = require('commander');
program.version('0.0.1');

let route = process.argv[2]; 
let links = mdlinks.readingMdFile(route)
console.log(stats(links));
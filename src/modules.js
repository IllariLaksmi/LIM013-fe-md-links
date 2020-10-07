import {mdlinks} from './index.js'
const fs = require('fs');
const path = require('path');
const marked = require("marked");

let ruta = process.argv[2];
console.log(ruta);

mdlinks.takingThePath(ruta);
mdlinks.verifyPath(ruta);
mdlinks.isItMarkdown(ruta);
mdlinks.readingMdFile(ruta);
import {mdlinks} from './index.js'
const fs = require('fs');
const path = require('path');
const marked = require("marked");
const { program } = require('commander');
program.version('0.0.1');

let ruta = process.argv[2];

export let mdLinksIntegrated = new Promise((resolve, reject) => {

    })
 

mdlinks.takingThePath(ruta);
mdlinks.verifyPath(ruta);
mdlinks.isItMarkdown(ruta);
mdlinks.readingMdFile(ruta);
import {mdlinks} from './index.js'
const fs = require('fs');
const path = require('path');
const marked = require("marked");
const { program } = require('commander');
program.version('0.0.1');

let route = process.argv[2];

function mdlinksIntegrated(pt){
return new Promise((resolve, reject) => {
        let fixedPath = mdlinks.takingThePath(pt);
        if((mdlinks.verifyPath(fixedPath) == "file") && (mdlinks.isItMarkdown(fixedPath) == true)){
            resolve(mdlinks.readingMdFile(fixedPath));
        }else if(mdlinks.verifyPath(fixedPath)=="directory"){
            resolve(mdlinks.readingDirectories(fixedPath));
        }else {
            reject(console.log ("Vuelve a intentarlo!"))
        }
    }
)}
mdlinksIntegrated(route).then(
    console.log()
)
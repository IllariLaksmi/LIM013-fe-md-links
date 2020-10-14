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

let show = pt => {
  let info = fs.readFileSync(pt, {
    encoding: 'utf8',
    flag: 'r'
  });
  let html1 = marked(info);
  const dom = new JSDOM(html1);
  let links = dom.window.document.querySelectorAll('a');
  let arrayDeUrls = Array.from(links).map(element => "href: " + element.href + " name: " + element.textContent + " path: " + pt);
  return arrayDeUrls;
};

console.log(_index.mdlinks.readingMdFile(route));
/* function mdlinksIntegrated(pt){
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
) */
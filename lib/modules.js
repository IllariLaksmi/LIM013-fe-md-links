"use strict";

var _index = require("./index.js");

const fs = require('fs');

const path = require('path');

const marked = require("marked");

const {
  program
} = require('commander');

program.version('0.0.1');
let route = process.argv[2];

function mdlinksIntegrated(pt) {
  return new Promise((resolve, reject) => {
    let fixedPath = _index.mdlinks.takingThePath(pt);

    if (_index.mdlinks.verifyPath(fixedPath) == "file" && _index.mdlinks.isItMarkdown(fixedPath) == true) {
      resolve(_index.mdlinks.readingMdFile(fixedPath));
    } else if (_index.mdlinks.verifyPath(fixedPath) == "directory") {
      resolve(_index.mdlinks.readingDirectories(fixedPath));
    } else {
      reject(console.log("Vuelve a intentarlo!"));
    }
  });
}

mdlinksIntegrated(route);
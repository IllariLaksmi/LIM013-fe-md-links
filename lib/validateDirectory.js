"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateDirectory = void 0;

var _index = require("./index.js");

const jsdom = require('jsdom');

const marked = require('marked');

const {
  JSDOM
} = jsdom;

const fetch = require('node-fetch');

const fs = require('fs');

const path = require('path');

const validateDirectory = route => {
  const filenames = fs.readdirSync(route, 'utf-8');
  let listOfAllFiles = [];
  filenames.forEach(file => {
    const pth = path.resolve(route, file);

    const response = _index.mdlinksMethods.verifyPath(pth);

    if (response === 'file' && _index.mdlinksMethods.isItMarkdown(pth) === true) {
      let linkFiles = _index.mdlinksMethods.bringingLinksUrls(pth);

      linkFiles.forEach(link => {
        const info = fs.readFileSync(pth, {
          encoding: 'utf8',
          flag: 'r'
        });
        const html1 = marked(info);
        const dom = new JSDOM(html1);
        const links = dom.window.document.querySelectorAll('a');
        const linkInfo = Array.from(links).map(element => {
          fetch(element).then(response => {
            if (response.status >= 200 && response.status <= 299) {
              console.log(`${route} ${element.href} ok  ${response.status} ${element.textContent}\n`);
            } else if (response.status >= 400 && response.status <= 599) {
              console.log(`${route} ${element.href} fail  ${response.status} ${element.textContent}\n`);
            }
          }).catch(error => console.log("Hubo un error", error));
        });
      });
    } else if (response === 'directory') {
      const direcFileNames = _index.mdlinksMethods.bringingLinksUrlsDirectory(pth);

      listOfAllFiles = listOfAllFiles.concat(direcFileNames);
    }
  });
  return listOfAllFiles;
};

exports.validateDirectory = validateDirectory;
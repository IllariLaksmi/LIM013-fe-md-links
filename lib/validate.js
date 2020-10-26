"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = void 0;

var _index = require("./index.js");

const jsdom = require('jsdom');

const marked = require('marked');

const {
  JSDOM
} = jsdom;

const fetch = require('node-fetch');

const fs = require('fs');

const path = require('path'); // Verificando si los links están rotos


const validate = route => {
  const info = fs.readFileSync(route, {
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
};

exports.validate = validate;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = void 0;

var _http = require("http2");

var _ = require(".");

//Verificando si los links están rotos
const fetch = require("node-fetch");

const fs = require('fs');

const path = require('path');

const jsdom = require("jsdom");

const {
  JSDOM
} = jsdom;

const marked = require("marked");

const validate = route => {
  let links = _.mdlinksMethods.bringingLinksUrls(route);

  let description = Array.from(links).forEach(link => {
    fetch(link).then(response => {
      if (response.status >= 200 && response.status <= 299) {
        let linkOk = route + " " + link.href + " " + "ok" + " " + response.status + " " + link.textContent + "\n";
        console.log(linkOk);
      } else if (response.status >= 400 && response.status <= 599) {
        let linkFail = route + " " + link.href + " " + "fail" + " " + response.status + " " + link.textContent + "\n";
        console.log(linkFail);
      }
    }).catch(error => console.log("Hubo un error", error));
  });
  return description;
};

exports.validate = validate;
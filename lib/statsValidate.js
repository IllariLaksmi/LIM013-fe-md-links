"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statsValidate = void 0;

var _index = require("./index.js");

var _stats = require("./stats.js");

// Funcion --stats --validate
const fetch = require('node-fetch');

const statsValidate = links => {
  let broken = "Broken : ";
  console.log((0, _stats.stats)(links));
  console.log(broken);
  links.forEach(link => {
    fetch(link).then(response => {
      if (response.status >= 400 && response.status <= 599) {
        console.log(link);
      }
    }).catch(error => console.log(link));
  });
};

exports.statsValidate = statsValidate;
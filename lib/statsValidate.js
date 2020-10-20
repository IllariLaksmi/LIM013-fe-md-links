"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statsValidate = void 0;

var _index = require("./index.js");

var _stats = require("./stats.js");

//Funcion --stats --validate
const fetch = require("node-fetch");

const statsValidate = links => {
  let broken = 0;

  for (let i = 0; i <= links.length; i++) {
    fetch(links[i]).then(response => {
      if (response.status >= 400 && response.status <= 599) {
        broken++;
      }
    });
  }

  return console.log(broken);
};

exports.statsValidate = statsValidate;
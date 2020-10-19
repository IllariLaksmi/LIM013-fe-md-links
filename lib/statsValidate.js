"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statsValidate = void 0;

var _validate = require("./validate.js");

var _stats = require("./stats.js");

//Funcion --stats --validate
const statsValidate = links => {
  let validatedLinks = (0, _validate.validate)(links);
  let broken = 0;
  validatedLinks.forEach(link => {
    if (response.status >= 400 && response.status <= 599) {
      broken++;
    }
  });
  return console.log("Broken: " + broken);
};

exports.statsValidate = statsValidate;
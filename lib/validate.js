"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = void 0;

//Verificando si los links están rotos
const fetch = require("node-fetch");

const validate = links => {
  links.forEach(link => {
    fetch(link, request).then(response => response.json()).then(data => console.log(data)).catch(error => console.log("Hubo un error", error));
  });
};

exports.validate = validate;
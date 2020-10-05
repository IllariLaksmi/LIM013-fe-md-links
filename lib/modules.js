"use strict";

var _index = require("./index.js");

const fs = require('fs');

const path = require('path');

let ruta = process.argv[2];
(0, _index.takingThePath)(ruta);
(0, _index.verifyPath)(ruta);
(0, _index.isItMarkdown)(ruta);
(0, _index.readingDirectories)(ruta);
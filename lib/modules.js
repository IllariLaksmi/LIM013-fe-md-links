"use strict";

var _index = require("./index.js");

const fs = require('fs');

const path = require('path');

const marked = require("marked");

let ruta = process.argv[2];

_index.mdlinks.takingThePath(ruta);

_index.mdlinks.verifyPath(ruta);

_index.mdlinks.isItMarkdown(ruta);

_index.mdlinks.readingMdFile(ruta);
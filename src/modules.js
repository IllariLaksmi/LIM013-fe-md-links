import {takingThePath, verifyPath, isItMarkdown, readingDirectories} from './index.js'
const fs = require('fs');
const path = require('path');

let ruta = process.argv[2];
takingThePath(ruta);
verifyPath(ruta);
isItMarkdown(ruta);
readingDirectories(ruta);
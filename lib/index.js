"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdlinks = void 0;

var _console = require("console");

var _constants = require("constants");

const {
  program
} = require('commander');

program.version('0.0.1');

const fs = require('fs');

const path = require('path');

const jsdom = require("jsdom");

const {
  JSDOM
} = jsdom;

const marked = require("marked");

let arrayDeArchivos = {};
const mdlinks = {
  //Verificando si el path es absoluto, si es relativo se cambia a absoluto
  takingThePath: pt => {
    return path.resolve(__dirname, pt);
  },
  //Verificando si es un archivo o directorio
  verifyPath: pt => {
    if (fs.statSync(pt).isFile() == true) {
      return "file";
    } else if (fs.statSync(pt).isDirectory() == true) {
      return "directory";
    }
  },
  //Verificando si es un archivo markdown
  isItMarkdown: pt => {
    const mdExpression = /.md$/gm;

    if (mdExpression.test(pt) == true) {
      return true;
    } else {
      return false;
    }
  },
  //Leer archivos markdown
  readingMdFile: pt => {
    let info = fs.readFileSync(pt, {
      encoding: 'utf8',
      flag: 'r'
    });
    let html1 = marked(info);
    const dom = new JSDOM(html1);
    let links = dom.window.document.querySelectorAll('a');
    let arrayDeUrls = Array.from(links).map(element => "href: " + element.href + " name: " + element.textContent + " path: " + pt);
    return arrayDeUrls;
  },
  //Leyendo directorios y buscando archivos
  readingDirectories: pt => {
    let filenames = fs.readdirSync(pt);
    let listOfAllFiles = [];
    filenames.forEach(file => {
      const pth = path.resolve(pt, file);
      let response = mdlinks.verifyPath(pth);

      if (response == "file") {
        listOfAllFiles.push(file);
        console.log(file);
      } else if (response == "directory") {
        let direcFileNames = mdlinks.readingDirectories(pth);
        console.log(direcFileNames);
        listOfAllFiles.concat(direcFileNames);
      }
    });
    return listOfAllFiles;
  }
};
/*  export function takingThePath(ruta){
   console.log(path.isAbsolute(ruta), ruta )
    return new Promise((resolve, reject) => {
       if(path.isAbsolute(ruta) == true){
         const messageIsAbsolute = "Es absoluto";
        resolve( messageIsAbsolute );
       }else if(path.isAbsolute(ruta) == false){
         const messageIsRelative = new Error("Es relativo");
         reject(console.log(messageIsRelative));
       }
    })
 } */

exports.mdlinks = mdlinks;
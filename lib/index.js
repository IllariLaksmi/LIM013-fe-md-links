"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdlinks = void 0;

var _console = require("console");

const fs = require('fs');

const path = require('path');

const jsdom = require("jsdom");

const {
  JSDOM
} = jsdom;

const marked = require("marked");

const html = marked('# Marked in Node.js\n\nRendered by **marked**.');
const mdlinks = {
  //Verificando si el path es absoluto, si es relativo se cambia a absoluto
  takingThePath: pt => {
    if (path.isAbsolute(pt) == true) {
      return pt;
    } else if (path.isAbsolute(pt) == false) {
      let ruta1 = path.resolve(pt);
      return ruta1;
    }
  },
  //Verificando si es un archivo o directorio
  verifyPath: pt => {
    let objectStats = fs.statSync(pt);

    if (objectStats.isFile() == true) {
      return "es un archivo";
    } else if (objectStats.isDirectory() == true) {
      return "es un directorio";
    } else {
      return "no es un archivo leíble";
    }
  },
  //Verificando si es un archivo markdown
  isItMarkdown: pt => {
    let objectStats = fs.statSync(pt);
    const mdExpression = /.md$/gm;

    if (mdExpression.test(pt) == true) {
      return "es un archivo md";
    } else {
      return "no es un archivo md";
    }
  },
  //Leer archivos markdown
  readingMdFile: pt => {
    fs.readFile(pt, "utf-8", (err, data) => {
      if (err) {
        return _console.error;
      } else {
        let html1 = marked(data);
        const dom = new JSDOM(html1, {
          href: "example.org",
          text: "example",
          file: pt
        });
        return dom.window.document.querySelector("a").href, dom.window.document.querySelector("a").textContent;
      }
    });
  },
  //Leyendo directorios y buscando archivos
  readingDirectories: pt => {
    fs.readdir(pt, (err, files) => {
      if (err) {
        console.log(_console.error);
      } else {
        console.log(files);
      }
    });
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
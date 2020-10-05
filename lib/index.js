"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.takingThePath = takingThePath;
exports.verifyPath = verifyPath;
exports.isItMarkdown = isItMarkdown;
exports.readingDirectories = readingDirectories;

/* export function suma(a,b){
  return a+b;
 }
 */
const fs = require('fs');

const path = require('path'); //Verificando si el path es absoluto, si es relativo se cambia a absoluto


function takingThePath(pt) {
  if (path.isAbsolute(pt) == true) {
    return pt;
  } else if (path.isAbsolute(pt) == false) {
    pt = path.resolve(pt);
    return pt;
  }
} //Verificando si es un archivo o directorio


function verifyPath(pt) {
  let objectStats = fs.statSync(pt);

  if (objectStats.isFile() == true) {
    return console.log("es un archivo");
  } else if (objectStats.isDirectory() == true) {
    return console.log(" es un directorio");
  } else {
    return console.log("no es un archivo leíble");
  }
} //Verificando si es un archivo markdown


function isItMarkdown(pt) {
  let objectStats = fs.statSync(pt);
  const mdExpression = /.md$/gm;

  if (mdExpression.test(pt) == true) {
    return console.log("Es un archivo md");
  } else {
    return console.log(pt, "No es un archivo md");
  }
} //Leer archivos markdown

/* export function readingMdFile(pt){
   fs.readFile(pt, (err, data) )
   if(err){throw err};
   console.log(data);
 }*/
//Leyendo directorios y buscando archivos


function readingDirectories(pt) {
  fs.readdir(pt, (err, files));

  if (err) {
    console.log(err);
  } else {
    console.log(pt);
    files.forEach(file => {
      console.log(file);
    });
  }
}
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
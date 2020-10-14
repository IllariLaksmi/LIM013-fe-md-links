import { error } from 'console';
import { ENOENT } from 'constants';
const { program } = require('commander');
program.version('0.0.1');

const fs = require('fs');
const path = require('path');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const marked = require("marked");
let arrayDeArchivos = {}

export const mdlinks = {
//Verificando si el path es absoluto, si es relativo se cambia a absoluto
takingThePath: (pt)=>{
  if(path.isAbsolute(pt) == true){
    return pt ;
  }else if(path.isAbsolute(pt) == false){
    let ruta1 = path.resolve(pt);
    return ruta1 ;
  }
},
//Verificando si es un archivo o directorio
verifyPath: (pt)=>{
  if( fs.statSync(pt).isFile() == true){
    return "file";
  }else if(fs.statSync(pt).isDirectory() == true){
    return "directory";
  }
},
//Verificando si es un archivo markdown
isItMarkdown: (pt)=>{
    const mdExpression = /.md$/gm ;
    if(mdExpression.test(pt) == true){
        return true;
    }
    else{
      return false ;
    }
  },
//Leer archivos markdown
 readingMdFile:(pt) =>{
  let info =fs.readFileSync(pt, {encoding:'utf8', flag:'r'}) 
  let html1 = marked(info);
  const dom = new JSDOM(html1);
  let links = dom.window.document.querySelectorAll('a');
  let arrayDeUrls = Array.from(links).map(element => 
  "href: "+element.href + " name: " + element.textContent + " path: "+ pt)
  return arrayDeUrls;
}
,
//Leyendo directorios y buscando archivos
readingDirectories: (pt) => {

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

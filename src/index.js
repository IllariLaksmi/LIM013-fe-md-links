import { error } from 'console';
import { ENOENT } from 'constants';
const { program } = require('commander');
program.version('0.0.1');

const fs = require('fs');
const path = require('path');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const marked = require("marked");
export const mdlinks = {
//Verificando si el path es absoluto, si es relativo se cambia a absoluto
takingThePath: (pt)=>{
  return path.resolve(pt);
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
  let urls = Array.from(links).map(element => 
  element.href);
  let names = Array.from(links).map(element => 
    element.href);
  let paths = Array.from(links).map(element => 
      element.href);
  return urls ;
}
,
//Leyendo directorios y buscando archivos
readingDirectories: (pt) => {
  let filenames = fs.readdirSync(pt, "utf-8");
  let listOfAllFiles = [];
  filenames.forEach( file => {
    const pth = path.resolve(pt,file);
    let response =  mdlinks.verifyPath(pth);
    if(response == "file"){
     listOfAllFiles.push(file);
    }else if(response == "directory"){
     let direcFileNames = mdlinks.readingDirectories(pth);
    listOfAllFiles = listOfAllFiles.concat(direcFileNames);
    }
  })
  return listOfAllFiles
}
}

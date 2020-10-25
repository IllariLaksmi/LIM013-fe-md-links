const { program } = require('commander');

program.version('0.0.1');

const fs = require('fs');
const path = require('path');
const jsdom = require('jsdom');

const { JSDOM } = jsdom;
const marked = require('marked');

export const mdlinksMethods = {
  validatePath: (route) => fs.existsSync(route),
  // Verificando si el path es absoluto, si es relativo se cambia a absoluto
  takingThePath: (pt) => path.resolve(pt),
  // Verificando si es un archivo o directorio
  verifyPath: (pt) => {
    if (fs.statSync(pt).isFile() === true) {
      return 'file';
    } if (fs.statSync(pt).isDirectory() === true) {
      return 'directory';
    }
  },
  // Verificando si es un archivo markdown
  isItMarkdown: (pt) => {
    const mdExpression = /.md$/gm;
    if (mdExpression.test(pt) === true) {
      return true;
    }

    return false;
  },
  // Leer archivos markdown
  bringingLinksUrls: (pt) => {
    const info = fs.readFileSync(pt, { encoding: 'utf8', flag: 'r' });
    const html1 = marked(info);
    const dom = new JSDOM(html1);
    const links = dom.window.document.querySelectorAll('a');
    const urls = Array.from(links).map((element) => element.href);
    return urls;
  },
  bringingLinksNames: (pt) => {
    const info = fs.readFileSync(pt, { encoding: 'utf8', flag: 'r' });
    const html1 = marked(info);
    const dom = new JSDOM(html1);
    const links = dom.window.document.querySelectorAll('a');
    const names = Array.from(links).map((element) => element.textContent);
    return names;
  },
  readingMdFile: (pt) => {
    const info = fs.readFileSync(pt, { encoding: 'utf8', flag: 'r' });
    const html1 = marked(info);
    const dom = new JSDOM(html1);
    const links = dom.window.document.querySelectorAll('a');
    const description = Array.from(links).map((element) => `${pt} ${element.href} ${element.textContent}\n`);
    return description.join('');
  },
  // Leyendo directorios y buscando archivos
  readingDirectories: (pt) => {
    const filenames = fs.readdirSync(pt, 'utf-8');
    let listOfAllFiles = [];
    filenames.forEach((file) => {
      const pth = path.resolve(pt, file);
      const response = mdlinksMethods.verifyPath(pth) ;
      if ((response === 'file') && (mdlinksMethods.isItMarkdown(pth)=== true)) {
        let linkFiles = mdlinksMethods.readingMdFile(pth);
        listOfAllFiles.push(linkFiles);
      } else if (response === 'directory') {
        const direcFileNames = mdlinksMethods.readingDirectories(pth);
        listOfAllFiles = listOfAllFiles.concat(direcFileNames);
      }
    });
    return listOfAllFiles.join('');
  },
  bringingLinksUrlsDirectory: (pt) => {
    const filenames = fs.readdirSync(pt, 'utf-8');
    let listOfAllFiles = [];
    filenames.forEach((file) => {
      const pth = path.resolve(pt, file);
      const response = mdlinksMethods.verifyPath(pth) ;
      if ((response === 'file') && (mdlinksMethods.isItMarkdown(pth)=== true)) {
        let linkFiles = mdlinksMethods.bringingLinksUrls(pth);
        listOfAllFiles.push(linkFiles);
      } else if (response === 'directory') {
        const direcFileNames = mdlinksMethods.bringingLinksUrlsDirectory(pth);
        listOfAllFiles = listOfAllFiles.concat(direcFileNames);
      }
    })
    return listOfAllFiles;
  }

}

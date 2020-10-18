import { error } from 'console';
import { ENOENT } from 'constants';
import {mdlinks} from '../src/index.js'
import {stats} from '../src/stats.js'
const path = require('path');
/* const mdlinks = require('../');  */
//Test de verificación de ruta
describe('takingThePath', () => {
  it('should be a function', () => {
    expect(typeof mdlinks.takingThePath).toBe('function');
});
  it('should accept an absolute path', () => {
    const route = "C:\\Users\\51981\\Documents\\LIM013-fe-md-links\\pruebas\\prueba1.md";
    expect( mdlinks.takingThePath(route)).toBe(route);
  });
  it('should transform a relative path', () => {
    const relativeRoute ="pruebas\\prueba1.md";
    const absoluteRoute ="C:\\Users\\51981\\Documents\\LIM013-fe-md-links\\pruebas\\prueba1.md";
    expect( mdlinks.takingThePath(relativeRoute)).toEqual(absoluteRoute);
  })

});
//Test de verificación si es un archivo o directorio
describe('verifyPath', () => {
  it('should be a function', () => {
    expect(typeof mdlinks.verifyPath).toBe('function');
  });
  it('should tell if it is a file', () => {
    const route = "C:\\Users\\51981\\Documents\\LIM013-fe-md-links\\pruebas\\prueba1.md";
    expect( mdlinks.verifyPath(route)).toBe('file');
  });
  it('should tell if it is a directory', () => {
    const dirRoute = "C:\\Users\\51981\\Documents\\LIM013-fe-md-links\\pruebas\\a\\b";
    expect( mdlinks.verifyPath(dirRoute)).toBe('directory')
  })
});
//Test de verificación si es un archivo markdown
describe('isItMarkdown', () => {
  it('should be a function', () => {
    expect(typeof mdlinks.isItMarkdown).toBe('function');
  });
  it('should tell if it is markdown', () => {
    const route = "C:\\Users\\51981\\Documents\\LIM013-fe-md-links\\pruebas\\prueba1.md";
    expect( mdlinks.isItMarkdown(route)).toBe(true);
  });
  it('should tell if it is not markdown', () => {
    const route = "C:\\Users\\51981\\Documents\\LIM013-fe-md-links\\pruebas\\a\\b";
    expect( mdlinks.isItMarkdown(route)).toBe(false);
  });
});
//Test de lectura de archivos
describe.skip('readingMdFile', () => {
  it('should be a function', () => {
    expect(typeof mdlinks.readingMdFile).toBe('function');
  });
  it('should return href, textContent and file', done => {
    const route = "C:\\Users\\51981\\Documents\\LIM013-fe-md-links\\pruebas\\prueba1.md";
     const links = [
      "href: https://nodeca.github.io/pica/demo/ name: pica path: C:\\Users\\51981\\Documents\\LIM013-fe-md-links\\pruebas\\prueba1.md",        
      "href: https://github.com/nodeca/babelfish/ name: babelfish path: C:\\Users\\51981\\Documents\\LIM013-fe-md-links\\pruebas\\prueba1.md",
    ];
    expect( mdlinks.readingMdFile(route)).toStrictEqual(links); 
    done();
  });
});
describe('readingDirectories', () => {
  it('should be a function', () => {
    expect(typeof mdlinks.readingDirectories).toBe('function');
  });
  it('should return the a file when the directory has only one file', () => {
    const route = "C:\\Users\\51981\\Documents\\LIM013-fe-md-links\\pruebas\\a";
    expect(mdlinks.readingDirectories(route)).toStrictEqual([ 'prueba2.md', 'prueba3.md' ]);
  })
})
describe('option --stats', () => {
  it('should be a function', () => {
    expect(typeof stats).toBe('function');
  });
  it('should return total an unique links', () => {
    const route ="C:\\Users\\51981\\Documents\\LIM013-fe-md-links\\pruebas\\a";
    const routeCorrected = mdlinks.readingMdFile(route);
    const response = "Total: 4\nUnique: 2";
    expect(stats(route)).toStrictEqual(routeCorrected);
  }) 
})
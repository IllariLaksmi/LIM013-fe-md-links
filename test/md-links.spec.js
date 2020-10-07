import { error } from 'console';
import {mdlinks} from '../src/index.js'
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
    expect( mdlinks.verifyPath(route)).toBe('es un archivo');
  });
  it('should tell if it is a directory', () => {
    const dirRoute = "C:\\Users\\51981\\Documents\\LIM013-fe-md-links\\pruebas\\a\\b";
    expect( mdlinks.verifyPath(dirRoute)).toBe('es un directorio')
  })
  it('should tell if it is not a readable file', () => {
    const weirdRoute ="www.google.com";
    expect( mdlinks.verifyPath(weirdRoute)).toThrow(error);
  })
});
//Test de verificación si es un archivo markdown
describe('isItMarkdown', () => {
  it('should be a function', () => {
    expect(typeof mdlinks.isItMarkdown).toBe('function');
  });
  it('should tell if it is markdown', () => {
    const route = "C:\\Users\\51981\\Documents\\LIM013-fe-md-links\\pruebas\\prueba1.md";
    expect( mdlinks.isItMarkdown(route)).toBe('es un archivo md');
  });
  it('should tell if it is not markdown', () => {
    const route = "C:\\Users\\51981\\Documents\\LIM013-fe-md-links\\pruebas\\a\\b";
    expect( mdlinks.isItMarkdown(route)).toBe('no es un archivo md')
  });
});
//Test de lectura de archivos
describe('readingMdFile', () => {
  it('should be a function', () => {
    expect(typeof mdlinks.readingMdFile).toBe('function');
  });
  it('should return href, textContent and file', () => {
    const route = "C:\\Users\\51981\\Documents\\LIM013-fe-md-links\\pruebas\\prueba1.md";
    const result = "https://nodeca.github.io/pica/demo/ pica C:\\Users\\51981\\Documents\\LIM013-fe-md-links\\pruebas\\prueba1.md";
    expect( mdlinks.readingMdFile(route)).toBe(result);
  });
});
describe('readingDirectories', () => {
  it('should be a function', () => {
    expect(typeof mdlinks.readingDirectories).toBe('function');
  })
})
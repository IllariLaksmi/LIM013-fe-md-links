import { mdlinksMethods } from '../src/index.js';
import { stats } from '../src/stats.js';
/* const mdlinks = require('../');  */
// Test de verificación de ruta
describe('takingThePath', () => {
  it('should be a function', () => {
    expect(typeof mdlinksMethods.takingThePath).toBe('function');
  });
  it('should accept an absolute path', () => {
    const route = 'C:\\Users\\51981\\Documents\\LIM013-fe-md-links\\pruebas\\prueba1.md';
    expect(mdlinksMethods.takingThePath(route)).toBe(route);
  });
  it('should transform a relative path', () => {
    const relativeRoute = 'pruebas\\prueba1.md';
    const absoluteRoute = 'C:\\Users\\51981\\Documents\\LIM013-fe-md-links\\pruebas\\prueba1.md';
    expect(mdlinksMethods.takingThePath(relativeRoute)).toEqual(absoluteRoute);
  });
});
// Test de verificación si es un archivo o directorio
describe('verifyPath', () => {
  it('should be a function', () => {
    expect(typeof mdlinksMethods.verifyPath).toBe('function');
  });
  it('should tell if it is a file', () => {
    const route = 'C:\\Users\\51981\\Documents\\LIM013-fe-md-links\\pruebas\\prueba1.md';
    expect(mdlinksMethods.verifyPath(route)).toBe('file');
  });
  it('should tell if it is a directory', () => {
    const dirRoute = 'C:\\Users\\51981\\Documents\\LIM013-fe-md-links\\pruebas\\a\\b';
    expect(mdlinksMethods.verifyPath(dirRoute)).toBe('directory');
  });
});
// Test de verificación si es un archivo markdown
describe('isItMarkdown', () => {
  it('should be a function', () => {
    expect(typeof mdlinksMethods.isItMarkdown).toBe('function');
  });
  it('should tell if it is markdown', () => {
    const route = 'C:\\Users\\51981\\Documents\\LIM013-fe-md-links\\pruebas\\prueba1.md';
    expect(mdlinksMethods.isItMarkdown(route)).toBe(true);
  });
  it('should tell if it is not markdown', () => {
    const route = 'C:\\Users\\51981\\Documents\\LIM013-fe-md-links\\pruebas\\a\\b';
    expect(mdlinksMethods.isItMarkdown(route)).toBe(false);
  });
});
// Test de lectura de archivos
describe('readingMdFile', () => {
  it('should be a function', () => {
    expect(typeof mdlinksMethods.readingMdFile).toBe('function');
  });
  it('should return href, textContent and file', (done) => {
    const route = 'C:\\Users\\51981\\Documents\\LIM013-fe-md-links\\pruebas\\prueba1.md';
    let links = [
      "C:\\Users\\51981\\Documents\\LIM013-fe-md-links\\pruebas\\prueba1.md https://nodeca.github.io/pica/demo/ pica",
      "C:\\Users\\51981\\Documents\\LIM013-fe-md-links\\pruebas\\prueba1.md https://github.com/nodeca/babelfish/ babelfish",
      "C:\\Users\\51981\\Documents\\LIM013-fe-md-links\\pruebas\\prueba1.md https://github.com/nodeca/babelfis/ babelfish",
      "C:\\Users\\51981\\Documents\\LIM013-fe-md-links\\pruebas\\prueba1.md https://github.com/nodeca/babexxxxxx/ babelfish"
    ];
    links =links.join(' ');
    expect(mdlinksMethods.readingMdFile(route)).toEqual(links);
    done();
  });
});
// Test directorios
describe('readingDirectories', () => {
  it('should be a function', () => {
    expect(typeof mdlinksMethods.readingDirectories).toBe('function');
  });
  it('should return the a file when the directory has only one file', () => {
    const route = 'C:\\Users\\51981\\Documents\\LIM013-fe-md-links\\pruebas\\a';
    const result = ['C:\\Users\\51981\\Documents\\LIM013-fe-md-links\\pruebas\\a\\b\\prueba2.md https://nodeca.github.io/pica/demo/ pica',
    'C:\\Users\\51981\\Documents\\LIM013-fe-md-links\\pruebas\\a\\b\\prueba2.md https://github.com/nodeca/babelfish/ babelfish',
    'C:\\Users\\51981\\Documents\\LIM013-fe-md-links\\pruebas\\a\\prueba3.md https://nodeca.github.io/pica/demo/ pica',
    'C:\\Users\\51981\\Documents\\LIM013-fe-md-links\\pruebas\\a\\prueba3.md https://github.com/nodeca/babelfis/ babelfish']
    expect(mdlinksMethods.readingDirectories(route)).toEqual(result);
  });
});
// Test opion stats
describe('option --stats', () => {
  it('should be a function', () => {
    expect(typeof stats).toBe('function');
  });
  it('should return total an unique links', () => {
    const route = 'C:\\Users\\51981\\Documents\\LIM013-fe-md-links\\pruebas\\prueba1.md';
    const routeCorrected = mdlinksMethods.bringingLinksUrls(route);
    const response = 'Total: 4\nUnique: 4';
    expect(stats(routeCorrected)).toStrictEqual(response);
  });
});
describe('bringinglinksUrls', () => {
  it('should be a function', () => {
    expect(typeof mdlinksMethods.bringingLinksUrls).toBe('function')
  })
})
it('should return links', () => {
  const route = 'C:\\Users\\51981\\Documents\\LIM013-fe-md-links\\pruebas\\prueba1.md';
  const response = ['https://nodeca.github.io/pica/demo/'];
  expect(mdlinksMethods.bringingLinksUrls(route)).toBe(response)
})
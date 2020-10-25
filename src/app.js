import { mdlinksMethods } from './index.js';
import { validate } from './validate.js';
import { stats } from './stats.js';
import { statsValidate } from './statsValidate.js';

export const mdlinks = (path, options) => {
  if (mdlinksMethods.validatePath(path)) {
    if (mdlinksMethods.takingThePath(path)) {
      if (mdlinksMethods.verifyPath(path) === 'file') {
        if (mdlinksMethods.isItMarkdown) {
          if (options === undefined) {
            return console.log(mdlinksMethods.readingMdFile(path));
          } if (options.validatex === true) {
            return validate(path);
          } if (options.statsx === true) {
            const links = mdlinksMethods.bringingLinksUrls(path);
            return stats(links);
          } if (options.statsValidatex === true) {
            const links = mdlinksMethods.bringingLinksUrls(path);
            return statsValidate(links);
          }
        }
      } else if (mdlinksMethods.verifyPath(path) === 'directory') {
        if (options === undefined) {
          return console.log(mdlinksMethods.readingDirectories(path));
        } if (options.validatex === true) {
          const links = mdlinksMethods.bringingLinksUrlsDirectory(path);
          return validate(links);
        } if (options.statsx === true) {
          let links = mdlinksMethods.bringingLinksUrlsDirectory(path);
          links = links[0].concat(links[1])
          return stats(links);
        }
      }
    }
  }
};

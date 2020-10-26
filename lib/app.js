"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdlinks = void 0;

var _index = require("./index.js");

var _validate = require("./validate.js");

var _stats = require("./stats.js");

var _statsValidate = require("./statsValidate.js");

var _validateDirectory = require("./validateDirectory.js");

const mdlinks = (path, options) => {
  if (_index.mdlinksMethods.validatePath(path) && _index.mdlinksMethods.takingThePath(path)) {
    if (_index.mdlinksMethods.verifyPath(path) === 'file' && _index.mdlinksMethods.isItMarkdown(path)) {
      if (options === undefined) {
        return console.log(_index.mdlinksMethods.readingMdFile(path));
      }

      if (options.validatex === true) {
        return (0, _validate.validate)(path);
      }

      if (options.statsx === true) {
        const links = _index.mdlinksMethods.bringingLinksUrls(path);

        return (0, _stats.stats)(links);
      }

      if (options.statsValidatex === true) {
        const links = _index.mdlinksMethods.bringingLinksUrls(path);

        return (0, _statsValidate.statsValidate)(links);
      }
    } else if (_index.mdlinksMethods.verifyPath(path) === 'directory') {
      if (options === undefined) {
        return console.log(_index.mdlinksMethods.readingDirectories(path));
      }

      if (options.validatex === true) {
        return (0, _validateDirectory.validateDirectory)(path);
      }

      if (options.statsx === true) {
        const links = _index.mdlinksMethods.bringingLinksUrlsDirectory(path);

        return (0, _stats.stats)(links);
      }

      if (options.statsValidatex === true) {
        const links = _index.mdlinksMethods.bringingLinksUrlsDirectory(path);

        return (0, _statsValidate.statsValidate)(links);
      }
    }
  }
};

exports.mdlinks = mdlinks;
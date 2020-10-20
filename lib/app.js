"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdlinks = void 0;

var _index = require("./index.js");

var _validate = require("./validate.js");

var _stats = require("./stats.js");

var _statsValidate = require("./statsValidate.js");

const mdlinks = (path, options) => {
  if (_index.mdlinksMethods.validatePath(path)) {
    if (_index.mdlinksMethods.takingThePath(path)) {
      if (_index.mdlinksMethods.verifyPath(path) == "file") {
        if (_index.mdlinksMethods.isItMarkdown) {
          if (options == undefined) {
            return console.log(_index.mdlinksMethods.readingMdFile(path));
          } else if (options.validatex == true) {
            let links = _index.mdlinksMethods.bringingLinksUrls(path);

            return (0, _validate.validate)(links);
          } else if (options.statsx == true) {
            let links = _index.mdlinksMethods.bringingLinksUrls(path);

            return (0, _stats.stats)(links);
          } else if (options.statsValidatex == true) {
            let links = _index.mdlinksMethods.readingMdFile(path);

            return (0, _statsValidate.statsValidate)(links);
          }
        }
      } else if (_index.mdlinksMethods.verifyPath(path) == "directory") {
        if (options == undefined) {
          return _index.mdlinksMethods.readingDirectories(path);
        } else if (options.validatex == true) {
          let links = _index.mdlinksMethods.readingDirectories(path);

          return (0, _validate.validate)(links);
        } else if (options.statsx == true) {
          let links = _index.mdlinksMethods.readingDirectories(path);

          return (0, _stats.stats)(links);
        }
      }
    }
  }
};

exports.mdlinks = mdlinks;
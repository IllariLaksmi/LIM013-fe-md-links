import { mdlinksMethods } from './index.js'
import { validate } from './validate.js'
import { stats } from './stats.js'
import { statsValidate } from './statsValidate.js';
const fs = require('fs');
const path = require('path');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const marked = require("marked");
const { program } = require('commander');
program.version('0.0.1');

export  const mdlinks = (path, options) => {
        if(mdlinksMethods.validatePath(path)){
            if(mdlinksMethods.takingThePath(path)){
                if(mdlinksMethods.verifyPath(path) == "file"){
                    if(mdlinksMethods.isItMarkdown){
                        if(options == undefined){
                            return console.log(mdlinksMethods.readingMdFile(path));
                        }else if(options.validatex == true){
                            let links = mdlinksMethods.readingMdFile(path);
                            return validate(links);
                        }else if(options.statsx == true){
                            let links = mdlinksMethods.readingMdFile(path);
                            return stats(links);
                        }else if(options.statsValidatex == true){
                            let links = mdlinksMethods.readingMdFile(path);
                            return statsValidate(links);
                        }
                    }
                }else if(mdlinksMethods.verifyPath(path) == "directory"){
                    if(options == undefined){
                        return mdlinksMethods.readingDirectories(path);
                    }else if(options.validatex == true){
                        let links = mdlinksMethods.readingDirectories(path);
                        return validate(links);
                    }else if(options.statsx == true){
                        let links = mdlinksMethods.readingDirectories(path);
                        return stats(links);
                    }
               }  
            }
        }
}

 
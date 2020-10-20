import { mdlinksMethods } from './index.js'
import { validate } from './validate.js'
import { stats } from './stats.js'
import { statsValidate } from './statsValidate.js';
export  const mdlinks = (path, options) => {
        if(mdlinksMethods.validatePath(path)){
            if(mdlinksMethods.takingThePath(path)){
                if(mdlinksMethods.verifyPath(path) == "file"){
                    if(mdlinksMethods.isItMarkdown){
                        if(options == undefined){
                            return console.log(mdlinksMethods.readingMdFile(path));
                        }else if(options.validatex == true){
                            let links = mdlinksMethods.bringingLinksUrls(path);
                            return validate(links);
                        }else if(options.statsx == true){
                            let links = mdlinksMethods.bringingLinksUrls(path);
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

 
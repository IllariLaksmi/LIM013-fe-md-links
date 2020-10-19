//Funcion --stats --validate
import {validate} from './validate.js'
import {stats} from './stats.js'
export const statsValidate = (links => {
    let validatedLinks = validate(links);
    let broken = 0;
    validatedLinks.forEach(link => {
        if((response.status >= 400  ) && (response.status <= 599)){
            broken++;
        }    
    })
    return console.log("Broken: " + broken);
    });

// Funcion --stats --validate
import { mdlinksMethods } from './index.js';
import { stats } from './stats.js';
const fetch = require('node-fetch');
export const statsValidate = (links) => {
let broken = "Broken : "
console.log(stats(links))
console.log(broken);
    links.forEach(link => {
        fetch(link)
        .then(response => {if((response.status >= 400 && response.status <= 599)){
            console.log(link)
        }})
        .catch(error => console.log(link))
        
    });
}
//Verificando si los links están rotos
const fetch = require("node-fetch");
const fs = require('fs');
const path = require('path');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const marked = require("marked");
export const validate = (links, route) => {
links.forEach(link => {
    fetch(link)
    .then(response => {
        if((response.status >= 200  ) && (response.status <= 299)){
            let info = fs.readFileSync(route, {encoding:'utf8', flag:'r'}) ;
            let html1 = marked(info);
            const dom = new JSDOM(html1);
            let arraylinks = dom.window.document.querySelectorAll('a');
            let description = Array.from(arraylinks).map(element => 
                route + " " + element.href+ " "+ "ok" + response.status + " " + element.textContent+ "\n");
            return description.join('') ;
        }else if((response.status >= 400  ) && (response.status <= 599)){
            let info = fs.readFileSync(route, {encoding:'utf8', flag:'r'}) ;
            let html1 = marked(info);
            const dom = new JSDOM(html1);
            let arraylinks = dom.window.document.querySelectorAll('a');
            let description = Array.from(arraylinks).map(element => 
                route + " " + element.href+ " " + "fail" + response.status + " " + element.textContent+ "\n");
            return description.join('') ;
        }
    })
    .catch(error => console.log("Hubo un error", error));
})
}
//Verificando si los links están rotos
const fetch = require("node-fetch");
const fs = require('fs');
const path = require('path');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const marked = require("marked");
export const validate = (route) => {
    let info = fs.readFileSync(route, {encoding:'utf8', flag:'r'}) ;
    let html1 = marked(info);
    const dom = new JSDOM(html1);
    let links = dom.window.document.querySelectorAll('a');
    let description = Array.from(links).map(link => {
    fetch(link)
    .then(response => {
        if((response.status >= 200  ) && (response.status <= 299)){
            route + " " + link.href+ " "+ "ok" + " " + response.status + " " + link.textContent+ "\n";  
        }else if((response.status >= 400  ) && (response.status <= 599)){
            route + " " + link.href+ " " + "fail"+ " " + response.status + " " + link.textContent+ "\n";
        }
    })
    .catch(error => console.log("Hubo un error", error));
})
return description.join('');
}
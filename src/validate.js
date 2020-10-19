//Verificando si los links están rotos
const fetch = require("node-fetch");
export const validate = (links) => {
let linksStatus = []; 
links.forEach(link => {
    fetch(link)
    .then(response => {
        console.log(response.status);
        linksStatus.push(response.status);
        if((response.status >= 200  ) && (response.status <= 299)){
            console.log("ok");
        }else if((response.status >= 400  ) && (response.status <= 599)){
            console.log("fail");
        }
    })
    .catch(error => console.log("Hubo un error", error))
});
    return linksStatus;
}
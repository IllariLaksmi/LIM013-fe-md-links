//Brindando estadísticas sencillas de los links
export let stats = (links) => {
    //El total de links
    const total = "Total: " + links.length;
    //Contando cuantos son únicos
    const comparingLinks = Array.from(links).filter(function(link, index, array){
     return array.indexOf(link) === index});
    const uniqueLinks = "Unique: " + comparingLinks.length;
    const info = total + "\n" + uniqueLinks;
    return info;
}
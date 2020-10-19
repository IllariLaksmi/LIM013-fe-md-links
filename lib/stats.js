"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stats = void 0;

//Brindando estadísticas sencillas de los links
let stats = links => {
  //El total de links
  const total = "Total: " + links.length; //Contando cuantos son únicos

  const comparingLinks = Array.from(links).filter(function (link, index, array) {
    return array.indexOf(link) === index;
  });
  const uniqueLinks = "Unique: " + comparingLinks.length;
  const info = total + "\n" + uniqueLinks;
  return info;
};

exports.stats = stats;
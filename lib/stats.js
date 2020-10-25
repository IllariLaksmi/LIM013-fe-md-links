"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stats = void 0;

// Brindando estadísticas sencillas de los links
const stats = links => {
  // El total de links
  const total = `Total: ${links.length}`; // Contando cuantos son únicos

  const linksComp = Array.from(links).filter((link, index, array) => array.indexOf(link) === index);
  const uniqueLinks = `Unique: ${linksComp.length}`;
  const info = `${total}\n${uniqueLinks}`;
  console.log(info);
  return info;
};

exports.stats = stats;
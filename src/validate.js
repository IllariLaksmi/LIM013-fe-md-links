import { mdlinksMethods } from '.';

// Verificando si los links están rotos
const fetch = require('node-fetch');

export const validate = (route) => {
  const links = mdlinksMethods.bringingLinksUrls(route);
  const description = Array.from(links).forEach((link) => {
    fetch(link)
      .then((response) => {
        if ((response.status >= 200) && (response.status <= 299)) {
          const linkOk = `${route} ${link.href} ok ${response.status} ${link.textContent}\n`;
          console.log(linkOk);
        } else if ((response.status >= 400) && (response.status <= 599)) {
          const linkFail = `${route} ${link.href} fail ${response.status} ${link.textContent}\n`;
          console.log(linkFail);
        }
      })
      .catch((error) => console.log('Hubo un error', error));
  });
  return description;
};

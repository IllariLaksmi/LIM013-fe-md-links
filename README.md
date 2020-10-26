## Markdown Links
CLI diseñada para verificar si tus links dentro de archivos markdown están rotos, además de brindarte estadísticas sobre los mismos.
### Diagrama de flujo
![Diagrama](images\diagrama.png)
### Instalación 🔧
    ```
    npm install --global <illariLaksmi>/md-links
    ```
### Uso de la libreria
  Puedes revisar tanto archivos solos como directorios, para utilizar la libreria solo tienes que poner el comando md-links, a continuación el path y si deseas validar los links o ver sus estadísticas tienes --stats y --validate:
  Ejemplo
  Para verificar solo un archivo o directorio
  `md-links example/file.md`
  Para verificar los links
  `md-links example/file.md --validate`
  Para verificar estadísticas
  `md-links example/file.md --stats`
  Para verificar estadísticas y validar
  `md-links example/file.md --stats --validate`
  ## Construido con 🛠️
* Node.JS
* JavaScript
## Autores ✒️
* **Illari Alvarez-Gil Escobar** -  [illariLaksmi](https://github.com/illariLaksmi)

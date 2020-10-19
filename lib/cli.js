"use strict";

var _process = require("process");

var _app = require("./app.js");

var _validate = require("./validate.js");

const {
  Command
} = require('commander');

const program = new Command();

const process = require('process');

program.version('0.0.1');
program.command('mdlinks <path>').description('Links valitation of MD Files').option("-v, --validate").option("-s, --stats").action(() => {}).parse(process.argv);
let arg = process.argv.slice(2);

if (arg.length == 1) {
  console.log("hola");
  (0, _app.mdlinks)(arg[0]);
}

if (arg.length == 2) {
  if (arg[1] == "--validate") {
    (0, _app.mdlinks)(arg[0], {
      validatex: true
    });
  }

  if (arg[1] == "--stats") {
    (0, _app.mdlinks)(arg[0], {
      statsx: true
    });
  }
}

if (arg.length == 3) {
  if (arg[1] == "--stats" && arg[2] == "--validate") {
    (0, _app.mdlinks)(arg[0], {
      statsValidatex: true
    });
  }
}
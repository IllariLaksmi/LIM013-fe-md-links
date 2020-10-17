const { Command } = require('commander');
const program = new Command();
const process = require('process');
const mdLinks = require('mdlinks');
program.version('0.0.1');
program
    .command('mdlinks <path>')
    .description('Links valitation of MD Files')
    .option("-v, --validate")
    .option("-s, --stats")
    .action( () =>{
        return console.log("hello")
    })
    .parse(process.argv)
#! /usr/bin/env node
const { Command } = require('commander');
const program = new Command();
import { argv } from 'process';
import {mdlinks} from './app.js';
import { validate } from './validate.js';
const process = require('process');
program.version('0.0.1');
program
    .command('mdlinks <path>')
    .description('Links valitation of MD Files')
    .option("-v, --validate")
    .option("-s, --stats")
    .action( () =>{})
    .parse(process.argv)
    let arg = process.argv.slice(2); 
    if(arg.length == 1){ 
        mdlinks(arg[0]);
    }
    if(arg.length == 2){
        if(arg[1] == "--validate"){
             mdlinks(arg[0], {validatex: true})
        }
        if(arg[1] == "--stats"){
             mdlinks(arg[0], {statsx: true})
        }
    }
    if(arg.length == 3){
        if((arg[1] == "--stats") && (arg[2] == "--validate")){
            mdlinks(arg[0], {statsValidatex: true})
        }
    }
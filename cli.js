#!/usr/bin/env node
'use strict';
var meow = require('meow');
var chalk = require('chalk');
var cordovaAssetGenerator = require('./');

var cli = meow({
  help: [
    'Usage',
    '  cordova-asset-generator --input <logo.svg> --outputDirectory <directory>',
    '',
    '',
    '--input <file.svg>            The input file (SVG format only).',
    '--outputDirectory <directory> The output directory. Missing segments will be created.',
    '[--config <config.json>]      Optional: custom config file for the generator.',
    '[--verbose]                   Optional: generate more verbose output.',
    ''
  ].join('\n')
});

var promise = null;

if (cli.flags.input && cli.flags.outputDirectory) {
  promise = cordovaAssetGenerator(cli.flags.input, cli.flags.outputDirectory, cli.flags.config, cli.flags.verbose);
} else {
  console.error(chalk.red.bold('Missing parameters. See help.'));
}

if (promise) {
  promise.then(() => {
    if (cli.flags.verbose) {
      console.log(chalk.green.bold('Success.'));
    }
  }).catch(err => {
    console.error(chalk.red.bold('Error: ' + err.message));
  });
}

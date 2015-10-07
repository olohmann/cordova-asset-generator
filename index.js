'use strict';
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var path = require('path');
var Imagemin = require('imagemin');
var pngMinifier = new Imagemin().use(Imagemin.optipng({optimizationLevel: 3}));
var svgRender = Promise.promisify(require('svgexport').render);
var mkdirp = Promise.promisify(require('mkdirp'));
var slash = require('slash');
var _ = require('lodash');

var defaultAssetConfig = require('./defaultAssetConfig.json');

function assetConfigToRenderOptions(assetConfig, inputFilePath, outputDirectory) {
  var outputs = [];
  var renderOptions = [
    {
      input: inputFilePath,
      output: outputs
    }
  ];

  _.forOwn(assetConfig, (platformConfig, assetType) => {
    _.forOwn(platformConfig, (assets, platformName) => {
      _.forEach(assets, asset => {
        let filePath = `${outputDirectory}/${assetType}/${platformName}/${asset.file}`;
        let cmd = `${filePath} pad ${asset.width}:${asset.height}`;
        outputs.push(cmd);
      });
    });
  });

  return renderOptions;
}

function render(renderOptions) {
  return svgRender(renderOptions).then(() => {
    return new Promise(function (resolve, reject) {
      pngMinifier.src('./**/*.png').dest('.').run((err, files) => {
        if (err) {
          reject('Could not optimize generated PNG files.');
        } else {
          resolve(files);
        }
      });
    });
  });
}

function run(inputFilePath, outputDirectory, config, verbose) {
  return fs.exists(inputFilePath, exists => {
    if (!exists) {
      throw new Error(`The given input ${inputFilePath} does not exist.`);
    }

    if (!outputDirectory) {
      throw new Error(`No outputDirectory provided.`);
    }

    if (!_.isString(outputDirectory)) {
      throw new Error(`outputDirectory is required to be a string.`);
    }

    if (!config) {
      config = defaultAssetConfig;
    } else {
      // TODO async...
      config = require(config);
    }

    outputDirectory = slash(path.normalize(outputDirectory));

    return mkdirp(outputDirectory)
      .then(() => {
        var renderOptions = assetConfigToRenderOptions(
          config, inputFilePath, outputDirectory);
        return render(renderOptions, outputDirectory);
      })
      .then(() => {
        if (verbose) {
          console.log(`Output written to ${outputDirectory}`);
        }
      });
  });
}

module.exports = run;

'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var deleteFile = require('../helpers/delete-file');
var getRootDir = require('../helpers/get-root-dir');
var path = require('path');

var ModelGenerator = module.exports = function ModelGenerator() {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    var fileJSON = this.config.get('config');

    // options
    this.delete = this.options.delete || '';
    this.jsFramework = fileJSON.jsFramework;
    this.jsOption = fileJSON.jsOption;
    this.singlePageApplication = fileJSON.singlePageApplication;
    this.testFramework = fileJSON.testFramework;
    this.useTesting = fileJSON.useTesting;

};

util.inherits(ModelGenerator, yeoman.generators.NamedBase);

// Prompts
ModelGenerator.prototype.ask = function ask() {
    if (!this.singlePageApplication) {
        this.log('This subgenerator is not available for Static Sites.\nOperation aborted');
        this.abort = true;
        return;
    }
    else if (this.jsFramework === 'react') {
        this.log('This subgenerator is not available for React application.\nOperation aborted');
        this.abort = true;
        return;
    }

    var createOrDelete = this.delete ? 'delete' : 'create';

    var done = this.async();
    var prompts = [{
        name: 'modelFile',
        message: 'Where would you like to ' + createOrDelete + ' this model?',
        default: 'client/scripts/models'
    }, {
        name: 'testFile',
        message: 'Where would you like to ' + createOrDelete + ' this model\'s test?',
        default: 'test/spec/models'
    }];

    this.prompt(prompts, function(answers) {
        // Get root directory
        this.rootDir = getRootDir(answers.testFile);

        this.modelFile = path.join(answers.modelFile, this._.slugify(this.name.toLowerCase()));
        this.testFile = path.join(answers.testFile, this._.slugify(this.name.toLowerCase()));
        done();
    }.bind(this));
};

// Create files
ModelGenerator.prototype.files = function files() {
    if (this.abort) {
        return;
    }
    if (!this.delete) {
        this.template('model.js', this.modelFile + '.js');
        if (this.useTesting) {
            this.template('model-spec.js', this.testFile + '-spec.js');
        }
    }
    else {
        deleteFile(this.modelFile + '.js', this);
        if (this.useTesting) {
            deleteFile(this.testFile + '-spec.js', this);
        }
    }
};
'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var HousestylesGenerator = module.exports = function HousestylesGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    // this.installDependencies({ skipInstall: options['skip-install'] });
    console.log("You're all done homie!");
    console.log("(>' ')> Hacky Hedgehog <(' '<)");
    console.log("______________________________")
  });

  // this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(HousestylesGenerator, yeoman.generators.Base);

HousestylesGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    type: 'confirm',
    name: 'modernizrUse',
    message: 'Would you like to use Modernizr?',
    default: true
  },
  {
    type: 'confirm',
    name: 'icomoonUse',
    message: 'Would you like to use the Icomoon font set?',
    default: true
  }];

  this.prompt(prompts, function (props) {
    this.modernizrUse = props.modernizrUse;
    this.icomoonUse = props.icomoonUse;

    cb();
  }.bind(this));
};

HousestylesGenerator.prototype.app = function app() {
  this.mkdir('static');
  this.mkdir('static/css');
  this.mkdir('static/fonts');
  this.mkdir('static/js');
  this.mkdir('static/styleguide');
  this.mkdir('static/css/less');
  this.mkdir('static/js/vendor');

  if(this.modernizrUse == true) {
    this.copy('grid.html', 'grid.html');
  }
  this.copy('index.html', 'index.html');
  this.copy('README.md', 'README.md');

  if(this.icomoonUse == true){
    this.copy('styleguide.html', 'styleguide.html');
  }

  this.directory('static', 'static');
};

HousestylesGenerator.prototype.projectfiles = function projectfiles() {
  // this.copy('editorconfig', '.editorconfig');
  // this.copy('jshintrc', '.jshintrc');
};

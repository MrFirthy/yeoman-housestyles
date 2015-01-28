'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var HousestylesGenerator = module.exports = function HousestylesGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    console.log("             (\\-“””””-/)    ");
    console.log("           .’           '.   ");
    console.log("          /  __       __  \\  ");
    console.log("         <  / O\\     / O\\  >");
    console.log("         <  \\__/  X  \\__/  >");
    console.log("         <   |         |   >");
    console.log("         <    (“)   (“)    >");
    console.log("          \\   (“)___(“)   / ");
    console.log("           `._         _.'  ");
    console.log("              '-.....-'     ");
    console.log(" ");
    console.log("You're all set up and ready to rock!");
    console.log("Also that's supposed to be a Hedgehog...");
  });
};

util.inherits(HousestylesGenerator, yeoman.generators.Base);

HousestylesGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [
    {
      type: "input",
      name: "pageTitle",
      message: "What should we name this?"
    },
    {
      type: 'confirm',
      name: 'responsiveUse',
      message: 'Would you like to add responsive styles?',
      default: true
    },
    {
      type: 'checkbox',
      name: 'features',
      message: 'What more would you like?',
      choices: [{
        name: 'Icomoon',
        value: 'icomoonUse',
        checked: true
      }, {
        name: 'Modernizr',
        value: 'modernizrUse',
        checked: true
      }]
    },

    {
      type: 'checkbox',
      name: 'lessFeatures',
      message: 'Which LESS additions would you like?',
      choices: [{
        name: 'Icons',
        value: 'iconUse',
        checked: true
      }, {
        name: 'Alerts',
        value: 'alertUse',
        checked: true
      }, {
        name: 'Popups',
        value: 'popupUse',
        checked: true
      }, {
        name: 'Tabs',
        value: 'tabUse',
        checked: true
      }]
    }

  ];


  this.prompt(prompts, function (answers) {
    var features = answers.features;
    var featuresLess = answers.lessFeatures;

    function hasFeature(feat) { return features.indexOf(feat) !== -1; }
    function hasLessFeature(feat) { return featuresLess.indexOf(feat) !== -1; }

    this.pageTitle = answers.pageTitle;
    // manually deal with the response, get back and store the results.
    // we change a bit this way of doing to automatically do this in the self.prompt() method.
    this.modernizrUse = hasFeature('modernizrUse');
    this.icomoonUse = hasFeature('icomoonUse');
    //this.responsiveUse = hasFeature('responsiveUse');
    this.responsiveUse = answers.responsiveUse;

    this.alertUse = hasLessFeature('alertUse');
    this.tabUse = hasLessFeature('tabUse');
    this.iconUse = hasLessFeature('iconUse');
    this.popupUse = hasLessFeature('popupUse');

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

  this.copy('grid.html', 'grid.html');
  this.copy('index.html', 'index.html');
  this.copy('README.md', 'README.md');
  this.copy('styleguide.html', 'styleguide.html');

  //styleguide
  this.directory('static/styleguide', 'static/styleguide');
  //js
  this.copy('static/js/main.js', 'static/js/main.js');
  this.copy('static/js/vendor/html5shiv.js', 'static/js/vendor/html5shiv.js');
  this.copy('static/js/vendor/jquery-1.10.2.min.js', 'static/js/vendor/jquery-1.10.2.min.js');
  if(this.modernizrUse == true) {
    this.copy('static/js/vendor/modernizr.js', 'static/js/vendor/modernizr.js');
  }
  //fonts
  if(this.icomoonUse == true){
    this.directory('static/fonts', 'static/fonts');
    this.copy('static/css/icomoon.css', 'static/css/icomoon.css');
    this.copy('static/css/less/icomoon.less', 'static/css/less/icomoon.less');
  }
  //css
  if(this.responsiveUse == true) {
    this.copy('static/css/styles-responsive.css', 'static/css/styles-responsive.css');
    this.copy('static/css/less/styles-responsive.less', 'static/css/less/styles-responsive.less');
    this.copy('static/css/less/forms-responsive.less', 'static/css/less/forms-responsive.less');
    this.copy('static/css/less/grid-responsive.less', 'static/css/less/grid-responsive.less');
    if(this.tabUse == true) {
      this.copy('static/css/less/tabs-responsive.less', 'static/css/less/tabs-responsive.less');
    }
    if(this.popupUse == true) {
      this.copy('static/css/less/popups-responsive.less', 'static/css/less/popups-responsive.less');
    }
  }
  this.copy('static/css/boxsizing.htc', 'static/css/boxsizing.htc');
  this.copy('static/css/styles.css', 'static/css/styles.css');
  //less
  if(this.alertUse == true) {
    this.copy('static/css/less/alerts.less', 'static/css/less/alerts.less');
  }

  this.copy('static/css/less/breadcrumbs.less', 'static/css/less/breadcrumbs.less');
  this.copy('static/css/less/button-groups.less', 'static/css/less/button-groups.less');
  this.copy('static/css/less/buttons.less', 'static/css/less/buttons.less');
  this.copy('static/css/less/clearfix.less', 'static/css/less/clearfix.less');
  this.copy('static/css/less/footer.less', 'static/css/less/footer.less');
  this.copy('static/css/less/forms.less', 'static/css/less/forms.less');
  this.copy('static/css/less/grid.less', 'static/css/less/grid.less');
  this.copy('static/css/less/header.less', 'static/css/less/header.less');
  this.copy('static/css/less/nav.less', 'static/css/less/nav.less');
  this.copy('static/css/less/wells.less', 'static/css/less/wells.less');

  if(this.iconUse == true) {
    this.copy('static/css/less/icons.less', 'static/css/less/icons.less');
  }
  
  this.copy('static/css/less/links.less', 'static/css/less/links.less');
  this.copy('static/css/less/lists.less', 'static/css/less/lists.less');
  this.copy('static/css/less/media.less', 'static/css/less/media.less');
  this.copy('static/css/less/mixins.less', 'static/css/less/mixins.less');
  this.copy('static/css/less/page.less', 'static/css/less/page.less');

  if(this.popupUse == true) {
    this.copy('static/css/less/popups.less', 'static/css/less/popups.less');
  }

  this.copy('static/css/less/reset.less', 'static/css/less/reset.less');
  this.copy('static/css/less/tables.less', 'static/css/less/tables.less');

  if(this.tabUse == true) {
    this.copy('static/css/less/tabs.less', 'static/css/less/tabs.less');
  }

  this.copy('static/css/less/type.less', 'static/css/less/type.less');
  this.copy('static/css/less/utility.less', 'static/css/less/utility.less');
  this.copy('static/css/less/variables.less', 'static/css/less/variables.less');


  this.copy('static/css/less/styles.less', 'static/css/less/styles.less');

};

HousestylesGenerator.prototype.projectfiles = function projectfiles() {
};


HousestylesGenerator.prototype.styleLessChanges = function styleLessChanges() {

  var path = 'static/css/less/styles.less',
      file = this.readFileAsString(path),
      hook = '// Yeoman additions',
      insertTab = '@import "tabs.less";',
      insertPopup = '@import "popups.less";',
      insertIcon = '@import "icons.less";',
      insertAlert = '@import "alerts.less";';
      if(this.responsiveUse) {
        var responsivePath = 'static/css/less/styles-responsive.less',
            responsiveFile = this.readFileAsString(responsivePath),
            insertTabResponsive = '@import "tabs-responsive.less";',
            insertPopupResponsive = '@import "popups-responsive.less";';
      }

  console.log(this.tabUse);

  if(this.tabUse == true) {
    file = file.replace(hook, insertTab+'\n'+hook);
    if(this.responsiveUse) {
      responsiveFile = responsiveFile.replace(hook, insertTabResponsive+'\n'+hook);
      responsiveFile = responsiveFile.replace(hook, insertPopupResponsive+'\n'+hook);
    }
  } 

  if(this.popupUse == true) {
    file = file.replace(hook, insertPopup+'\n'+hook);
  } 

  if(this.iconUse == true) {
    file = file.replace(hook, insertIcon+'\n'+hook);
  } 

  if(this.alertUse == true) {
    file = file.replace(hook, insertAlert+'\n'+hook);
  } 

  this.write(path,file);
  if(this.responsiveUse) {
    this.write(responsivePath, responsiveFile);
  }

};

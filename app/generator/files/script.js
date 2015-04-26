/**
 * Generate files specific to the scripts folder
 */

'use strict';

var scriptFiles = function scriptFiles() {
  // src/scripts

  if (!this.jsFramework) {
    if (this.jsOption === 'requirejs') {
      this.template('src/noframework/requirejs/main.js', 'src/_scripts/main.js');
    }

    if (this.jsOption === 'browserify') {
      this.template('src/noframework/browserify/main.js', 'src/_scripts/main.js');
    }

    if (this.jsOption === 'none') {
      this.template('src/noframework/js/main.js', 'src/scripts/main.js');
    }
  }

  if (this.jsFramework === 'backbone') {
    if (this.jsOption === 'requirejs') {
      this.template('src/backbone/requirejs/main/main.js', 'src/main.js');
      this.template('src/backbone/requirejs/routes/routes.js', 'src/routes.js');
      this.template('src/backbone/requirejs/index/index.js', 'src/_screens/index/index.js');
    }

    if (this.jsOption === 'browserify') {
      this.template('src/backbone/browserify/main/main.js', 'src/main.js');
      this.template('src/backbone/browserify/routes/routes.js', 'src/routes.js');
      this.template('src/backbone/browserify/index/index.js', 'src/_screens/index/index.js');
    }

    if (this.jsOption === 'none') {
      this.template('src/backbone/js/main/main.js', 'src/main.js');
      this.template('src/backbone/js/routes/routes.js', 'src/routes.js');
      this.template('src/backbone/js/index/index.js', 'src/_screens/index/index.js');
    }

    if (this.jsTemplate === 'underscore') {
      this.template('src/backbone/templates/underscore/index.jst', 'src/_screens/index/index.jst');
    }
    else if (this.jsTemplate === 'handlebars') {
      this.template('src/backbone/templates/handlebars/index.hbs', 'src/_screens/index/index.hbs');
    }
    else if (this.jsTemplate === 'jade') {
      this.template('src/backbone/templates/jade/index.jade', 'src/_screens/index/index.jade');
    }

  }
  else if (this.jsFramework === 'react') {
    this.template('src/react/routes/routes.js', 'src/routes.js');

    this.template('src/react/main/main.js', 'src/main.js');
    this.template('src/react/main/main.actions.js', 'src/main.actions.js');
    this.template('src/react/main/main.constants.js', 'src/main.constants.js');
    this.template('src/react/main/main.store.js', 'src/main.store.js');
    this.template('src/react/main/main.dispatcher.js', 'src/main.dispatcher.js');

    // Stores
    this.template('src/react/lib/store/store.js', 'src/_lib/store.js');

    if (this.useJsx) {
      this.template('src/react/index/jsx/index.jsx', 'src/_screens/index/index.jsx');

      // Modules
      this.template(
        'src/react/modules/link/jsx/link.jsx', 'src/_modules/link/link.jsx'
      );

      // Layouts
      this.template(
        'src/react/layouts/jsx/base.jsx', 'src/_layouts/base.jsx'
      );
    }
    else {
      this.template('src/react/index/js/index.js', 'src/_screens/index/index.js');

      // Modules
      this.template('src/react/modules/link/js/link.js', 'src/_modules/link/link.js');

      // Layouts
      this.template(
        'src/react/layouts/js/base.js', 'src/_layouts/base.js'
      );
    }
  }
  else if (this.jsFramework === 'angular') {
    this.template('src/angular/main/main.js', 'src/main.js');

    // Modules
    this.template('src/angular/index/index.html', 'src/_screens/index/index.html');
    this.template('src/angular/index/index.js', 'src/_screens/index/index.js');
    this.template('src/angular/index/index.controller.js', 'src/_screens/index/index.controller.js');
  }
};

module.exports = scriptFiles;

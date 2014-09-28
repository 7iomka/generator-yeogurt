/**
*   <%= _.classify(name) %> Spec Description
*/

/* jshint newcap:false */
/* jshint -W024 */<% if (testFramework === 'mocha') { %>
/* jshint expr:true */<% } %>

'use strict';

var <%= _.classify(name) %> = require('<%= rootDir %>../<%= storeFile %>');

describe('Testing Flux Store: <%= _.classify(name) %>', function() {
    it('Should run a few assertions', function() {

    });
});

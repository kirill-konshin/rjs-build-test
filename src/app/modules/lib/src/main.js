define(function(require, exports, module) {
    var share = require('./share');
    var component = require('component');
    var excludedComponent = require('excludedComponent');
    return 'I\'m a Main file, and this is my ' + share + ' and ' + component;
});
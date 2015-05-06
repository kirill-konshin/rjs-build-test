define(function(require, exports, module) {
    var main = require('./main.js'); // I need my parent to override it
    return main + ' (override)';
});
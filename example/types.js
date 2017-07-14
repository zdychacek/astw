var astw = require('../');
var walk = astw('4 + beep(5 * 2)');

walk(function (node) {
    console.log(node);
});

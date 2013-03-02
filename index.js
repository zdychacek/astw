var parse = require('esprima').parse;

module.exports = function (src) {
    var ast = typeof src === 'string' ? parse(src) : src;
    return function (cb) {
        return walk(ast, undefined, cb);
    };
};

function walk (node, parent, cb) {
    objectKeys(node).forEach(function (key) {
        if (key === 'parent') return;
        
        var child = node[key];
        if (isArray(child)) {
            child.forEach(function (c) {
                if (c && typeof c.type === 'string') {
                    c.parent = node;
                    walk(c, node, cb);
                }
            });
        }
        else if (child && typeof child.type === 'string') {
            child.parent = node;
            walk(child, node, cb);
        }
    });
    cb(node);
}

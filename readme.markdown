# astw

*This is a fork of [`astw`](https://www.npmjs.com/package/astw) which uses [Babylon](https://github.com/babel/babylon) parser instead of [`acorn`](https://www.npmjs.com/package/acorn).*

Walks the AST.

# example

``` js
var astw = require('../');
var walk = astw('4 + beep(5 * 2)');

walk(function (node) {
    console.log(node);
});
```

# methods

``` js
var astw = require('@zdychacek/astw')
```

## var walk = astw(src, opts={})

Return a `walk()` function from the source string or ast object `src`.

Optionally:

* `opts.parserPlugins` - list of plugins for Babylon parser

## walk(cb)

Walk the nodes in the ast with `cb(node)` where `node` is each element in the
ast from [babylon](https://github.com/babel/babylon) but with an additional `.parent`
reference to the parent node.

# install

With [npm](https://npmjs.org) do:

```
npm install @zdychacek/astw
```

# license

MIT

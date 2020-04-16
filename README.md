# The [Reflect.ownKeys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys) method for legacy.

[![Build Status](https://travis-ci.com/ungap/own-keys.svg?branch=master)](https://travis-ci.com/ungap/own-keys) [![Coverage Status](https://coveralls.io/repos/github/ungap/own-keys/badge.svg?branch=master)](https://coveralls.io/github/ungap/own-keys?branch=master)

It returns `Reflect.ownKeys`, eventually including symbols too, if the browser is compatible.

```js
import ownKeys from '@ungap/own-keys';

ownKeys({a, 1}); // ['a']
```

  * CDN via https://unpkg.com/@ungap/own-keys
  * ESM via `import ownKeys from '@ungap/own-keys'`
  * CJS via `const ownKeys = require('@ungap/own-keys')`

Compatible with every engine.

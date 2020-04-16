# The [trimStart](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart) method for IE

[![Build Status](https://travis-ci.com/ungap/trim-start.svg?branch=master)](https://travis-ci.com/ungap/trim-start) [![Coverage Status](https://coveralls.io/repos/github/ungap/trim-start/badge.svg?branch=master)](https://coveralls.io/github/ungap/trim-start?branch=master)

It removes leading spaces from a string.

```js
import trimStart from '@ungap/trim-start';

trimStart.call('  test '); // "test "
```

  * CDN via https://unpkg.com/@ungap/trim-start
  * ESM via `import trimStart from '@ungap/trim-start'`
  * CJS via `const trimStart = require('@ungap/trim-start')`

Compatible with every engine.

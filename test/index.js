var ownKeys = require('../cjs');
console.assert(ownKeys(ownKeys).length);
//console.log(ownKeys(ownKeys));

delete require.cache[require.resolve('../cjs')];
global.Reflect = null;

ownKeys = require('../cjs');
console.assert(ownKeys(ownKeys).length);
//console.log(ownKeys(ownKeys));

delete require.cache[require.resolve('../cjs')];
Object.getOwnPropertySymbols = null;
ownKeys = require('../cjs');
console.assert(ownKeys(ownKeys).length);
//console.log(ownKeys(ownKeys));

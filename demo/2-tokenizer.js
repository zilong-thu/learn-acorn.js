const acorn = require('acorn');

const str = 'var a = 1;';

var tokenIter = acorn.tokenizer(str);
console.log(typeof tokenIter);
console.log(typeof tokenIter.next);

var tokens = [...tokenIter];
console.log(JSON.stringify(tokens));
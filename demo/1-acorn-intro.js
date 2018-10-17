const fs = require('fs');
const acorn = require('acorn');

const code = 'var a = 1;';
const ast = acorn.parse(code);

fs.writeFileSync('1-acorn-intro.json', JSON.stringify(ast));

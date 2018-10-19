/**
 * 简单示例
 */
const fs = require('fs');
const path = require('path');
const acorn = require('acorn');

const str = `
var a = 1;
var b = /key/.test('hello');
`;

const ast = acorn.parse(str, {
  locations: false,
});

fs.writeFileSync(path.resolve(__dirname, '1-out.json'), JSON.stringify(ast, null, 2));

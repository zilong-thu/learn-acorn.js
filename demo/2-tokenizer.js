/**
 * 词法分析示例
 */
var a = 1;
const acorn = require('acorn');
const fs = require('fs');
const path = require('path');

const str = `var a = 1;`;

var tokenIter = acorn.tokenizer(str);
console.log(typeof tokenIter);
console.log(typeof tokenIter.next);

var tokens = [...tokenIter];
fs.writeFileSync(path.resolve(__dirname, '2-out.json'), JSON.stringify(tokens, null, 2));

/**
 * var a = 1;
 * 每个 token 的格式
 *
 * [{
    "type": {
      "label": "var",     解析到的符号的类型
      "keyword": "var",   如果是 keyword，那么说明该符号刚好为 JS 的关键字
      "beforeExpr": false,
      "startsExpr": false,
      "isLoop": false,    是否是一个循环
      "isAssign": false,
      "prefix": false,
      "postfix": false,
      "binop": null,
      "updateContext": null
    },
    "value": "var",     解析到的字符
    "start": 0,
    "end": 3
  },
  {
    "type": {
      "label": "name",
      "beforeExpr": false,
      "startsExpr": true,
      "isLoop": false,
      "isAssign": false,
      "prefix": false,
      "postfix": false,
      "binop": null
    },
    "value": "a",
    "start": 4,
    "end": 5
  },
  {
    "type": {
      "label": "=",
      "beforeExpr": true,
      "startsExpr": false,
      "isLoop": false,
      "isAssign": true,   是赋值符号
      "prefix": false,
      "postfix": false,
      "binop": null,
      "updateContext": null
    },
    "value": "=",
    "start": 6,
    "end": 7
  },
  {
    "type": {
      "label": "num",
      "beforeExpr": false,
      "startsExpr": true,
      "isLoop": false,
      "isAssign": false,
      "prefix": false,
      "postfix": false,
      "binop": null,
      "updateContext": null
    },
    "value": 1,
    "start": 8,
    "end": 9
  },
  {
    "type": {
      "label": ";",
      "beforeExpr": true,
      "startsExpr": false,
      "isLoop": false,
      "isAssign": false,
      "prefix": false,
      "postfix": false,
      "binop": null,
      "updateContext": null
    },
    "start": 9,
    "end": 10
  }]
 */


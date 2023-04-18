let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let data = input[1].split(' ').map((x)=>Number(x));

let min = data.reduce((a,b)=>Math.min(a,b));
let max = data.reduce((a,b)=>Math.max(a,b));

console.log(min + ' '+ max);
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [num1, num2] = input[0].split(' ');

let reverseNum1 = num1[2]+num1[1]+num1[0];
let reverseNum2 = num2[2]+num2[1]+num2[0];

console.log(Math.max(Number(reverseNum1), Number(reverseNum2)))
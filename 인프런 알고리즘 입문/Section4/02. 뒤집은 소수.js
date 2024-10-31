/** ### 문제 풀이
 * ** 다른 풀이
 * 10으로 나눈 몫으로 각 자리수를 가져오고,
 * 몫으로 앞의 숫자들 가져와서 while 반복문으로 숫자 뒤집기
 */

function solution(arr) {
  let answer = [];
  function isPrime(num) {
    if (num === 1) return false;
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  for (let i = 0; i < arr.length; i++) {
    let numberSplit = arr[i].toString().split("").reverse();
    let parseNumber = parseInt(numberSplit.join(""));
    if (isPrime(parseNumber)) answer.push(parseNumber);
  }
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));

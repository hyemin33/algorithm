/** ### 문제 풀이
 *  Number()를 이용하여 숫자인지 체크한다.
 */

function solution(str) {
  let numberStr = "";
  for (x of str) {
    if (Number(x)) {
      numberStr += x;
    }
  }
  return parseInt(numberStr);
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));

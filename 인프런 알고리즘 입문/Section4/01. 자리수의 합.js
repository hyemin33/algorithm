/** ### 문제 풀이
 * ** 다른 풀이
 * 10으로 나누 나머지로 한자리씩 자른다.
 */

function solution(n, arr) {
  let maxSum = 0;
  let answer = 0;
  for (let i = 0; i < n; i++) {
    let numberSplit = arr[i].toString().split("");
    let sum = numberSplit.reduce((a, b) => Number(a) + Number(b));

    if (maxSum < sum) {
      maxSum = sum;
      answer = arr[i];
    }
    if (maxSum === sum) answer = Math.max(answer, arr[i]);
  }
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));

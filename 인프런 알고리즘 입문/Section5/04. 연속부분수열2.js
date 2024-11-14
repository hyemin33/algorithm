/** ### 문제 풀이
 */

function solution(n, m, arr) {
  let answer = 0,
    sum = 0,
    lt = 0;
  for (let rt = 0; rt < n; rt++) { // rt가 0부터 증가
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1; // 갯수 계산
  }
  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, 5, a));

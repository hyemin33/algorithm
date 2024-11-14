/** ### 문제 풀이
 * m보다 작으면 rt +1, m보다 크면 lt -1
 */

function solution(n, m, arr) {
  let answer = 0,
    lt = 0,
    sum = 0;
  for (let rt = 0; rt < n; rt++) {
    // rt값 더하고 m인지 확인
    sum += arr[rt];
    if (sum === m) answer++;
    while (sum >= m) { // 빼도 크면 계속 빼야하므로 while문으로
      sum -= arr[lt++]; // 빼고 증가
      if (sum === m) answer++; // 빼도 확인하기
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(8, 6, a));

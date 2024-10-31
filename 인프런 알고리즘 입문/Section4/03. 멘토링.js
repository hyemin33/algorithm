/** ### 문제 풀이
 * 행렬을 생각하며 푼다
 * (i,j) 기준 i<j인 경우를 체크한다
 */

function solution(arr) {
  let answer = 0;
  let m = arr.length;
  let n = arr[0].length;

  // i와 j는 각각 학생의 넘버
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        // 행
        let pi = 0;
        let pj = 0;
        for (let l = 0; l < n; l++) {
          // 열
          // 3*4 행렬 돌기
          // console.log(arr[k][l]);
          if (arr[k][l] === i) pi = l;
          if (arr[k][l] === j) pj = l;
        }
        if (pi < pj) cnt++;
      }
      if (cnt === m) answer++;
    }
  }
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));

/** ### 문제 풀이
 * 가장자리는 항상 0이므로 가장자리 행/렬일때는 0으로 넣어준다.
 * 나머지 왼쪽,오른쪽,위,아래를 변수 선언하여 넣어주고 비교한다.
 */

function solution(arr) {
  let answer = 0;
  let n = arr.length;
  let current = (left = right = up = down = 0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      current = arr[i][j]; //0,1
      left = j === 0 ? 0 : arr[i][j - 1];
      right = j === n - 1 ? 0 : arr[i][j + 1];
      up = i === 0 ? 0 : arr[i - 1][j];
      down = i === n - 1 ? 0 : arr[i + 1][j];
      if (Math.max(current, left, right, up, down) === current) answer++;
    }
  }

  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));

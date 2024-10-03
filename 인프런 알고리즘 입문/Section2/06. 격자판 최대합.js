/** ### 문제 풀이
 * 행,열,대각선의 합을 각각 구해서 비교한다.
 *
 */

function solution(arr) {
  let row = column = diagonal1 = diagonal2 = answer = 0;

  for (let i = 0; i < arr.length; i++) {
    row = column = 0;
    diagonal1 += arr[i][i];
    diagonal2 += arr[i][arr.length - 1 - i];

    for (let j = 0; j < arr.length; j++) {
      row += arr[i][j];
      column += arr[j][i];
    }
    answer = Math.max(answer, row, column, diagonal1, diagonal2);
  }
  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));

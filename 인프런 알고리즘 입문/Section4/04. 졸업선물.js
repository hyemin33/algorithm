/** ### 문제 풀이
 * 1명의 학생은 50%를 받을 수 있다.
 * 50%가 아닌 학생들 값을 합쳐서 28이 되는 최대 카운트를 찾아본다
 */

function solution(m, arr) {
  let answer = 0;
  let priceArr = arr.map(([a, b]) => a + b);
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let halfPriceArr = [...priceArr];
    halfPriceArr[i] = arr[i][0] / 2 + arr[i][1];
    halfPriceArr.sort((a, b) => a - b);

    let sum = 0,
      count = 0;

    for (let j = 0; j < n; j++) {
      if (sum + halfPriceArr[j] > m) break;
      sum += halfPriceArr[j];
      count++;
    }
    answer = Math.max(answer, count);
  }

  return answer;
}

console.log(
  solution(41, [
    [8, 6],
    [2, 2],
    [12, 1],
    [4, 5],
    [4, 3],
  ])
);

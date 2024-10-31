/** ### 문제 풀이
* 큰 값 순서대로 정렬한 것에서 k번째를 찾는 것이므로,
1. 큰 숫자로 정렬을 한 후 3개씩 더해서 배열을 만든다
 */

function solution(n, k, card) {
  let count = 0;
  let sumCardSet = new Set();
  card.sort((a, b) => b - a);

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let m = j + 1; m < n; m++) {
        count++;
        if (count > k) break;
        sumCardSet.add(card[i] + card[j] + card[m]);
      }
    }
  }
  let sumCardArray = Array.from(sumCardSet);
  return sumCardArray[k - 1] === undefined ? -1 : sumCardArray[k - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));

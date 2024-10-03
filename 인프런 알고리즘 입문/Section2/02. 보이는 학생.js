/** ### 문제 풀이
 * 가장 큰 키 값을 maxHeight에 저장하면서 반복문을 돈다.
 *
 */
function solution(arr) {
  let answer = 1;
  let maxHeight = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxHeight) {
      answer++;
      maxHeight = arr[i];
    }
  }
  return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));

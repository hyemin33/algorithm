function solution(arr) {
  let answer = arr;
  let done = false;
  let sum = arr.reduce((a, b) => a + b);
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j <= 8; j++) {
      if (done) break;
      if (sum - arr[i] - arr[j] === 100) {
        answer.splice(i, 1);
        answer.splice(j, 1);
        done = true;
      }
    }
  }
  return answer;
}

let arr = [22, 7, 21, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));

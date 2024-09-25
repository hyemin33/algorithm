function solution(arr) {
  let answer = [];
  let oddSum = 0;
  let oddMin = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      oddSum += arr[i];
      if (arr[i] < oddMin) oddMin = arr[i];
    }
  }

  answer.push(oddSum);
  answer.push(oddMin);

  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));

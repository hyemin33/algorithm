function solution(a, b, c) {
  let answer = "YES",
    max,
    otherSum;
  max = Math.max(a, b, c);
  otherSum = a + b + c - max;
  if (max >= otherSum) answer = "NO";
  return answer;
}

console.log(solution(13, 33, 17));

function solution(s) {
  let answer;
  let midIndex = Math.floor(s.length / 2);

  if (s.length % 2 === 0) {
    answer = s.substr(midIndex - 1, 2);
  } else {
    answer = s.substr(midIndex, 1);
  }
  return answer;
}
console.log(solution("study"));

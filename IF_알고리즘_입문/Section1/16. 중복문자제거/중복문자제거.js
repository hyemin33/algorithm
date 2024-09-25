function solution(s) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (!answer.includes(s[i])) answer += s[i];
  }
  return answer;
}
let str = "ksekkset";
console.log(solution(str));

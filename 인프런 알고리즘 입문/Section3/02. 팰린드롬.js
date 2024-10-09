/** ### 문제 풀이
 * 회문과 풀이가 동일한데 숫자를 빼는 정규식이 추가됨
 */

function solution(s) {
  let answer = "NO";
  let lowString = s.toLowerCase().replace(/[^a-z]/g, "");
  let reverseString = lowString.split("").reverse().join("");

  if (lowString === reverseString) return "YES";
  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));

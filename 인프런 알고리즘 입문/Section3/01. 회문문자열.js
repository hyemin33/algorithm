/** ### 문제 풀이
 * 글자를 소문자로 다 바꾸고
 * 배열형태로 자른 다음
 * reverse를 한 후 join으로 합쳐서 비교한다.
 */

function solution(s) {
    let answer = "NO";
    let lowString = s.toLowerCase();
    let reverseString = lowString.split("").reverse().join("");
  
    if (lowString === reverseString) answer = "YES";
    return answer;
  }
  
  let str = "gooGs";
  console.log(solution(str));
  
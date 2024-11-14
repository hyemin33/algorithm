/** ### 문제 풀이
 * 주어진 배열을 concat으로 합친 후 sort로 정렬
 * 
 * 다른방법1 - 투포인터 알고리즘
 * let answer = [];
 * let n=arr1.length;
 * let m=arr2.length;
 * let p1=p2=0; 리셋
 * while(p1<n && p2<m) { 둘 중 하나가 다 돌면
 *  if(arr[p1]<=arr[p2]) answer.push(arr[p1++])
 *  else answer.push(arr[p2++]);
 * }
 * 
 * while(p1<n) answer.push(arr1[p1++]); p1이 남으면 나머지 다 넣기
 * while(p2<m) anser.push(arr[p2++]); p2가 남으면 나머지 다 넣기
 */

function solution(arr1, arr2) {
  let answer = [];
  answer = arr1.concat(arr2).sort((a,b)=> a-b);

  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));

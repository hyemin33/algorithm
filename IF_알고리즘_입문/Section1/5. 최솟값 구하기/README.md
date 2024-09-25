### 문제 풀이
1.
Math.min()을 이용한다. 이때 입력값이 배열이므로 spread문법으로 넣어줘야 인수를 인식할 수 있다.

2.
다른 방법으로는 apply 를 사용할 수 있다.
apply는 호출할 함수의 인수를 배열 형태로 묶어서 전달한다.

answer = Math.min.apply(null, arr);

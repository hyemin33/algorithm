### 문제 풀이
9명 중 7명의 키가 100인 경우를 찾는다.
9명의 키를 모두 더한 후 임의의 2명의 키값을 뺐을때 100인지를 확인하는 반복문을 만든다.

9명의 합은 reduce로 구하고
2명을 빼서 100인지 for문을 사용하여 체크한다.

for문 두번째 인자 값은 i<=8이 아니라 i<8 이다.
뒤에 j번째를 뽑기때문에 굳이 8개를 모두 돌 필요가 없음.

중복으로 여러개 값이 나오고 삭제될 수 있으니 done을 추가하여 한번만 삭제되도록 한다.

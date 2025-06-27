function solution(number, k) {
    let count = 0;
    let stack = [];
    
    for(const item of number){
        while(stack.length > 0 && count < k && stack[stack.length -1] < item){
            stack.pop();
            count+=1;
        }
        stack.push(item);
    }
    
    // 연속된 숫자의 경우 다 stack에 들어갔을테니
    while(count < k){
        stack.pop();
        count+=1;
    }

    return stack.join("");
}
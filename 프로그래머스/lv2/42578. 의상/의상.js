function solution(clothes) {
    let map = new Map();
    let answer = 1;
    
    for(const [_,type] of clothes){
        const data = map.get(type);
        if(!data){
            map.set(type, 1);
        } else {
            map.set(type, data + 1);        
        }
    }
    
    
    for(const count of map.values()) {
        answer *= (count + 1)
    }
    
    return answer - 1; 
    
}
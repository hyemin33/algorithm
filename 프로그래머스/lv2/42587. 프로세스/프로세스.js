function solution(priorities, location) {
    let queue = priorities.map((priority, index) => ({priority, index}));             
    let printOrder = 0;
    
    
    while(queue.length > 0){
        let current = queue.shift();
        let hasHigherPriority = queue.some((item)=> item.priority > current.priority);
        
        if(hasHigherPriority) {
            queue.push(current);
        } else {
            printOrder ++;
            if(current.index === location) return printOrder;
        }
    }
    
    return printOrder;
}
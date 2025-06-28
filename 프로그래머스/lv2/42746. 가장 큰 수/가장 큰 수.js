function solution(numbers) {
    let stringNumber = numbers.map((v) => String(v));
    
    stringNumber.sort((a,b)=>{
        type1 = a+b;
        type2 = b+a;
        
        if(type1 > type2) return -1;
        if(type1 < type2) return 1;
        return 0;
        
    })
    
    return stringNumber[0] === "0" ? "0" : stringNumber.join("");
}
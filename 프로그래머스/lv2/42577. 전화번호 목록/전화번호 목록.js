function solution(phone_book) {
    phone_book.sort();
    
    for(let i = 0; i < phone_book.length - 1; i++){
        const currentPhone = phone_book[i];
        const slicePhone = phone_book[i+1].substring(0, currentPhone.length);
        if(currentPhone === slicePhone) return false;
    }
    
    return true;

}
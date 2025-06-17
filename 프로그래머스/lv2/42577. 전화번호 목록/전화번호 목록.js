function solution(phone_book) {
    phone_book.sort();
    
    for(let i = 0; i < phone_book.length - 1; i++){
        const currentPhone = phone_book[i];
        const nextPhone = phone_book[i+1];
        if (nextPhone.startsWith(currentPhone)) return false;
    }

    return true;
}
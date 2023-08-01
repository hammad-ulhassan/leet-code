function isPalindrome(x: number): boolean {
    let revNum = 0;
    let temp = x;
    while ( temp > 0 ) {
        let lastDigit = temp % 10;
        revNum = revNum * 10 + lastDigit;
        temp = temp / 10;
    }
    return x == revNum;
};

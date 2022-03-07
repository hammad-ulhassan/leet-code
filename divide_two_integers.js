/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 var divide = function(dividend, divisor) {
    let count = 0;
    let isNeg = false;
    let bothNeg = dividend<0 && divisor<0;
    
    if(dividend<0){
        isNeg=!bothNeg;
        dividend = ~(dividend)+1
    }
    if(divisor<0){
        isNeg=!bothNeg;
        divisor = ~(divisor)+1
    }
    // if(divisor==1){
    //     //for performance
    //     return isNeg?~(dividend)+1:dividend;
    // }
    if(dividend == divisor){
        return isNeg?-1:1;
    }
    while(dividend>=divisor){
        dividend=dividend-divisor;
        count++;
    }
    return isNeg?~(count)+1:count
    
};
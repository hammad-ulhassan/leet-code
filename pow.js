/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
//WIP
 var myPow = function(x, n) {
    const orig = x;
    let isNeg = false;
    if(n==0){
        return 1;
    }
    if(n<0){
        isNeg=true;
        n = (~(n))+1;
    }
    const findPow = (x, n)=>{
        if(n==1){
            return isNeg?1/x:x;
        }
        return findPow(x*orig, --n)
    }
    return (findPow(x,n))
};
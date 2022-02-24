/***
 * Leetcode 7 - Med
 * Given a signed 32-bit integer x, return x with its digits reversed.
 * If reversing x causes the value to go outside the signed 32-bit integer
 * range [-231, 231 - 1], then return 0
 * Example 1:
 * Input: x = 123
 * Output: 321
 * 
 * Example 2:
 * Input: x = -123
 * Output: -321
 * 
 * Example 3:
 * Input: x = 120
 * Output: 21
 */

 var reverse = function(x) {
    const constraint = (num)=>(num>(-(2**31)) && num<((2**31)-1));
    const checkConstraint = (num)=>(constraint(num)==true?num:0);
    let isNeg = x<0;
    let str = ""+x;
    if(isNeg){
        return checkConstraint(-1*Number(str.slice(1).split('').reverse().join('')));
    }
    return checkConstraint(Number(str.split('').reverse().join('')));
};

reverse(123); //321
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    var stack = [];
    let i=0;
    let res = true;
    if(s.length>1){
        for(const c of s){
        if(c === '(' || c === '[' || c=== '{'){
            stack.push(c);
        }
        else{
            if(c === ')' && stack.pop() !== '('){
                res = false;
            }
            else if(c === '}' && stack.pop() !== '{'){
                res = false;
            }
            else if(c === ']' && stack.pop() !== '['){
                res = false;
            }
        }
    }
    }
    else{
        res = false;
    }
    if(stack.length){
        res = false;
    }
    return res
};
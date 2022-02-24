var isPalindrome = function(s) {
    return s.toLowerCase().replace(/[^a-z0-9]/g,'').split('').reduce((p,c,i,arr)=>(c==(arr[arr.length-1-i]))&p,true)==1
};
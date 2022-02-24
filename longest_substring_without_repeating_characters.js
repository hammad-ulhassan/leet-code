var lengthOfLongestSubstring = function(s) {
    let i = 0;
    let nMap = new Map();
    const n=s.length;
    let small=0;
    let large=0;
    while(i!=n){
        if(!nMap.has(s[i])){
            nMap.set(s[i],i);
            small++;
        }
        else{
            small=0;
            i=nMap.get(s[i]);//backtracking; slows algorithm down; is not O(n), 
            nMap=new Map();
        }
        if(small>large){
            large=small;
        }
        i++;
    }
    return large;
};
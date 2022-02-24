var combine = function(n, k) {
    res = [];
    function backtrack(start, comb){
        if(comb.length==k){
            res.push([...comb])
            return;
        }
        for(let i=start; i<n+1; i++){
            comb.push(i);
            backtrack(i+1, comb);
            comb.pop()
        }
    }
    backtrack(1,[]);
    return res;
};
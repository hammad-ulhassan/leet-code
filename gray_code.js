var grayCode = function(n) {
    const limit = (2**n)-1;
    const res=[];
    
    const gray=(num)=>{
        return num ^ (num >> 1);
    }
    
    for(let i=0; i<=limit; i++){
        res.push(gray(i))    
    }
    return (res)
};
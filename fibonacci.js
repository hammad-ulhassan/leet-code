var fib = function(n) {
    dpArr=[];
    const fibDP=(n,dp)=>{
        if(n==0){
            return 0;
        }
        if(n==1){
            return 1;
        }
        if(dp[n]){
            return dp[n]
        }
        else{
            dp[n]=fibDP(n-1, dp)+fibDP(n-2, dp);
            return dp[n]
        }
    }
    return fibDP(n,dpArr)
};
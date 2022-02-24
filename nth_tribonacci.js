var tribonacci = function(n) {
    dp=[];
    const tribDP = (n, dp)=>{
        if(n==0){
            return 0;
        }
        if(n==1){
            return 1;
        }
        if(n==2){
            return 1;
        }
        if(dp[n]){
            return dp[n]
        }
        else{
            dp[n]=tribDP(n-3, dp)+tribDP(n-2, dp)+tribDP(n-1, dp);
            return dp[n];
        }
    }
    return tribDP(n, dp);
};
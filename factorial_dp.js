function fact(n){
    dp=[1,1]
    function run(n, dp){
        if(dp[n]!=undefined){
            return dp[n]
        }
        dp[n]=n*run(n-1, dp);
        return dp[n];
    }
    return run(n, dp);
}
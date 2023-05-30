type Fn = (...params: any) => any

function memoize(fn: Fn): Fn {
    const dp: any = {};
    return function(...args) {
        const id: string = `${args}`;
        if(dp[id] !== undefined){
            return dp[id];
        }
        dp[id] = fn(...args);
        return dp[id];
    }
}

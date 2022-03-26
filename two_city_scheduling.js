/**
 * @param {number[][]} costs
 * @return {number}
 */
 var twoCitySchedCost = function(costs) {
    var cost=(x)=>Math.abs(x[0]-x[1]);
    costs.sort((a,b)=>(cost(a)-cost(b)));
    var ca=0;
    var cb=0;
    var totalCost = 0;
    var l=Math.floor(costs.length/2);
    var i=costs.length;
    while(i--){
        if((costs[i][0]<=costs[i][1] && ca<l) || cb==l){
            totalCost +=costs[i][0];
            ca+=1;
        }
        else{
            totalCost += costs[i][1];
            cb+=1;
        }
    }
    return totalCost
};
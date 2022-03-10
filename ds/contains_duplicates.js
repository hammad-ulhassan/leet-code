/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    d={};  //num->count
    for(const num of nums){
        if(num in d){
            let c = d[num];
            c++;
            if(c>=2){
                return true;
            }
            d[num]=c;
        }
        else{
            d[num]=1;
        }
    }
    return false;
};
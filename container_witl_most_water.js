/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let res=0;
    let i=0;
    let j=height.length-1;
    while(i<j){
        let area = Math.min(height[i],height[j])*(j-i);
        if(area > res){
            res = area;
        }
        if(height[i]<height[j]){
            i++;
        }
        else{
            j--;
        }
    }
    return res;
};

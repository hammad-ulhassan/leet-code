/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    d={};
    for (let str of strs) {
        let sortedStr = str.split('').sort();
        if(sortedStr in d){
            d[sortedStr].push(str)
        }
        else{
            d[sortedStr]=[str]
        }
    }
    return Object.values(d);
};
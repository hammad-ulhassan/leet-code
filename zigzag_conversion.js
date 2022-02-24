/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    const d={};
    let i=1;
    let rev=false;
    let res="";
    for(const c of s){
        if(d[i]==undefined){
            d[i]=c;
        }
        else{
            let v = d[i];
            v+=c;
            d[i]=v;
        }
        if(rev==false){
            i++;
        }
        if(rev==true){
            i--;
        }
        if(i==numRows){
            rev=true;
        }
        if(i==1){
            rev=false;
        }
        if(numRows==1){
            i=1;
        }
    }
        
    for(const l in d){
        res+=d[l];
    }
    return res;
};
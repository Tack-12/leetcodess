// Last updated: 9/3/2025, 9:13:50 PM
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let y= x.toString();
    let z='';
    let output = false;
    
    for(let i = y.length-1; i>=0 ; i--){
        z+= y[i];
    }

    y==z ? output=true: output=false

    return output;
};
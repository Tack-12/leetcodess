// Last updated: 9/3/2025, 8:43:39 PM
/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    let x_dis = Math.abs(z-x);
    let y_dis = Math.abs(z-y);
    let output;

    if (x_dis<y_dis){
        return output=1;
    }
    else if(y_dis<x_dis){
        return output=2;
    }
    else{
        return output =0;
    }
};
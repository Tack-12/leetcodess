// Last updated: 9/3/2025, 9:02:02 PM
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i=0; i< nums.length;i++){
        for (let j=1; j<= nums.length;j++)
            if(nums[i]+nums[j]=== target && i !== j){
                return([i,j])
            }
    }
};
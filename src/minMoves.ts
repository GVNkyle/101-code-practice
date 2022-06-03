/* ---------------------------------------- leetcode 453 ---------------------------------------- */
function minMoves(nums: number[]): number {
    let sum = nums[0];
    let min = nums[0];
    for(let i = 1 ; i < nums.length ; i++){
        if(nums[i] < min) min = nums[i];
        sum += nums[i];
    }
    return sum - (nums.length * min);
};
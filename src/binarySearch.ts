 /* --------------------------------------- binary search; --------------------------------------- */
function search(nums: number[], target: number): number {
    let mid;
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] == target) {
            return mid;
        }
        if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;

    // return nums.indexOf(target);
};


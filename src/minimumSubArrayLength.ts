/* ------------------------------------ leetcode problem 209 ------------------------------------ */
let minimumSubArrayLength = (target : number, numbers: number[]): number => {
    let distance = Number.MAX_SAFE_INTEGER; // initial value to check distance change or not.
    let left  = 0;
    let sum = 0;
    for(let right = 0; right < numbers.length ; right++){
        sum += numbers[right];
        while(sum >= target){
            //finding the minimum distance by remove numbers[left] and add numbers[right]
            distance = Math.min(distance, right - left + 1);
            sum -= numbers[left];
            left++;

        }
    }
    return distance === Number.MAX_SAFE_INTEGER ? 0 : distance
}
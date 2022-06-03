/**
  * You are given a natural number n, you have the right to swap the digits of the number n. 
  * The number k is formed by swapping the digits of n to the possible largest number. 
  * The number h is formed by swapping the digits of n to the possible smallest number.
  * Explanation: The largest number k is 321, the smallest number h is 123. k - h = 321 -123 = 198.
 */
let minMax = (n: number) => {
    return ((+n.toString().split("").sort((a, b) => (+b) - (+a)).join("")) - (+n.toString().split("").sort((a, b) => (+a) - (+b)).join("")));

}

/**
  * Given two numbers a and b, find the last digit of a raised to the power b
  * For a = 2, b = 3 we have 2 raised to the power 3 equal to  8 so the output should be 8.
  * For a = 3, b = 3 we have 3 rasied to the power 3 equal to  27 so the output should be 7.
*/
let lastDigit = (a: number, b: number) => {
    return + (Math.pow(a, b).toString().split("").pop());
}
/**
  * Given two integers a and b, we write the numbers between a and b, inclusive in a list. Your task is to calculate the number of occurrences of the zeros
  * For a = 10, b = 11, the output should be countZeroDigit(A, B) = 1
  * For a = 100, b = 110, the list will be [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110] so the output should be countZeroDigit(a, b) = 12
 */
let countZeroDigit = (a: number, b: number) => {
    let count = 0;
    for (let i = a; i <= b; i++) {
        i.toString().split("").forEach(v => { if (v == "0") count++ });
    }
    return count;
}
/**
 * highAndLow("1 2 3 4 5");  // return "5 1"
 * highAndLow("1 2 -3 4 5"); // return "5 -3"
 * highAndLow("1 9 3 4 -5"); // return "9 -5"
 */

let highAndLow = (numbers: string): string => {
    return `${Math.max(...(numbers.split(/\s/).map(v => +v)))}  ${Math.min(...(numbers.split(/\s/).map(v => +v)))}`;
}
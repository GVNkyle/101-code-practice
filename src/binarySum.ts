
/*
input: "27346209830709182346"
output: [1039743, 1039711, 499031, 366931, 301393, 301393, 268624, 6224, 4160]
input: "82734"
output: [31, 31, 23, 21, 20, 20, 20, 16]
*/

/*
Ideas:
input: "82734"
output: [31, 31, 23, 21, 20, 20, 20, 16]
1 1 1 1 1
1 1 1 1 1
1   1 1 1
1 	1   1
1   1
1 	1
1 	1
1

[i,j] + [i+1,j]
2^0 + 2^1 + 2^2 +2^3 +2^4 = 31
*/

let binarySum = (num: number) => {

    let arr = num.toString().split("").map(v => +v);
    let max = Math.max(...arr);
    let array: number[][] = [];

    for (let i = 0; i < max; i++) {
        let temp: number[] = [];
        arr.forEach((v) => {
            i < v ? temp.push(1) : temp.push(0);
        });
        array.push(temp);
    }
    return array.map(v => v.join('')).map(v => parseInt(v, 2));
}
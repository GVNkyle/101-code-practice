//LESSION 1
// tìm số lần xuất hiện của phần tử chuỗi a trong chuỗi b
/**
const xxx = (str1, str2): number => {
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
        const char1 = str1.charAt(i);
        for (let j = 0; j < str2.length; j++) {
            const char2 = str2.charAt(j);
            if (char1 == char2) count++;
        }
    }
    return count;
}

//cách 1 dòng

let compare = (str1, str2) => {
    return (str2.match(new RegExp('[' + str1 + ']', "gm")) || []).length;
}

console.log(compare('aA', "aAAAnduasnd"));

 */
//  LESSION 3
// Cộng 2 mảng

/** 
let les3 = (num1: number[], num2: number[]): number[] => {
    // let number1 = '';
    // let number2 = '';
    // let result = [];
    // for (let i = num1.length - 1; i >= 0; i--) {
    //     number1 = number1 + num1[i].toString();
    // }
    // for (let i = num2.length - 1; i >= 0; i--) {
    //     number2 = number2 + num2[i].toString();
    // }
    // var n1 = +number1;
    // var n2 = +number2;
    // var temp = (n1 + n2).toString();
    // for (let i = temp.length - 1; i >= 0; i--) {
    //     result.push(temp[i]);
    // }
    // return result;

    return (+num1.reverse().join('') + (+num2.reverse().join(''))).toString().split('').reverse().map(x => +x);

}

// console.log(les3([5, 4, 2, 3], [6, 3])); // [1, 8, 2, 3]
console.log(les3([2, 4, 3], [5, 6, 4])); // [7, 0, 8]
*/

//LESSION 4
// tìm số lớn nhất trong các mảng con
/**
let SumAndFindMax = (numbers: number[][]) => {
    return Math.max(...numbers.map(array => array.reduce((a, b) => a + b)));
}

console.log("kq: = ", SumAndFindMax([[1, 5, 7], [9, 3, 2, 6], [13, 8]])); // 13+8 = 21
 */

//LESSION 5
// logic: cắt mảng làm 2 mảng nhỏ, sau đó ghép vị trí 1 của mảng 1 nối với mảng 2, tiếp tục cho tới hết mảng.
/**
let lession5 = (numbers: number[], n: number): number[] => {
    let array = numbers.splice(0, n);
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push(array[i]);
        result.push(numbers[i]);
    }
    return result;
}
console.log("Kết quả: ", lession5([2, 5, 1, 3, 4, 7], 3));
 */


//LESSION 6

// Algo: (a[i] * a[i+1]) - (a[i] + a[i+1])
/**
let kq = (nums: number): number => {
    // let arr = nums.toString().split("").map(n => +n);
    // return (arr.reduce((a, b) => a * b)) - (arr.reduce((a, b) => a + b));

    return (nums.toString().split("").map(n => +n).reduce((a, b) => a * b) - nums.toString().split("").map(n => +n).reduce((a, b) => a + b));

}
console.log("ketqua: ", kq(234));
console.log("ketqua: ", kq(4421));
console.log("ketqua: ", kq(12345));
 */

// Given a string str. Find the character which has the greatest decimal value in str (in ASCII table) and return that decimal value.
// Exp : For s1 = "abc", the output should be checkMax(s1)= 99. Because 'c' has the greatest decimal value in s1 and the decimal value of 'c' is 99.
/**
let fc = (str: string) => {
    return Math.max(...str.split("").map((a, i) => str.charCodeAt(i)));
}

console.log(fc('abc'));
console.log(fc('fdhfghfgh'));
console.log(fc('slfjlJKHKJkk'));
 */
// Given a string s containing characters and numbers, check to see if s is represented as a decimal integer or not. Returns 1 if true, -1 if false.
// For s = "a123"  then checkNumber(s) = false. Explanation: "a123" cannot be represented as a decimal integer.
/**
let checkNumber = (s: string) => {

    return (s.split("").every((v) => !isNaN(+v))) ? 1 : -1

}

console.log(checkNumber('1365'));
console.log(checkNumber('ab2'));
console.log(checkNumber('123412312441231312413134124'));
 */

// Given an array of integers in which every numbers appears twice except for one, your taks is to find that unique element.
// For arr = [19, 17, 19, 68, 68], the output should be uniqueNumber(arr) = 17.
/**
let uniqueNumber = (arr: number[]): number => {
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i]))
            return arr[i];
    }

}

console.log(uniqueNumber([19, 17, 19, 68, 68]));
console.log(uniqueNumber([19, 1, 41, 41, 94, 1, 94, 80, 19]));
console.log(uniqueNumber([45, 90, 45, 90, 26, 38, 49, 26, 38]));
 */

// You are given a natural number n, you have the right to swap the digits of the number n. 
// The number k is formed by swapping the digits of n to the possible largest number. 
// The number h is formed by swapping the digits of n to the possible smallest number.
// Explanation: The largest number k is 321, the smallest number h is 123. k - h = 321 -123 = 198.
/**
let minMax = (n: number) => {
    return ((+n.toString().split("").sort((a, b) => (+b) - (+a)).join("")) - (+n.toString().split("").sort((a, b) => (+a) - (+b)).join("")));

}
// console.log(minMax(342));
// console.log(minMax(312));
// console.log(minMax(4565));
// console.log(minMax(2588));
// console.log(minMax(8765));
 */

// Given two integers a and b, we write the numbers between a and b, inclusive in a list. Your task is to calculate the number of occurrences of the zeros
// For a = 10, b = 11, the output should be countZeroDigit(A, B) = 1
// For a = 100, b = 110, the list will be [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110] so the output should be countZeroDigit(a, b) = 12
/**
let countZeroDigit = (a: number, b: number) => {
    let count = 0;
    for (let i = a; i <= b; i++) {
        i.toString().split("").forEach(v => { if (v == "0") count++ });
    }
    return count;
}

console.log(countZeroDigit(1, 10));
console.log(countZeroDigit(1001, 1960));
console.log(countZeroDigit(100, 1000));
 */
// Given two numbers a and b, find the last digit of a raised to the power b
// For a = 2, b = 3 we have 2 raised to the power 3 equal to  8 so the output should be 8.
// For a = 3, b = 3 we have 3 rasied to the power 3 equal to  27 so the output should be 7.
/**
// let lastDigit = (a: number, b: number) => {
//     return + (Math.pow(a, b).toString().split("").pop());
// }

// console.log(lastDigit(1, 1));
// console.log(lastDigit(7, 7));
// console.log(lastDigit(23, 6));
*/

/*
Find the last digit of n!(factorial), which is different from zero. (factorial = giai thừa)
For n = 5, the output should be lastDigitDiffZero(n) = 2.
5! = 1 · 2 · 3 · 4 · 5 = 120.
For n = 6, the output should be lastDigitDiffZero(n) = 2.
6! =1 · 2 · 3 · 4 · 5 · 6 = 720.
For n = 10, the output should be lastDigitDiffZero(n) = 8.
10! = 3628800.
let lastDigitDiffZero = (n: number): number => {
    let gt = 1;
    for (let i = 1; i <= n; i++) {
        gt *= i;
        while (gt % 10 == 0)
            gt /= 10;
        gt %= 100;
    }
    gt %= 10;
    return gt;
*/
// }
// console.log(lastDigitDiffZero(5));
// console.log(lastDigitDiffZero(6));
// console.log(lastDigitDiffZero(10));

/*
Chú Kangaroo thứ nhất xuất phát từ vị trí x1, và mỗi bước nhảy dài v1 mét.
Chú Kangaroo thứ hai xuất phát từ vị trí x2, mỗi bước nhảy có độ dài v2 mét.
Hãy kiểm tra rằng, cả hai chú Kangaroo liệu có thể đáp xuống một vị trí với số bước nhảy bằng nhau hay không. Nếu có thể, hãy trả lời True, nếu không, hãy trả lời False
*/

// let kangaroo = (x1: number, v1: number, x2: number, v2: number): boolean => {
//     return (v1 > v2 && (x2 - x1) % (v1 - v2) == 0) ? true : false;
// }

// console.log(kangaroo(3, 5, 4, 5));
/*
Một đề thi gồm 250 câu hỏi. Với mỗi câu trả lời đúng được cộng 2 điểm, trả lời sai bị trừ 2 điểm. Một học sinh đã làm đề thi đó và nhận được n điểm. Hãy xác định xem học sinh đó đã trả lời đúng bao nhiêu câu trong đề.
Với n = 500 thì correctAnswers = 250
Algo: points = 2*correct - 2*(250-correct) => correct = (points + 500 ) / 4
let correctAnswers = (n: number): number => {
    return n === 0 ? 0 : (n + 500) / 4;
}
*/
// console.log(correctAnswers(456));
/*
pangrams string: a sentence that contains every letter of the alphabet, if possible with each letter only being used once
Example: The quick brown fox jumps over the lazy dog.

ideas:
take in array of strings
    go through each string remove spaces from string (account for other edge cases if time)
    compare alphabet array to string
        check to see if the string has first letter in alphabet
            check to see if string has 2nd letter in alphabet etc. etc. until all letters in alphabet accounted for
            if so, append 1 to a string
else, if the alphabet array still is not empty after going through string, append 0 to string
*/
/**
let pangram = (str): boolean => {
    let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    function checkLetter(arr: string[], char: string) {
        for (let i = 0; i < arr.length; i++) {
            if (char === arr[i])
                arr.splice(i, 1);
        }
    }
    let string = str.split(" ").join("").split("");
    for (let i = 0; i < string.length; i++) {
        checkLetter(alphabets, string[i]);
    }
    if (alphabets.length === 0)
        return true;
    return false;
}

console.log('"The quick brown fox jumps over the lazy dog." is pangrams ? ', pangram(' The quick brown fox jumps over the lazy dog. '));
console.log('"The quick brown fox." is pangrams ? ', pangram(' The quick brown fox . '));
console.log('"hello world"is pangrams ? ', pangram(' hello world . '));
 */

// console.log(typeof typeof 0);

// It evaluates to "string". typeof 0 evaluates to the string "number" and therefore typeof "number" evaluates to "string".


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
/**
let solution = (num: number) => {

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

console.log(solution(82734));
console.log(solution(27346209830709182346));
 */

//cut the vovel
/*
let solution = (str: string): string => {
    return str.replace(/[aieou]/gi, '');
}

console.log(solution('this website for a losers LOL!'));
*/


/**
 * highAndLow("1 2 3 4 5");  // return "5 1"
 * highAndLow("1 2 -3 4 5"); // return "5 -3"
 * highAndLow("1 9 3 4 -5"); // return "9 -5"
 */
/*
let highAndLow = (numbers: string): string => {
    return `${Math.max(...(numbers.split(/\s/).map(v => +v)))}  ${Math.min(...(numbers.split(/\s/).map(v => +v)))}`
    /** another solution;
     * let arr = numbers.split(/\s/).map(i => +i).sort((a, b) => a - b);
     * return `${arr[arr.length - 1]} ${arr[0]}`;

}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));
*/

// TOO LAZY LOL!!!
// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/typescript
/**
function order(words: string): string {

    return words.split(' ')
        .sort((a, b) => +a.match(/\d/) - +b.match(/\d/))
        .join(' ')
}

console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
 */

//https://www.codewars.com/kata/5648b12ce68d9daa6b000099/solutions/typescript
/**
function number(busStops: number[][]): number {
    return busStops.reduce((rem, [on, off]) => rem + (on - off), 0);
}

console.log((number([[10, 0], [3, 5], [5, 8]])));
console.log(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]));
console.log(number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]));
 */

// Count smile face :)
/*
let countSmileys = (arr: string[]) => arr.filter(f => /^[:;][~-]?[D\)]$/.test(f)).length;
console.log(countSmileys([':)', ';(', ';}', ':-D']));
*/


/**
// binary search;
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

console.log(search([-1, 0, 3, 5, 9, 12], 9));
 */


// let solution = (nums1: number[], nums2: number[]) => {
//     let arr = [...nums1, ...nums2].sort((a, b) => a - b);
//     if (arr.length % 2 === 0) {
//         return (arr[(arr.length / 2) - 1] + arr[arr.length / 2]) / 2;
//     } else {
//         return arr[(arr.length - 1) / 2];
//     }

// }
// console.log(solution([1,3],[2]));
// console.log(solution([1, 2], [3, 4]));
// console.log(solution([3,5,6], [-2,-1]));
// console.log(solution([-1,-2],[1]));

//leetcode problem 209
// let minimumSubArrayLength = (target : number, numbers: number[]): number => {
//     let distance = Number.MAX_SAFE_INTEGER; // initial value to check distance change or not.
//     let left  = 0;
//     let sum = 0;
//     for(let right = 0; right < numbers.length ; right++){
//         sum += numbers[right];
//         while(sum >= target){
//             //finding the minimum distance by remove numbers[left] and add numbers[right]
//             distance = Math.min(distance, right - left + 1);
//             sum -= numbers[left];
//             left++;

//         }
//     }
//     return distance === Number.MAX_SAFE_INTEGER ? 0 : distance
// }

// console.log(minimumSubArrayLength(7,[2,3,1,2,4,3]))

//leetcode 1071
// function gcdOfStrings(str1: string, str2: string): string {
//     if (str1 + str2 !== str2 + str1) return ''; //make sure 2 string have same substring and the substring repeat
//     const gcd = (a : number, b : number) : number => (0 === b ? a : gcd(b, a % b)); //logic: str1 % str2 = 0, then str2 is greates substring, 
//                                                                                     // if not, the remainder is the greatest substring
//     return str1.substring(0, gcd(str1.length, str2.length)); //get substring by using gcd
// };
// console.log(gcdOfStrings("ABCABC","ABC"))
// console.log(gcdOfStrings("ABABAB","ABAB"))
// console.log(gcdOfStrings("LEET","CODE"))

//leetcode 453
// function minMoves(nums: number[]): number {
//     let sum = nums[0];
//     let min = nums[0];
//     for(let i = 1 ; i < nums.length ; i++){
//         if(nums[i] < min) min = nums[i];
//         sum += nums[i];
//     }
//     return sum - (nums.length * min);
// };
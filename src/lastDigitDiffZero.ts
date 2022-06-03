
/*
Find the last digit of n!(factorial), which is different from zero. (factorial = giai thừa)
For n = 5, the output should be lastDigitDiffZero(n) = 2.
5! = 1 · 2 · 3 · 4 · 5 = 120.
For n = 6, the output should be lastDigitDiffZero(n) = 2.
6! =1 · 2 · 3 · 4 · 5 · 6 = 720.
For n = 10, the output should be lastDigitDiffZero(n) = 8.
10! = 3628800.
*/
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
}
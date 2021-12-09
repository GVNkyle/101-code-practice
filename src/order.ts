
/* ----------- https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/typescript ---------- */

function order(words: string): string {
    return words.split(' ').sort((a, b) => +a.match(/\d/) - +b.match(/\d/)).join(' ');
}
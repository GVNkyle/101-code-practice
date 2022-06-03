 /* --------- https://www.codewars.com/kata/5648b12ce68d9daa6b000099/solutions/typescript -------- */

function number(busStops: number[][]): number {
    return busStops.reduce((rem, [on, off]) => rem + (on - off), 0);
}
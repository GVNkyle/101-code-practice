/* --------------------------------------- leetcode 1071 -------------------------------------- */
function gcdOfStrings(str1: string, str2: string): string {
    if (str1 + str2 !== str2 + str1) return ''; //make sure 2 string have same substring and the substring repeat
    const gcd = (a : number, b : number) : number => (0 === b ? a : gcd(b, a % b)); //logic: str1 % str2 = 0, then str2 is greates substring, 
                                                                                    // if not, the remainder is the greatest substring
    return str1.substring(0, gcd(str1.length, str2.length)); //get substring by using gcd
};

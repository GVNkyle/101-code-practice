/**
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
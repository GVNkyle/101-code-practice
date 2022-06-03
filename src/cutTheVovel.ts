/* ---------------------------------------- cut the vovel --------------------------------------- */

let cutTheVovel = (str: string): string => {
    return str.replace(/[aieou]/gi, '');
}

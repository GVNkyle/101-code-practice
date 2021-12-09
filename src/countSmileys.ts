
/* ----------------------------------- Count smile face :) ----------------------------------- */

let countSmileys = (arr: string[]) => arr.filter(f => /^[:;][~-]?[D\)]$/.test(f)).length;


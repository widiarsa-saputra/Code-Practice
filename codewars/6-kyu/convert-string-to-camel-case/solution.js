function toCamelCase(str){
    const delimiters = /[-_]/;
    const strSplit = str.split(delimiters);
    let strCamelCase = "";
    if (strSplit === "") {
        return ""
    }
    for (let i=0; i<strSplit.length; i++) {
        if (i === 0) {
            strCamelCase += strSplit[i];
        } else {
            strCamelCase += strSplit[i][0].toUpperCase() + strSplit[i].slice(1);
        }
    }
    return strCamelCase;
}

console.log(toCamelCase(""));
console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The-Stealth-Warrior"));
console.log(toCamelCase("A-B-C"));
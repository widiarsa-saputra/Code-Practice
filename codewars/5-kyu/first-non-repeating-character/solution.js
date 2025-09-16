function firstNonRepeatingLetter(s) {
    const sArray = s.split('').filter(s => s.trim() !== "");
    const repeatedCharsArray = [];
    for (let i = 0; i < sArray.length; i++) {
        for (let j = i + 1; j < sArray.length; j++) {
            if(sArray[i].toLowerCase() === sArray[j].toLowerCase()) {
                if(!repeatedCharsArray.includes(sArray[i].toLowerCase())) {
                    repeatedCharsArray.push(sArray[i].toLowerCase());
                }
            }
        }
    }
    return sArray.filter((s) => {
        if (repeatedCharsArray.includes(s.toLowerCase())) {
            return false
        }
        return true;
    })[0] || '';
}

console.log("🚀 ~ firstNonRepeatingLetter :", firstNonRepeatingLetter('a'));
console.log("🚀 ~ firstNonRepeatingLetter :", firstNonRepeatingLetter('stress'));
console.log("🚀 ~ firstNonRepeatingLetter :", firstNonRepeatingLetter("Go hang a salami, I'm a lasagna hog!"));
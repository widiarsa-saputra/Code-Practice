function parseInt(string) {
    const ones = {
        "one": 1, "two": 2, "three": 3, "four": 4, "five": 5,
        "six": 6, "seven": 7, "eight": 8, "nine": 9
    };

    const teens = {
        "ten": 10, "eleven": 11, "twelve": 12, "thirteen": 13, "fourteen": 14,
        "fifteen": 15, "sixteen": 16, "seventeen": 17, "eighteen": 18, "nineteen": 19
    };

    const tens = {
        "twenty": 20, "thirty": 30, "forty": 40, "fifty": 50,
        "sixty": 60, "seventy": 70, "eighty": 80, "ninety": 90
    };

    const scales = {
        "hundred": 100,
        "thousand": 1000,
        "million": 1000000
    };


    string = string.toLowerCase().replace(/ and /g, ' '); 
    const words = string.split(/[\s-]+/);

    let total = 0;
    let current = 0;

    for (let word of words) {
        if (ones[word] !== undefined) {
        current += ones[word];
        } else if (teens[word] !== undefined) {
        current += teens[word];
        } else if (tens[word] !== undefined) {
        current += tens[word];
        } else if (word === "hundred") {
        current *= 100;
        } else if (word === "thousand") {
        total += current * 1000;
        current = 0;
        } else if (word === "million") {
        total += current * 1000000;
        current = 0;
        }
    }

    return total + current;
}
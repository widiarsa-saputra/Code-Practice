function count(string) {
    return string.split('').reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});
}

console.log("🚀 ~ count ~ count:", count(''));
console.log("🚀 ~ count ~ count:", count('a'));
console.log("🚀 ~ count ~ count:", count('ab'));
console.log("🚀 ~ count ~ count:", count('aba'));
console.log("🚀 ~ count ~ count:", count('ABA'));
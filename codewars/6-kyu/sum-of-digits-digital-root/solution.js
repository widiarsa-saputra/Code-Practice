function digitalRoot(n) {
    return n.toString().split('').length > 1 ? digitalRoot(n.toString().split('').reduce((acc, val) => acc + Number(val), 0)) : n;
}

console.log("🚀 ~ digitalRoot ~ digitalRoot:", digitalRoot(16));
console.log("🚀 ~ digitalRoot ~ digitalRoot:", digitalRoot(456));

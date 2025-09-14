function narcissistic(value, base = 10) {
    const len = Math.floor(Math.log(value) / Math.log(base)) + 1;    
    const strSplit = value.toString().split('');
    
    const sum = strSplit.reduce((acc, val) => acc + Math.pow(Number(val), len), 0);
    return sum === value;
}

console.log("🚀 ~ narcissistic ~ narcissistic:", narcissistic(153));
console.log("🚀 ~ narcissistic ~ narcissistic:", narcissistic(7));
console.log("🚀 ~ narcissistic ~ narcissistic:", narcissistic(122));
console.log("🚀 ~ narcissistic ~ narcissistic:", narcissistic(487));


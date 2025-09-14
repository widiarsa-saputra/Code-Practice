function descendingOrder(n){
    return n.toString().split('').sort((a, b) => Number(b) - Number(a)).join('') * 1;
}
console.log("🚀 ~ descendingOrder ~ descendingOrder:", descendingOrder(123));
console.log("🚀 ~ descendingOrder ~ descendingOrder:", descendingOrder(35153));
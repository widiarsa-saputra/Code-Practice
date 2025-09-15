function queueTime(customers, n) {
    let cashiers = Array(n).fill(0);
    for (let time of customers) {
        let index = cashiers.indexOf(Math.min(...cashiers));
        cashiers[index] += time;
    }
    return Math.max(...cashiers);
}

console.log("🚀 ~ queueTime ~ queueTime:", queueTime([], 1));
console.log("🚀 ~ queueTime ~ queueTime:", queueTime([1,2,3,4], 1));
console.log("🚀 ~ queueTime ~ queueTime:", queueTime([2,2,3,3,4,4], 2));
console.log("🚀 ~ queueTime ~ queueTime:", queueTime([1,2,3,4,5], 100));
function removeEveryOther(arr){
    const newArr = [arr[0]]
    for (let i = 1; i<arr.length; i++) {
        if (i % 2 == 0) {
        newArr.push(arr[i]);
        } 
    }
    return newArr;
}

console.log("🚀 ~ removeEveryOther ~ removeEveryOther:", removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));
console.log("🚀 ~ removeEveryOther ~ removeEveryOther:", removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log("🚀 ~ removeEveryOther ~ removeEveryOther:", removeEveryOther([['Goodbye'], {'Great': 'Job'}]))
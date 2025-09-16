function comp(array1, array2){
    if (!array1 || !array2) return false;
    let sortedArray1 = array1.map(x => x * x).sort((a, b) => a - b);
    let sortedArray2 = array2.slice().sort((a, b) => a - b);
    return sortedArray1.every((value, index) => value === sortedArray2[index]);
}

let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];

console.log("🚀 ~ comp ~ comp:", comp(a1, a2));
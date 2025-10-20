function moveZeros(arr) {
    const zeroArr = arr.filter((item) => item === 0);
    const nonZeroArr = arr.filter((item) => item !== 0);
    return nonZeroArr.concat(zeroArr);
}
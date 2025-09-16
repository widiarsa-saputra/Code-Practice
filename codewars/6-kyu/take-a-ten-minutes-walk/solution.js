function isValidWalk(walk) {
    const counts = walk.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
    if (walk.length === 10) {
        if (counts?.n === counts?.s  && counts?.e === counts?.w) {
            return true
        }
    }
    return false;
}

console.log("🚀 ~ isValidWalk ~ isValidWalk:", isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
console.log("🚀 ~ isValidWalk ~ isValidWalk:", isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));
console.log("🚀 ~ isValidWalk ~ isValidWalk:", isValidWalk(['w']));
console.log("🚀 ~ isValidWalk ~ isValidWalk:", isValidWalk(['n','n','n','s','n','s','n','s','n','s']));
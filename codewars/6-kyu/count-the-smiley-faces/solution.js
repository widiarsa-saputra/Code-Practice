function countSmileys(arr) {
    const smileyPattern = /^[:;][-~]?[/)D]$/;
    return arr.filter(face => smileyPattern.test(face)).length;
}

console.log("🚀 ~ countSmileys ~ countSmileys:", countSmileys([]));
console.log("🚀 ~ countSmileys ~ countSmileys:", countSmileys([':D',':~)',';~D',':)']));
console.log("🚀 ~ countSmileys ~ countSmileys:", countSmileys([':)',':(',':D',':O',':;'] ));
console.log("🚀 ~ countSmileys ~ countSmileys:", countSmileys([';]', ':[', ';*', ':$', ';-D']));
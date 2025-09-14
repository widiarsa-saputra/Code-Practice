function inArray(array1,array2){
    return array1.filter(a1 => array2.some(a2 => a2.includes(a1))).sort();
}


console.log("🚀 ~ inArray ~ inArray:", inArray(
    ["xyz", "live", "strong"],
    ["lively", "alive", "harp", "sharp", "armstrong"]
))
console.log("🚀 ~ inArray ~ inArray:", inArray(
    ["live", "strong", "arp"],
    ["lively", "alive", "harp", "sharp", "armstrong"]
))
console.log("🚀 ~ inArray ~ inArray:", inArray(
    ["tarp", "mice", "bull"],
    ["lively", "alive", "harp", "sharp", "armstrong"]
))
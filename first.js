var firstMissingPositive = function(nums) {
    let positives = nums.filter(x => x > 0)
    positives.sort((x,y) => x - y)
    let noDups = positives.filter((value, index) => value != positives[index+1])

    if (noDups.length === 0) {
        return 1
    }

    for (var i = 0; i < noDups.length; i++) {
        if (i + 1 != noDups[i]) {
            return i + 1
        }
    }

    return (noDups[noDups.length-1] + 1)
};

console.log(firstMissingPositive([0,-1,5,2,4,1]))
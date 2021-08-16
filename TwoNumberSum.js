function twoNumberSum(array, targetSum) {
    let numberHash = {};

    for (const num of array) {
        let diff = targetSum - num;
        if (numberHash[diff]) {
            return [num, diff];
        } else {
            numberHash[num] = true;
        } 
    }
    return [];     
}
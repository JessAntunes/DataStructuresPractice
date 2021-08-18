function twoNumberSum(array, targetSum) {
    let numberHash = {}; // created to keep numbers as keys in it

    for (const num of array) {
        let diff = targetSum - num; // finds diff so we can see if that number can be found as a key in a hash
        if (numberHash[diff]) {
            return [num, diff];  // returns the two numbers needed to get to target sum as an array
        } else {
            numberHash[num] = true;  // saves number with a true value (only the key matters) if it didnt already exist in the hash
        } 
    }
    return [];     // if no match returns empty array
}
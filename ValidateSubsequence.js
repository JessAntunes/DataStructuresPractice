
// Example:
//           array = [-5, 32, 2, 0, 7, -4, 9]
//     subsequence = [32, 7, -4]


function isValidSubsequence(array, subsequence) {
    let seqI = 0;

    for (const num in array) {
        if(seqI === subsequence.length) break;
        if(subsequence[seqI] === num) seqI++;
    }
    
    return seqI === subsequence.length;

}








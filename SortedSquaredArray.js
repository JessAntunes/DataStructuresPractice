function sortedSquaredArray(array) {
    const squares = new Array(array.length).fill(0);
      let smallValI = 0;   // pointer moving from left to right
      let largeValI = array.length - 1; //pointer moving right to left
      
      for (let i = array.length - 1; i >= 0; i--) {
          const smallVal = array[smallValI]; //selects smallest value using pointer
          const largeVal = array[largeValI]; //selects largets value using pointer
          
          if (Math.abs(smallVal) > Math.abs(largeVal)) { // if the absolute of either is larger that fills the array right to left (accts for negatives)
              squares[i] = smallVal * smallVal;
              smallValI++; // shifts pointer to next value
          } else {
              squares[i] = largeVal * largeVal;
              largeValI--; // shifts pointer to next value
          }
      }
    return squares
  }
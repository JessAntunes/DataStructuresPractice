function sortedSquaredArray(array) {
    const squares = new Array(array.length).fill(0);
      let smallValI = 0;
      let largeValI = array.length - 1;
      
      for (let i = array.length - 1; i >= 0; i--) {
          const smallVal = array[smallValI];
          const largeVal = array[largeValI];
          
          if (Math.abs(smallVal) > Math.abs(largeVal)) {
              squares[i] = smallVal * smallVal;
              smallValI++;
          } else {
              squares[i] = largeVal * largeVal;
              largeValI--;
          }
      }
    return squares
  }
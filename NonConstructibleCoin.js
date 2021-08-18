function nonConstructibleChange(coins) {
	let currentChange = 0; // total at the moment
	coins.sort((a, b) => a - b); // sort coin values smallest to largest
	
	for (const coin of coins) {
		if (coin > currentChange + 1) { // if the next coin value is larger than the current value plus one then the amount of the CV + 1 is the answer
			return currentChange + 1
		}
		currentChange += coin; // if not add the coin to the current value
	}
		
  return currentChange + 1;
}
function nonConstructibleChange(coins) {
	let currentChange = 0;
	coins.sort((a, b) => a - b);
	
	for (const coin of coins) {
		if (coin > currentChange + 1) {
			return currentChange + 1
		}
		currentChange += coin;
	}
		
  return currentChange + 1;
}
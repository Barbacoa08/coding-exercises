export const MaximizeStocks = (prices: number[]) => {
	let gap = 0;

	for (let i = 0; i < prices.length; i++) {
		const uut = prices[i];

		for (let j = i; j < prices.length; j++) {
			const possibleGap = prices[j] - uut;
			if (possibleGap > gap) {
				gap = possibleGap;
			}
		}
	}

	return gap;
};

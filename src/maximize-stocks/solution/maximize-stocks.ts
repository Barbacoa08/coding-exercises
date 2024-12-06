// Joe's original solution: O(n^2)
// export const MaximizeStocks = (prices: number[]) => {
// 	let gap = 0;

// 	for (let i = 0; i < prices.length; i++) {
// 		const uut = prices[i];

// 		for (let j = i; j < prices.length; j++) {
// 			const possibleGap = prices[j] - uut;
// 			if (possibleGap > gap) {
// 				gap = possibleGap;
// 			}
// 		}
// 	}

// 	return gap;
// };

// CodeRabbitAI's optimized solution: O(n)
/**
 * Calculates the maximum profit possible from buying and selling stocks
 * @param prices Array of stock prices where index represents time
 * @returns Maximum profit possible, or 0 if no profit can be made
 */
export const MaximizeStocks = (prices: number[]) => {
	let minPrice = prices[0];
	let maxProfit = 0;

	for (let i = 1; i < prices.length; i++) {
		minPrice = Math.min(minPrice, prices[i]);
		maxProfit = Math.max(maxProfit, prices[i] - minPrice);
	}
	return maxProfit;
};

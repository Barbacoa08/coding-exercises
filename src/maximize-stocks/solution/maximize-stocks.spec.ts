import { expect, describe, it } from "vitest";

import { MaximizeStocks } from "./maximize-stocks";

describe("Maximize Stocks", () => {
	it("should handle no input", () => {
		const result = MaximizeStocks([]);

		expect(result).toEqual(0);
	});

	it("should handle minimal input", () => {
		expect(MaximizeStocks([1])).toEqual(0); // not enough inputs
		expect(MaximizeStocks([2, 1])).toEqual(0); // no profit possible
		expect(MaximizeStocks([2, 2])).toEqual(0); // no profit possible
		expect(MaximizeStocks([1, 2])).toEqual(1);
	});

	it("should maximize when the 'buy' is multiple points away from the 'sell'", () => {
		expect(MaximizeStocks([7, 1, 5, 3, 6, 4])).toEqual(5); // buy at 1, sell at 6
	});

	it("is not confused by the same number multiple times in a row", () => {
		expect(MaximizeStocks([7, 3, 3, 5, 5, 1, 3, 2, 6, 4])).toEqual(5); // buy at 1, sell at 6
	});

	it("takes the best option even if it _is_ the first one", () => {
		expect(MaximizeStocks([1, 6, 2, 6, 4])).toEqual(5); // buy at 1, sell at 6
	});

	it("takes the best option even if it is _not_ the first one", () => {
		expect(MaximizeStocks([7, 3, 3, 5, 1, 6])).toEqual(5); // buy at 1, sell at 6
	});

	it("takes the best option even when there is a much smaller number later on", () => {
		expect(MaximizeStocks([200, 37, 100, 5, 1, 6])).toEqual(63); // buy at 37, sell at 100
	});

	it("should return zero when no profit is possible", () => {
		const result = MaximizeStocks([7, 6, 4, 3, 1]);

		expect(result).toEqual(0);
	});
});

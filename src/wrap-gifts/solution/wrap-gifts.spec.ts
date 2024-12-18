import { expect, describe, it } from "vitest";

import { wrapGifts } from "./wrap-gifts";

describe("Wrap Gifts", () => {
	it("should handle no input", () => {
		expect(wrapGifts([], Number.POSITIVE_INFINITY)).toEqual(0);
		expect(wrapGifts([1, 2, 4], 0)).toEqual(0);
	});

	it("should handle multiple correct answers", () => {
		expect(wrapGifts([2, 3, 4, 5], 7)).toEqual(2);

		expect(wrapGifts([1, 1, 1, 1, 1, 1, 1], 3)).toEqual(3);
	});

	it("should handle a single correct answers", () => {
		expect(wrapGifts([1, 2, 3, 4, 5], 6)).toEqual(3);
	});

	it("should handle unsorted array", () => {
		expect(wrapGifts([3, 2, 1, 4, 5], 6)).toEqual(3);
	});

	it("should handle single gift that fits", () => {
		expect(wrapGifts([2], 3)).toEqual(1);
	});

	it("should handle single gift that doesn't fit", () => {
		expect(wrapGifts([4], 3)).toEqual(0);
	});

	it("should handle invalid inputs", () => {
		// biome-ignore lint/suspicious/noExplicitAny: purposefully sending bad data for test
		expect(() => wrapGifts(null as any, 5)).toThrow();
	});
});

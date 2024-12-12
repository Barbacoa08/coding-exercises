import { expect, describe, it } from "vitest";

import { wrapGifts } from "./wrap-gifts";

describe("Wrap Gifts", () => {
	it("should handle no input", () => {
		const result = wrapGifts([], Number.POSITIVE_INFINITY);
		expect(result).toEqual(0);
	});

	it("should multiple correct answers", () => {
		expect(wrapGifts([2, 3, 4, 5], 7)).toEqual(2);

		expect(wrapGifts([1, 1, 1, 1, 1, 1, 1], 3)).toEqual(3);
	});

	it("should a single correct answers", () => {
		expect(wrapGifts([1, 2, 3, 4, 5], 6)).toEqual(3);
	});
});

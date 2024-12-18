import { expect, describe, it } from "vitest";

import { wrapGifts } from "./wrap-gifts";

describe("Wrap Gifts", () => {
	it("should handle no input", () => {
		const result = wrapGifts([], Number.POSITIVE_INFINITY);
		expect(result).toEqual(0);
	});
});

import { describe, expect, it } from "vitest";

import { availableNumbers } from "./available-numbers";

describe("Generate available numbers", () => {
	it("should handle no values passed", () => {
		expect(availableNumbers("", [])).toEqual([]);
	});

	it("should generate numbers when they are available", () => {
		expect(availableNumbers("QB", [1, 2, 3, 10, 19])).toEqual([
			4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18,
		]);
	});
});

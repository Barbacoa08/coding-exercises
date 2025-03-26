import { expect, describe, it } from "vitest";

import { seeBuildingsLeft } from "./see-buildings-left";

describe("See Buildings Left", () => {
	it("should handle no input", () => {
		expect(seeBuildingsLeft([])).toEqual(0);
	});

	it("should throw on invalid inputs", () => {
		// biome-ignore lint/suspicious/noExplicitAny: purposefully sending bad data for test
		expect(() => seeBuildingsLeft(null as any)).toThrow();
	});

	it("should return zero if there are any non-positive numbers (<=0)", () => {
		expect(seeBuildingsLeft([3, -3, 1])).toEqual(0);
		expect(seeBuildingsLeft([3, 0, 1])).toEqual(0);
	});

	it("should handle single building", () => {
		expect(seeBuildingsLeft([5])).toEqual(1);
	});

	it("should multiple buildings that only increase in height", () => {
		expect(seeBuildingsLeft([1, 2, 3, 4, 5])).toEqual(5);
	});

	it("should handle multiple buildings that only decrease in height", () => {
		expect(seeBuildingsLeft([5, 4, 3, 2, 1])).toEqual(1);
	});

	it("should handle multiple buildings that vary in height", () => {
		expect(seeBuildingsLeft([3, 7, 8, 3, 6, 1])).toEqual(3);
	});

	it("should handle a tall building at the start followed by varying heights", () => {
		expect(seeBuildingsLeft([20, 3, 7, 8, 3, 6, 1])).toEqual(1);
	});

	it("should handle tallest buildings at both ends", () => {
		expect(seeBuildingsLeft([20, 3, 7, 8, 3, 6, 30])).toEqual(2);
	});
});

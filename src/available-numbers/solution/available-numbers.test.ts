import { describe, expect, it } from "vitest";

import type { NFLPositionType } from "./available-numbers";
import {
	availableNumbers,
	createArrayRange,
	NFLPostionNumberRanges,
} from "./available-numbers";

describe("Generate available numbers", () => {
	it("should have a properly working support method: `createArrayRange`", () => {
		expect(createArrayRange(1, 10)).toStrictEqual([
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
		]);
		expect(createArrayRange(1, 2)).toStrictEqual([1, 2]);
		expect(createArrayRange(35, 44)).toStrictEqual([
			35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
		]);
	});

	it("should handle no values passed", () => {
		expect(() => availableNumbers("" as NFLPositionType, [])).toThrow();
		expect(() => availableNumbers("" as NFLPositionType, [1, 2])).toThrow();

		expect(availableNumbers("QB", [])).toEqual(NFLPostionNumberRanges.QB);
	});

	it("handles numbers out of order", () => {
		expect(availableNumbers("QB", [4, 10, 5, 1]).length).toBeGreaterThan(1);
	});

	it("handles duplicate numbers", () => {
		expect(availableNumbers("QB", [4, 10, 4, 4, 1]).length).toBeGreaterThan(1);
	});

	it("should generate numbers when they are available", () => {
		expect(availableNumbers("QB", [1, 2, 3, 10, 19])).toEqual([
			0, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18,
		]);

		expect(
			availableNumbers("LB", NFLPostionNumberRanges.LB.toSpliced(2, 1)),
		).toHaveLength(1);
	});

	it("throws when no numbers available", () => {
		expect(availableNumbers("RB", NFLPostionNumberRanges.RB)).toEqual([]);
		expect(availableNumbers("KP", NFLPostionNumberRanges.KP)).toEqual([]);
	});

	it("throws when invalid position passed", () => {
		expect(() =>
			availableNumbers("ZZ" as NFLPositionType, [1, 2, 3, 10, 19]),
		).toThrow();
	});
});

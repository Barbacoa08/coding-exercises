import { expect, describe, it } from "vitest";

import { findLongestStreak } from "./longest-streak";

describe("Find longest streak", () => {
	it("should handle no values passed", () => {
		expect(findLongestStreak([], Number.MAX_SAFE_INTEGER)).toEqual(0);
		expect(findLongestStreak([true, true], Number.MAX_SAFE_INTEGER)).toEqual(0);
	});

	it("should return zero when no streaks exists", () => {
		expect(findLongestStreak([true, false, true], 1)).toEqual(0);
	});

	it("should return zero when all streaks are less than the passed current streak length", () => {
		expect(findLongestStreak([true, false, true], 3)).toEqual(0);
		expect(findLongestStreak([true, true], 3)).toEqual(0);
	});

	it("should find streaks of the same length as pased", () => {
		expect(findLongestStreak([true, false, true, true, true], 3)).toEqual(3);
	});

	it("should find streaks of larger length as pased", () => {
		expect(findLongestStreak([true, true, true, true, true], 3)).toEqual(5);
		expect(findLongestStreak([true, true, true, true], 2)).toEqual(4);
		expect(findLongestStreak([false, true, true, true], 2)).toEqual(3);
	});
});

import { expect, describe, it } from "vitest";

import { findLongestStreak } from "./longest-streak";

describe("Find longest streak", () => {
	it("should handle no values passed", () => {
		expect(findLongestStreak([], Number.MAX_SAFE_INTEGER)).toEqual(0);
		expect(findLongestStreak([true, true], Number.MAX_SAFE_INTEGER)).toEqual(0);
	});
});

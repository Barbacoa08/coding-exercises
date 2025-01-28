import { expect, describe, it } from "vitest";

import { findAnagrams } from "./anagrams";

describe("Find all anagrams", () => {
	it("should handle no values passed", () => {
		expect(findAnagrams("", "")).toEqual([]);
		expect(findAnagrams("asdf", "")).toEqual([]);
		expect(findAnagrams("", "asdf")).toEqual([]);
	});

	it("should handle no matches", () => {
		expect(findAnagrams("fish", "cake")).toEqual([]);
	});

	it("should handle two matches with jumbled characters", () => {
		expect(findAnagrams("cbaebabacd", "abc")).toEqual([0, 6]);
	});

	it("should handle many matches in a row", () => {
		expect(findAnagrams("abab", "ab")).toEqual([0, 1, 2]);
	});

	it("is case-insensitive", () => {
		expect(findAnagrams("cBaebabaCd", "abc")).toEqual([0, 6]);
		expect(findAnagrams("aBAb", "Ab")).toEqual([0, 1, 2]);
	});
});

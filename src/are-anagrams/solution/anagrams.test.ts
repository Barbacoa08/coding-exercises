import { expect, describe, it } from "vitest";

import { areAnagrams } from "./anagrams";

describe("Are anagrams", () => {
	it("should handle no values passed", () => {
		expect(areAnagrams("", "")).toEqual(false);
		expect(areAnagrams("asdf", "")).toEqual(false);
		expect(areAnagrams("", "asdf")).toEqual(false);
	});

	it("should handle anagrams", () => {
		expect(areAnagrams("bored", "robed")).toEqual(true);
		expect(areAnagrams("angel", "glean")).toEqual(true);
		expect(areAnagrams("arc", "car")).toEqual(true);
		expect(areAnagrams("players", "parsley")).toEqual(true);
		expect(areAnagrams("taste", "state")).toEqual(true);
	});

	it("does not care about capitilization", () => {
		expect(areAnagrams("boreD", "roBed")).toEqual(true);
	});

	it("handles multiples of the same letter", () => {
		expect(areAnagrams("taste", "state")).toEqual(true);
		expect(areAnagrams("aaaaaaaaaaa", "aaaaaaaaaaa")).toEqual(true);
	});

	it("should handle obviously wrong values", () => {
		expect(areAnagrams("asdf", "qwer")).toEqual(false);
		expect(areAnagrams("abab", "ab")).toEqual(false);
		expect(areAnagrams("Clever", "Examples")).toEqual(false);
	});

	it("should handle close but not anagrams", () => {
		expect(areAnagrams("taste", "tease")).toEqual(false);
		expect(areAnagrams("abab", "abaa")).toEqual(false);
	});
});

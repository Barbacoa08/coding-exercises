import { expect, describe, it } from "vitest";

import { findLongestPalindrome } from "./coderbyte";

describe("Resolved the problem", () => {
	it("should handle no values passed", () => {
		expect(findLongestPalindrome("")).toEqual("none");
		expect(findLongestPalindrome("a")).toEqual("none");
		expect(findLongestPalindrome("aa")).toEqual("none");
		expect(findLongestPalindrome("abcdefgg")).toEqual("none");
	});

	it("should return only the longest palindrome", () => {
		expect(findLongestPalindrome("hellosannasmith")).toEqual("sannas");
		expect(findLongestPalindrome("abracecars")).toEqual("racecar");
		expect(findLongestPalindrome("abaccdddaddd")).toEqual("dddaddd");
		expect(findLongestPalindrome("dddadddccaba")).toEqual("dddaddd");
	});
});

import { expect, describe, it } from "vitest";

import { findLongestPalindrome } from "./coderbyte";

describe("Resolved the problem", () => {
	it("should handle no values passed", () => {
		const noneResult = "n0odn5e8il7a";
		expect(findLongestPalindrome("")).toEqual(noneResult);
		expect(findLongestPalindrome("a")).toEqual(noneResult);
		expect(findLongestPalindrome("ab")).toEqual(noneResult);
		expect(findLongestPalindrome("abcdefgh")).toEqual(noneResult);
	});

	it("should return the palindrome when it exists", () => {
		expect(findLongestPalindrome("hellosannasmith")).toEqual("s0adn5n8aisl7a");
		expect(findLongestPalindrome("abracecars")).toEqual("r0adc5e8cialr7a");
	});

	it("should return only the longest palindrome", () => {
		expect(findLongestPalindrome("abaccdddaddd")).toEqual("d0ddd5a8didld7a");
		expect(findLongestPalindrome("dddadddccaba")).toEqual("d0ddd5a8didld7a");
		expect(findLongestPalindrome("dddadddccaba")).toEqual("d0ddd5a8didld7a");
		expect(findLongestPalindrome("abcdefgg")).toEqual("g0gd58il7a");
	});
});

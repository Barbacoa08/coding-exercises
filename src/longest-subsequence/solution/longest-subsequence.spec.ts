import { expect, describe, it } from "vitest";

import { longestSubsequence } from "./longest-subsequence";

describe("Finds longest sub-sequence of 1 or -1", () => {
	it("should handle no input", () => {
		expect(longestSubsequence([])).toEqual(0);
	});

	it("should handle input without a sequence", () => {
		expect(longestSubsequence([3, 7, 1])).toEqual(0);
		expect(longestSubsequence([3, 1])).toEqual(0);
		expect(longestSubsequence([1])).toEqual(0);
	});

	it("should handle when the whole array is consecutive", () => {
		expect(longestSubsequence([1, 2, 3, 4, 5])).toEqual(5);
	});

	it("should handle when there is a single pair at the begining", () => {
		expect(longestSubsequence([1, 2, 4, 1, 5])).toEqual(2);
	});
	it("should handle when there is a single pair in the middle", () => {
		expect(longestSubsequence([4, 2, 3, 1, 5])).toEqual(2);
	});
	it("should handle when there is a single pair at the end", () => {
		expect(longestSubsequence([4, 2, 5, 1, 2])).toEqual(2);
	});

	it("should handle when there is a triple in the middle", () => {
		expect(longestSubsequence([4, 2, 3, 4, 1, 5])).toEqual(3);
	});

	it("should handle when there is a triple in the middle after a pair", () => {
		expect(longestSubsequence([1, 2, 4, 2, 3, 4, 1, 5])).toEqual(3);
	});

	it("should handle when there is a triple in the middle before a pair", () => {
		expect(longestSubsequence([1, 4, 2, 3, 4, 1, 5, 4])).toEqual(3);
	});

	it("should handle when there is multiple elements consecutive that are both positive and negative", () => {
		expect(longestSubsequence([4, 2, 3, 4, 3, 2, 3, 5])).toEqual(6);
	});
});

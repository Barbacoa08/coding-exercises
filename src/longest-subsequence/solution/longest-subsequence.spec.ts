import { expect, describe, it } from "vitest";

import { longestSubsequence } from "./longest-subsequence";

describe("Finds longest sub-sequence of 1 or -1", () => {
	it("should handle no input", () => {
		const result = longestSubsequence([]);
		expect(result).toEqual(0);
	});
});

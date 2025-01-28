import { expect, describe, it } from "vitest";

import { findAnagrams } from "./anagrams";

describe("Find all anagrams", () => {
	it("should handle no values passed", () => {
		expect(findAnagrams("", "")).toEqual([]);
		expect(findAnagrams("asdf", "")).toEqual([]);
		expect(findAnagrams("", "asdf")).toEqual([]);
	});
});

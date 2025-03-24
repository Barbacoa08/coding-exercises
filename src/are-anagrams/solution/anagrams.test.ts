import { expect, describe, it } from "vitest";

import { areAnagrams } from "./anagrams";

describe("Are anagrams", () => {
	it("should handle no values passed", () => {
		expect(areAnagrams("", "")).toEqual([]);
		expect(areAnagrams("asdf", "")).toEqual([]);
		expect(areAnagrams("", "asdf")).toEqual([]);
	});
});

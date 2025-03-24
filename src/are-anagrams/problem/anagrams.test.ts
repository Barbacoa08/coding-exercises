import { expect, describe, it } from "vitest";

import { areAnagrams } from "./anagrams";

describe("Are anagrams", () => {
	it("should handle no values passed", () => {
		expect(areAnagrams("", "")).toEqual(false);
		expect(areAnagrams("asdf", "")).toEqual(false);
		expect(areAnagrams("", "asdf")).toEqual(false);
	});
});

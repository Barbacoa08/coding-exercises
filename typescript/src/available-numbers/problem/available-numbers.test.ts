import { expect, describe, it } from "vitest";

import { availableNumbers } from "./available-numbers";

describe("Generate available numbers", () => {
	it("should handle no values passed", () => {
		expect(availableNumbers("", [])).toEqual([]);
	});
});

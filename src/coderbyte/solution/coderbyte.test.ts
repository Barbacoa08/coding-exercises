import { expect, describe, it } from "vitest";

import { coderbyte } from "./coderbyte";

describe("Resolved the problem", () => {
	it("should handle no values passed", () => {
		expect(coderbyte("")).toEqual([]);
	});
});

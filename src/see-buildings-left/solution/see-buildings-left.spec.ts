import { expect, describe, it } from "vitest";

import { seeBuildingsLeft } from "./see-buildings-left";

describe("See Buildings Left", () => {
	it("should handle no input", () => {
		expect(seeBuildingsLeft([])).toEqual(0);
	});
});

import { expect, describe, it } from "vitest";

import { seeBuildingsLeft } from "./see-buildings-left";

describe("See Buildings Left", () => {
	it("should handle no meals", () => {
		const result = seeBuildingsLeft([]);
		expect(result).toEqual(0);
	});
});

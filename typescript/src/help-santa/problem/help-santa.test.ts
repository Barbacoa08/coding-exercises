import { expect, describe, it } from "vitest";

import { helpSanta } from "./help-santa";

describe("Help Santa", () => {
	it("should handle no names", () => {
		const result = helpSanta([]);
		expect(result).toEqual([]);
	});
});

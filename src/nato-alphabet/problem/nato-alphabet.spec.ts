import { expect, describe, it } from "vitest";

import { natoify } from "./nato-alphabet";

describe("Nato-ifys the sentences", () => {
	it("should handle no input", () => {
		const result = natoify("");
		expect(result).toEqual("");
	});
});

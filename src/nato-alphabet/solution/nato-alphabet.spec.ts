import { expect, describe, it } from "vitest";

import { natoify } from "./nato-alphabet";

describe("Nato-ifys the sentences", () => {
	it("should handle no input", () => {
		const result = natoify("");
		expect(result).toEqual("");
	});

	it("handles a simple sentence", () => {
		const result = natoify("hello world");
		expect(result).toEqual(
			"Hotel Echo Lima Lima Oscar (space) Whiskey Oscar Romeo Lima Delta",
		);
	});

	it("handles a nonsense sentence", () => {
		const result = natoify("3spooky5me");
		expect(result).toEqual(
			"Three Sierra Papa Oscar Oscar Kilo Yankee Five Mike Echo",
		);
	});
});

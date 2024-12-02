import { expect, describe, it } from "vitest";

import { rollCall } from "./help-santa";

describe("Help Santa", () => {
	it("should handle no names", () => {
		const result = rollCall([]);
		expect(result).toEqual([]);
	});

	it("should reverse and sort names", () => {
		expect(rollCall(["yzneT", "ydissaC", "enimA"])).toStrictEqual([
			"Amine",
			"Cassidy",
			"Tenzy",
		]);

		expect(
			rollCall([
				"rennoD",
				"nexiV",
				"recnarP",
				"temoC",
				"neztilB",
				"recnaD",
				"dipuC",
				"rehsaD",
				"hploduR",
			]),
		).toStrictEqual([
			"Blitzen",
			"Comet",
			"Cupid",
			"Dancer",
			"Dasher",
			"Donner",
			"Prancer",
			"Rudolph",
			"Vixen",
		]);

		expect(rollCall(["A", "B", "C"])).toStrictEqual(["A", "B", "C"]);
	});
});

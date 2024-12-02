import { expect, describe, it } from "vitest";

import { rollCall } from "./help-santa";

describe("Help Santa", () => {
	it("should handle no names", () => {
		const result = rollCall([]);
		expect(result).toEqual([]);
	});

	it("should reverse and sort names", () => {
		expect(rollCall(["yzneT", "ydissaC", "enimA"])).toBe([
			"Amine",
			"Cassidy",
			"Tenzy",
		]);

		expect(
			rollCall([
				"rennuD",
				"nexiV",
				"recnarP",
				"temoC",
				"neztilB",
				"recnaD",
				"diduC",
				"rehsaD",
				"hploduR",
			]),
		).toBe([
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

		expect(rollCall(["A", "B", "C"])).toBe(["A", "B", "C"]);
	});
});

import { expect, describe, it } from "vitest";

import { evaluatePostfix } from "./evaluate-postfix";

describe("Evaluate postfix expressions", () => {
	it("should handle no values passed", () => {
		expect(evaluatePostfix("")).toEqual(0);
	});

	it("should handle simple logic", () => {
		expect(evaluatePostfix("12+")).toEqual(3);
		expect(evaluatePostfix("12-")).toEqual(-1);
		expect(evaluatePostfix("12*")).toEqual(2);
		expect(evaluatePostfix("21/")).toEqual(2);
	});

	it("should handle appropriate order of operations", () => {
		expect(evaluatePostfix("56+7*")).toEqual(77);
		expect(evaluatePostfix("12+3/")).toEqual(1);
	});
});

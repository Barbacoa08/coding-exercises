import { expect, describe, it } from "vitest";

import { evaluatePostfix } from "./evaluate-postfix";

describe("Evaluate postfix expressions", () => {
	it("should handle no values passed", () => {
		expect(evaluatePostfix("")).toEqual(0);
	});

	it("should handle simple addition", () => {
		expect(evaluatePostfix("12+")).toEqual(3);
	});

	it("should handle appropriate order of operations", () => {
		expect(evaluatePostfix("56+7*")).toEqual(77);
	});
});

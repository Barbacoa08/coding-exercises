import { expect, describe, it } from "vitest";

import { evaluatePostfix } from "./evaluate-postfix";

describe("Evaluate postfix expressions", () => {
	it("should handle no values passed", () => {
		expect(evaluatePostfix("")).toEqual(0);
	});
});

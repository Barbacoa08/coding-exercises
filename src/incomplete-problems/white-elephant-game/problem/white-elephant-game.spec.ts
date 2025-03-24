import { expect, describe, it } from "vitest";

import { WhiteElephantGame } from "./white-elephant-game";

describe("White Elephant Game", () => {
	it("should handle no input", () => {
		expect(() => new WhiteElephantGame(0)).toThrow();
	});
});

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

	it("handles punctuation", () => {
		const result = natoify(
			"Using brackets (like this), does not cause issues. Neither does hyphen-ated/slanted words.",
		);
		expect(result).toEqual(
			"Uniform Sierra India November Golf (space) Bravo Romeo Alpha Charlie Kilo Echo Tango Sierra (space) Brackets on Lima India Kilo Echo (space) Tango Hotel India Sierra Brackets off Comma (space) Delta Oscar Echo Sierra (space) November Oscar Tango (space) Charlie Alpha Uniform Sierra Echo (space) India Sierra Sierra Uniform Echo Sierra Stop (space) November Echo India Tango Hotel Echo Romeo (space) Delta Oscar Echo Sierra (space) Hotel Yankee Papa Hotel Echo November Hyphen Alpha Tango Echo Delta Slant Sierra Lima Alpha November Tango Echo Delta (space) Whiskey Oscar Romeo Delta Sierra Stop",
		);
	});

	it("handles large numbers", () => {
		const result = natoify("1234567890");
		expect(result).toEqual("One Two Three Four Five Six Seven Eight Nine Zero");
	});
});

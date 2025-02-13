export const createArrayRange = (start: number, end: number): number[] =>
	Array.from(new Array(end - start + 1), (_x, i) => i + start);

export type NFLPositionType =
	| "QB"
	| "RB"
	| "WR"
	| "TE"
	| "OL"
	| "DL"
	| "LB"
	| "DB"
	| "KP"
	| "LS";

export const NFLPostionNumberRanges: Record<NFLPositionType, number[]> = {
	QB: createArrayRange(0, 19),
	RB: [...createArrayRange(0, 49), ...createArrayRange(80, 89)],
	WR: [...createArrayRange(0, 49), ...createArrayRange(80, 89)],
	TE: [...createArrayRange(0, 49), ...createArrayRange(80, 89)],
	OL: createArrayRange(50, 79),
	DL: [...createArrayRange(50, 79), ...createArrayRange(90, 99)],
	LB: [...createArrayRange(0, 59), ...createArrayRange(90, 99)],
	DB: createArrayRange(0, 49),
	KP: [...createArrayRange(0, 49), ...createArrayRange(90, 99)],
	LS: createArrayRange(0, 99),
};

export const availableNumbers = (s: NFLPositionType, n: number[]): number[] => {
	if (NFLPostionNumberRanges[s].length < 1) {
		throw new Error(`Invalid position type: ${s}`);
	}

	const result = [];
	for (const possibleNumber of NFLPostionNumberRanges[s]) {
		if (!n.includes(possibleNumber)) {
			result.push(possibleNumber);
		}
	}

	// NOTE: in the end, this is a trivially small data set, so none of these optimizations make sense to implement
	// OPTIMIZATION: check lengths and "for of" by the smaller?
	// OPTIMIZATION: sort `n` and then pop off numbers from `n` when we pass them?
	// OPTIMIZATION: pop off numbers from `n` when we see them?

	return result;
};

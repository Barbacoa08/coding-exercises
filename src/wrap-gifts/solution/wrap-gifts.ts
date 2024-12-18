/**
 * More complex problem:
 *
 * assume unsorted array, DO NOT SORT, then solve
 */

export const wrapGifts = (giftLengths: number[], paperWidth: number) => {
	if (giftLengths.some((length) => length <= 0)) return 0;

	const sortedGiftLengths = giftLengths.toSorted();

	let usedPaper = 0;
	let wrappedGifts = 0;
	for (let i = 0; i < sortedGiftLengths.length; i++) {
		const giftLength = sortedGiftLengths[i];

		if (giftLength + usedPaper <= paperWidth) {
			wrappedGifts++;
			usedPaper += giftLength;
		} else {
			break;
		}
	}

	return wrappedGifts;
};

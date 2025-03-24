export const areAnagrams = (s: string, p: string) => {
	if (s.length === 0 || p.length === 0 || s.length !== p.length) {
		return false;
	}

	const unmatched: Record<string, number> = {};
	const wordLength = s.length;

	// build dict
	for (let i = 0; i < wordLength; i++) {
		const key = s[i].toLowerCase();
		const value = unmatched[key];

		if (value === undefined) {
			unmatched[key] = 1;
		} else {
			unmatched[key] += 1;
		}
	}

	// remove what matches, return early if possible
	for (let i = 0; i < wordLength; i++) {
		const key = p[i].toLowerCase();
		const value = unmatched[key];

		if (value === undefined) {
			return false;
		}

		if (value === 1) {
			delete unmatched[key];
		} else {
			unmatched[key] -= 1;
		}
	}

	return Object.keys(unmatched).length === 0;
};

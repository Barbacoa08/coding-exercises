export const findAnagrams = (s: string, p: string) => {
	if (s.length <= 0 || p.length <= 0) return [];

	const pSorted = p.toLowerCase().split("").sort().join("");
	const pLength = p.length;
	const result = [];

	for (let i = 0; i <= s.length - pLength; i++) {
		const substring = s
			.substring(i, i + pLength)
			.toLocaleLowerCase()
			.split("")
			.sort()
			.join("");

		if (substring === pSorted) result.push(i);
	}

	return result;
};

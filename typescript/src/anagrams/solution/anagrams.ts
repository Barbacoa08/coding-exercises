/// original implementation: O(n * k * log k)
// export const findAnagrams = (s: string, p: string) => {
// 	if (s.length <= 0 || p.length <= 0) return [];

// 	const pSorted = p.toLowerCase().split("").sort().join("");
// 	const pLength = p.length;
// 	const result = [];

// 	for (let i = 0; i <= s.length - pLength; i++) {
// 		const substring = s
// 			.substring(i, i + pLength)
// 			.toLocaleLowerCase()
// 			.split("")
// 			.sort()
// 			.join("");

// 		if (substring === pSorted) result.push(i);
// 	}

// 	return result;
// };

/// CodeRabbit implementation: O(n)
/**
 * Finds all starting indices of anagrams of pattern string p in source string s.
 * @param s - Source string to search in
 * @param p - Pattern string to find anagrams of
 * @returns Array of starting indices where anagrams of p are found in s
 * @throws {Error} If inputs are null or undefined
 */
export const findAnagrams = (s: string, p: string): number[] => {
	if (s == null || p == null) throw new Error("Invalid input");
	if (s.length <= 0 || p.length <= 0) return [];
	if (p.length > s.length) return [];

	const result: number[] = [];
	const charMap = new Map<string, number>();

	// Initialize character frequency map for pattern
	for (const char of p.toLowerCase()) {
		charMap.set(char, (charMap.get(char) || 0) + 1);
	}

	let matches = charMap.size;
	const window = new Map<string, number>();

	// Initialize first window
	for (let i = 0; i < p.length; i++) {
		const char = s[i].toLowerCase();
		window.set(char, (window.get(char) || 0) + 1);
		if (window.get(char) === charMap.get(char)) matches--;
	}

	if (matches === 0) result.push(0);

	// Slide window
	for (let i = p.length; i < s.length; i++) {
		// Remove leftmost character
		const leftChar = s[i - p.length].toLowerCase();
		if (charMap.has(leftChar)) {
			if (window.get(leftChar) === charMap.get(leftChar)) matches++;
			// biome-ignore lint/style/noNonNullAssertion: this is simple enough that I'm not concerned
			window.set(leftChar, window.get(leftChar)! - 1);
		}

		// Add rightmost character
		const rightChar = s[i].toLowerCase();
		if (charMap.has(rightChar)) {
			window.set(rightChar, (window.get(rightChar) || 0) + 1);
			if (window.get(rightChar) === charMap.get(rightChar)) matches--;
		}

		if (matches === 0) result.push(i - p.length + 1);
	}

	return result;
};

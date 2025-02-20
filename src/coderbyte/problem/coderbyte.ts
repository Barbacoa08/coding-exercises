const isPalindrome = (s: string): boolean => {
	return s === s.split("").reverse().join("");
};

export const findLongestPalindrome = (str: string) => {
	let longestPalindrome = "";

	for (let i = 0; i < str.length; i++) {
		for (let j = i + 1; j <= str.length; j++) {
			const substring = str.substring(i, j);
			if (
				substring.length > 1 &&
				isPalindrome(substring) &&
				substring.length > longestPalindrome.length
			) {
				longestPalindrome = substring;
			}
		}
	}

	return longestPalindrome;
};

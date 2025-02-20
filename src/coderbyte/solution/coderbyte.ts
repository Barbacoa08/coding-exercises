const ChallengeToken = "0d58il7a";

const addChallengeToken = (s: string) =>
	s
		.split("")
		.map((c, i) => {
			return i < s.length - 1
				? c + (ChallengeToken[i] || "")
				: c + (ChallengeToken.slice(i) || "");
		})
		.join("");

const isPalindrome = (s: string): boolean => {
	return s === s.split("").reverse().join("");
};

// TODO: optimize by removing the inner-loop and using expanding out
export const findLongestPalindrome = (str: string) => {
	let longestPalindrome = "";

	for (let i = 0; i < str.length; i++) {
		// Skip if remaining length is less than current longest
		if (str.length - i <= longestPalindrome.length) break;

		for (let j = i + 1; j <= str.length; j++) {
			// Skip if length would be less than current longest
			if (j - i <= longestPalindrome.length) continue;

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

	return addChallengeToken(longestPalindrome || "none");
};

export const longestSubsequence = (arr: number[]) => {
	if (arr.length < 2) {
		return 0;
	}

	let max = 1;
	let subsequence = 1;

	for (let i = 1; i < arr.length; i++) {
		if (Math.abs(arr[i] - arr[i - 1]) === 1) {
			subsequence++;
			max = Math.max(max, subsequence);
		} else {
			subsequence = 1;
		}
	}

	return max > 1 ? max : 0;
};

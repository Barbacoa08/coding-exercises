export const findLongestStreak = (arr: boolean[], n: number): number => {
	if (arr.length < 1 || arr.length < n) {
		return 0;
	}

	let peak = 1;
	let streak = 1;
	let uut = arr[0];

	for (let i = 1; i < arr.length; i++) {
		const v = arr[i];

		if (v === uut) {
			streak++;
			peak = Math.max(streak, peak);
		} else {
			streak = 1;
			uut = v;
		}
	}

	return peak < n ? 0 : peak;
};

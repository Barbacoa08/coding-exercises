export const seeBuildingsLeft = (heights: number[]) => {
	if (heights.length <= 0 || heights.some((h) => h <= 0)) return 0;
	if (heights.length === 1) return 1;

	let seenBuildings = 1;
	let tallestThusFar = heights[0];

	for (let i = 1; i < heights.length; i++) {
		const h = heights[i];
		if (tallestThusFar < h) {
			seenBuildings++;
			tallestThusFar = h;
		}
	}

	return seenBuildings;
};

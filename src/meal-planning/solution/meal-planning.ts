/**
 * OPTIMIZATIONS:
 * - sort meals first
 * - search for any meal that can fit in the remaining hour
 * - search for BEST meal that can fit in the remaining hour
 * - minutesSpent.indexOf(Math.min(...minutesSpent))
 */

/**
 * fun play:
 * - each meal has a priority
 * - test total execution time, if/when that exceeds X time, throw a warning to show that we need to optimize
 */

const SimultaniousMeals = 2;

export const MealPlan = (meals: number[]) => {
	const minutesSpentPerWorkStation = new Array(SimultaniousMeals).fill(0);

	while (meals.length > 0) {
		const mealtime = meals.pop();
		const nextAvailableStationIndex = minutesSpentPerWorkStation.indexOf(
			Math.min(...minutesSpentPerWorkStation),
		);
		minutesSpentPerWorkStation[nextAvailableStationIndex] += mealtime;
	}

	const hoursSpent = Math.ceil(Math.max(...minutesSpentPerWorkStation) / 60);

	return hoursSpent;
};

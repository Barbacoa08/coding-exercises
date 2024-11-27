/**
 * OPTIMIZATIONS:
 * - sort meals first
 * - search for any meal that can fit in the remaining hour
 * - search for BEST meal that can fit in the remaining hour
 * - minutesSpent.indexOf(Math.min(...minutesSpent))
 */

const SimultaniousMeals = 2;

export const MealPlan = (meals: number[]) => {
	const minutesSpent = new Array(SimultaniousMeals).fill(0);

	while (meals.length > 0) {
		const mealtime = meals.pop();
		const stationIndex = minutesSpent.indexOf(Math.min(...minutesSpent));
		minutesSpent[stationIndex] += mealtime;
	}

	console.log("minutes spent: ", { minutesSpent });

	const hoursSpent = Math.ceil(Math.max(...minutesSpent) / 60);

	return hoursSpent;
};

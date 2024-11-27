import { expect, describe, it } from "vitest";

import { MealPlan } from "./meal-planning";

describe("Meal Plan", () => {
	it("should handle no meals", () => {
		const result = MealPlan([]);
		expect(result).toEqual(0);
	});

	it("should be able to prep a single 120min recipe in 2hrs", () => {
		expect(MealPlan([120])).toEqual(2);
	});

	it("should be able to prep four 20-30min recipes in 2hrs", () => {
		expect(MealPlan([30, 30, 30, 20])).toEqual(2);
	});

	it("should be able to prep six 25-60min recipes in 3hrs", () => {
		expect(MealPlan([30, 25, 45, 30, 60, 15])).toEqual(3);
	});
});

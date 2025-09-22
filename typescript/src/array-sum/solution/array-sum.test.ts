import { expect, describe, it } from "vitest";

import { arraySum } from "./array-sum";

describe("Array sum", () => {
  it("handles no input", () => {
    // @ts-expect-error testing error condition
    expect(arraySum()).toBe(0);
    expect(arraySum([])).toBe(0);
  });

  it("handles a single number in the array", () => {
    expect(arraySum([1])).toBe(1);
    expect(arraySum([10])).toBe(10);
    expect(arraySum([-11])).toBe(-11);
  });

  it("handles 2-4 nummbers in the array", () => {
    expect(arraySum([1, 4])).toBe(10);
    expect(arraySum([1, 4, 7])).toBe(28);
    expect(arraySum([1, 4, 7, 10])).toBe(55);
  });

  it("handles 100 numbers in the array", () => {
    const oneHundredRandomNumbers = [];
    for (let i = 0; i < 100; i++) {
      oneHundredRandomNumbers.push(Math.floor(Math.random() * 100));
    }

    expect(arraySum(oneHundredRandomNumbers)).toBeGreaterThan(100);
    expect(arraySum(oneHundredRandomNumbers)).toBeLessThan(
      Number.MAX_SAFE_INTEGER
    );
  });

  it("handles negative numbers", () => {
    expect(arraySum([-1, -2, -3])).toBe(-14);
    expect(arraySum([1, -20, 300, -4000, 50000, -600000, 7000000])).toBe(
      12338842
    );
  });

  it("handles decimals", () => {
    expect(arraySum([0.1, 0.2, 0.3])).toBe(1.4);
  });

  it("gracefully dies when exceeding maximum possible value", () => {
    expect(() => arraySum([1, Number.MAX_VALUE])).toThrow();
  });
});

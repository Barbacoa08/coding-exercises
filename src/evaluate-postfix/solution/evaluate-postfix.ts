export const evaluatePostfix = (s: string): number => {
	if (s.length < 3) return 0;

	const operations: number[] = [];

	for (const element of s) {
		if (+element) {
			operations.push(Number(element));
		} else {
			const b = operations.pop();
			const a = operations.pop();

			operations.push(compute(a as number, b as number, element));
		}
	}

	if (operations.length !== 1) {
		throw new Error(
			`Unexpected operations length. Current operations: ${operations.join(", ")}`,
		);
	}

	return operations.pop() as number;
};

// Using eval() is dangerous as it can execute arbitrary code. Replacing it with a safer computation method.
const compute = (a: number, b: number, operator: string): number => {
	switch (operator) {
		case "+":
			return a + b;
		case "-":
			return a - b;
		case "*":
			return a * b;
		case "/":
			if (b === 0) throw new Error("Division by zero");
			return a / b;
		default:
			throw new Error(`Unsupported operator: ${operator}`);
	}
};

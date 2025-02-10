export const evaluatePostfix = (s: string): number => {
	if (s.length < 3) return 0;

	const operations: string[] = [];

	for (const element of s) {
		if (+element) {
			operations.push(element);
		} else {
			const a = operations.shift();
			const b = operations.shift();

			// biome-ignore lint/security/noGlobalEval: `eval` is the only way to compute
			const result = eval(`${a} ${element} ${b}`);

			operations.push(result);
		}
	}

	if (operations.length !== 1) {
		throw new Error(
			`Unexpected operations length. Current operations: ${operations.join(", ")}`,
		);
	}

	return Number(operations.pop());
};

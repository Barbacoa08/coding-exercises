export const evaluatePostfix = (s: string): number => {
	if (s.length < 3) return 0;

	const operations: string[] = [];
	const input = s.split("");

	for (let i = 0; i < input.length; i++) {
		const element = input[i];

		if (+element) {
			operations.push(element);
		} else {
			const a = operations.shift();
			const b = operations.shift();

			// biome-ignore lint/security/noGlobalEval: only way to compute
			const result = eval(`${a} ${element} ${b}`);

			operations.push(result);
		}
	}

	if (operations.length !== 1) {
		throw new Error(
			`Unexpected operations remaining to be done. Current operations: ${operations.join(", ")}`,
		);
	}

	return operations.length === 1 ? Number(operations.pop()) : 0;
};

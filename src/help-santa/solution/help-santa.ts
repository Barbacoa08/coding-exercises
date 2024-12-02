export const rollCall = (names: string[]) => {
	const reversedNames = names.map((n) => n.split("").reverse().join(""));
	return reversedNames.toSorted();
};

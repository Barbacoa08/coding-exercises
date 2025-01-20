export const natoify = (sentence: string): string => {
	const result: string[] = [];

	const uut = sentence.split("");

	for (let i = 0; i < uut.length; i++) {
		const character = NatoSet[uut[i].toLowerCase()];

		if (character) {
			result.push(character);
		} else {
			throw new Error(`Unknown character encountered: ${uut[i]}`);
		}
	}

	return result.join(" ");
};

const NatoSet: Record<string, string> = {
	// punctuation
	" ": "(space)",
	".": "Stop",
	",": "Comma",
	"-": "Hyphen",
	"/": "Slant",
	"(": "Brackets on",
	")": "Brackets off",
	":": "Colon",
	";": "Semi-colon",
	"!": "Exclamation mark",
	"?": "Question mark",
	"'": "Apostrophe",
	'"': "Quote",

	// numbers
	"0": "Zero",
	"1": "One",
	"2": "Two",
	"3": "Three",
	"4": "Four",
	"5": "Five",
	"6": "Six",
	"7": "Seven",
	"8": "Eight",
	"9": "Nine",

	// letters
	a: "Alfa",
	b: "Bravo",
	c: "Charlie",
	d: "Delta",
	e: "Echo",
	f: "Foxtrot",
	g: "Golf",
	h: "Hotel",
	i: "India",
	j: "Juliett",
	k: "Kilo",
	l: "Lima",
	m: "Mike",
	n: "November",
	o: "Oscar",
	p: "Papa",
	q: "Quebec",
	r: "Romeo",
	s: "Sierra",
	t: "Tango",
	u: "Uniform",
	v: "Victor",
	w: "Whiskey",
	x: "Xray",
	y: "Yankee",
	z: "Zulu",
};

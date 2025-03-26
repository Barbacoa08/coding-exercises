export class WhiteElephantGame {
	playerCount: number;

	constructor(players: number) {
		this.playerCount = players;
	}

	nextMove = () => {
		throw new Error("Not implemented");
	};
}

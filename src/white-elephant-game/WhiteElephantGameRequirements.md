# White Elephant Game

Make a white elephant gift exchange class that simulates the game. It should generate a sequence of random but valid gift-opening and gift-stealing moves for n participants, tracks steal counts and frozen gifts, and ends the game when everyone has a gift.

Example playthrough:

```javascript
const game = new WhiteElephantGame(4); // 4 players

console.log(game.nextMove()); // "Person 0 opened gift 0"
console.log(game.nextMove()); // "Person 1 opened gift 1" 
console.log(game.nextMove()); // "Person 2 stole gift 0 from person 0"
console.log(game.nextMove()); // "Person 0 stole gift 1 from person 1"
console.log(game.nextMove()); // "Person 1 opened gift 2"
console.log(game.nextMove()); // "Person 3 opened gift 3"
console.log(game.nextMove()); // "Game Over! Final distribution: {'person 0':1, 'person 1':2, 'person 2':0, 'person 3':3}"
```

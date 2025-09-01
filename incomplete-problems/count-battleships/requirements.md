# count battleships

> cassidoo: September 1st, 2025

Imagine a simplified version of the game [Battleship](https://en.wikipedia.org/wiki/Battleship_(game)?utm_source=cassidoo&utm_medium=email&utm_campaign=inspiration-is-applying-what-youve-received-derek) played on a 2D grid. The grid represents the sea, and each cell can either be empty (`.`) or contain a part of a ship (`X`). Ships are placed horizontally or vertically, and there are no adjacent ships. Given a grid, count the number of battleships in it.

> Extra credit: can you make a layout generator for the game given these rules?

Example:

```javascript
const ships = [
  ['X', 'X', '.', 'X'],
  ['.', '.', '.', 'X'],
  ['.', '.', '.', 'X'],
  ['.', '.', '.', '.'],
];

numberOfShips(ships)
> 2
```

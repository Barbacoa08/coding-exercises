# total score of a Cribbage hand

> cassidoo: Mar 17, 2025

Write a function scoreHand(cards) that calculates the total [score of a Cribbage hand](https://bicyclecards.com/how-to-play/cribbage?utm_source=cassidoo&utm_medium=email&utm_campaign=take-your-victories-whatever-they-may-be-cherish). The input is an array of 5 card strings (including the starter card), where each card is represented as rank+suit (e.g., "AH", "10D", "KS"). Here are the scoring rules:

15s: 2 points for each combination of cards summing to 15
Pairs: 2 points for each pair of same-rank cards
Runs: 1 point per card in a run of 3 or more consecutive ranks
Example:

```javascript
> scoreHand(["7H", "8C", "9D", "JH", "KS"])
> 5

> scoreHand(["AH", "2C", "3D", "4S", "5H"])
> 7
```

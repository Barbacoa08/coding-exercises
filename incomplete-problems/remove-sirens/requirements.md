# remove sirens

> cassidoo: June 23rd, 2025

You’re given an array of siren objects, each with a start and end time in seconds, representing when the siren is active. Write a function to return the minimum number of sirens you need to remove so that no two sirens overlap.

Example:

```javascript
removeSirens([
  { start: 1, end: 5 },
  { start: 3, end: 7 },
  { start: 6, end: 9 },
  { start: 8, end: 10 }
]);
> 1

removeSirens([
  { start: 0, end: 3 },
  { start: 2, end: 4 },
  { start: 5, end: 7 },
  { start: 6, end: 8 },
  { start: 8, end: 10 }
])
> 2
```

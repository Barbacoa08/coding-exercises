# get char after Vim commands

> cassidoo: July 14th, 2025

Given a multi-line string and a sequence of Vim navigation commands (`h` for left, `j` for down, `k` for up, and `l` for right), and starting at the top-left character, write a function that processes the commands and returns the character under the cursor.

If the cursor tries to move out of bounds, keep it at the last valid position.

Example:

```javascript
const string = `Hello, world!
how are ya?`; // or "Hello, world!\nhow are ya?"
const commands = 'jlhll';

getCharAfterVimCommands(string, commands)
> 'w'
```

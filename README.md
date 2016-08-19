
# Penney's Game
_Current Version: 0.2_

This is a simple couple of scripts based on the [Numberphile](https://www.youtube.com/channel/UCoxcjq-8xIDTYp3uz647V5A) video, [Penney's Game](https://www.youtube.com/channel/UCoxcjq-8xIDTYp3uz647V5A).

## Game Premise

You and an opponent both choose an outcome of three consecutive coin tosses. A coin is then flipped until three consecutive coin tosses match with the one of the player's guesses.

_Note: Depending on what the player picks, the Penney Bot will pick a more likely outcome! This is also explained in the numberphile video._

## Picking Outcomes

![Penney Bot will probably beat you.](/images/probabilities.png)

Notice how there is no best choice, there are only choices that are better than others. If you guessed [a,b,c], Penney Bot will guess [!b,a,b]. This will give Penney Bot an advantage over your guess.

### Example

_You pick:_

```
[Heads, Tails, Tails]
```

_Penney Bot will then pick:_

```
[Not-Tails, Heads, Tails]

or

[Heads, Heads, Tails]
```
## How To Use Penney Bot

Assuming the _scripts_ folder is in the root of your web folder, throw these scripts in your index html file (or just use mine):

```
	<script type="text/javascript" src="scripts/penney.js"></script>
	<script type="text/javascript" src="scripts/coinflip.js"></script>
```

## Future Things To Do
* Make a nice interface to play Penney Bot.
* Make the game have rounds (this way Penney Bot will have an easier time winning)
* Add more functionality (Flip coin, keep score, etc.)
* More stuff.

## Changelog

### v 0.2

* Added functions to change back and forth between discrete and readable arrays
* Code is now a bit more DRY

### v 0.1 

*Initial Release


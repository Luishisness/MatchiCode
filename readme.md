Overview
Description
You'll be creating 2 programs:

Face - a simple canvas drawing
Matchicode - a matching game
You'll be using the following concepts:

manipulating the DOM
setting DOM element attributes
using canvas
handling events with addEventListener
Submission Process
You will be given access to a private repository on GitHub.

The final version of your assignment should be in GitHub, but a submission should still be sent via NYU Classes.

Push your changes to the homework repository on GitHub.
Add the URL of the repository to your assignment submission in NYU Classes.
Commits later than that date will be handled on a case-by-case basis.
24 hour grace period where NYU Classes is still open.
After that, no late homeworks will be accepted.
(3 points) Make at Least 4 Commits
Commit multiple times throughout your development process.
Make at least 4 separate commits
Part 1 - Face, Canvas Setup
(1 point) Create an HTML File
create a file called face.html
it should contain script tags at the bottom of the page… and it should include your JavaScript file
(1 point) Create an External JavaScript File
create a file called face.js
all of your JavaScript code will go in this file
(5 points) Part 2 - Face, Drawing a Picture
Draw a Picture!
Using the any of these materials:
slides from class 21
or Chapter 16 from Eloquent JavaScript, 2nd Edition
Mimic the following picture (it doesn't have to be exactly right, just make a face :P)
Face

Part 3 - Matchicode
Required Features
(5 points) Use the following markup

(This will be the only markup allowed, everything else will be generated in JavaScript).
Do not use any JavaScript libraries.
<h1> M▲tchico☃e</h1>
<div id="game">
		<div id="startForm">
			I Want <input type="number" id="numSymbols"> Symbols.
			<button id='startButton'>Play Now</button>
		</div>
</div>
<script src="javascripts/game.js"></script>
(2 points) Setup your JavaScript accordingly

All of your JavaScript should go in an external file
All of your JavaScript, with the exception of adding an event listener for the first click, should be within functions (no global variables, though you can have variables in functions that act as global variables)
(4 points) Start with a form that allows the user to pick the number of symbols to be used

Add an event listener to listen for clicks
When the "Play Now" button is pressed, the even listener should:
Determine the value of the input field (you can use whatever method you like to retrieve this value)
The number of symbols should have max value of 8 (though no error will show up, the game will just start with the max number of symbols if the input is over 8)
The symbols can be any character set you'd like
The form should be removed (or hidden if you're comfortable manipulating style sheets)
The game board should be added
(5 points) Generate a game board

Based on the number submitted, generate a game board
The number of cards should be equal to 2 x the number of symbols (you'll need matching pairs, of course!)
The cards should be arranged as a square if possible (for example, 8 symbols means 16 cards, which means a 4 x 4 grid)
If they cannot be a square (there aren't an equal number of columns and rows), arrange them in any way you like
Regardless of the number of cards, the arrangement must be in a grid. Consider using:
display: inline-block;
a table
floated elements
(6 points) Assign a random symbol to each card

Find a way to assign a symbol from the set of available symbols to each card
The symbol assignment should be randomized!
The symbol should not appear in the user interface at the beginning of the game
However, it does not matter if the symbol is viewable in the source code
Some potential solutions for associating a symbol with a card may include:
An object that serves as a lookup table
Setting the value as a custom attribute (see chapter 13 in Eloquent JavaScript, 2nd Edition)
Perhaps creating an object model that drives your game
Oooor… any other scheme that you can come up with
(6 points) Allow the user to click on cards

Assign an event listener to each card
When a card is clicked show the card's symbol
Either add a text node to the card
Or use CSS
If you're using CSS, only manipulate the classes, don't assign styles directly
Some options for toggling classes include:
classList
setAttribute
Do not allow more than two flipped cards at once
(6 points) Handle two consecutive clicks / two flipped cards

If there are two cards flipped after two clicks
If they don't match, flip them back so that the symbols don't show
If they do match, leave them around so that the symbols remain revealed
If there's only one card flipped, allow another card to be flipped
Again there are matches that are already flipped, don't unflip them
(3 points) Keep track of the number of flip pairs

Create an element that shows you the number of guesses
Add a guess after every two cards are flipped
(3 points) Determine when someone wins

If all of the revealed cards are matches, end the game
Clear the board and show a thank you message
Optional Features (Extra Credit)
Implement any combination of the following for up to 15 points extra credit.

(5 points) Create a helper function for creating elements and adding class names and other attributes, like ids

see creating nodes in Chapter 13
but add the ability to have second parameter that contains name value pairs of attributes and their values
createElement('div', {id: 'foo', class: 'bar'}, 'some text', createElement('p')) →
<div id='foo', class='bar'>some text <p></p></div>
(5 points) Pause after two cards are clicked to give the user time to view the cards

use setTimeOut] or …
setInterval and clearInterval
(5 points) Interface feedback for hover states, matches and no matches

After two cards are revealed, before they flip back to a hidden state, or before they're permanently revealed because of a match…
Give some feedback to the user, such as an increase size or a change in color
On hover over a card, give some feedback, such as an increase in size or a change in color
(5 points) Thoughtful styling

Center the grid
Center the symbols on each card
Add rounded corners
Add drop shadows
(10 points) At the end of the game, show high scores and have a form that allows a user to post their initials

Create a tiny express app to handle this
Keep the high scores in MongoDB
Sample Interaction

Matchicode
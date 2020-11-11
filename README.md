# Milestone-Project-Two

## Description

WORK IN PROGRESS

Higher or Lower is a card game based on a popular physical card game by a different name.

The aim of the game is to pick the statistic on your card that you think will be higher than you opponents. If you pick correctly and your stat is higher you win a point, if the opponents stat is higher they win a point. If the stats are tied we give the benefit to you and award you the point!

The website consists of a start of game overlay which introduces the player to the game by explaining the rules, and also providing a start button when the player is ready to play.

At the start of the game information is presented onto two cards, both cards with a picture and name of an NBA player. On the players card there are 3 stats, on the opponents card these space are blank. Below this on both cards is the relevant cards score. The only on the player card is a button to end the game without it coming to an end due to score.

At the end of the game the game end screen is presented, it will state who won the gave and present a restart button to the player.

## Links

### Deployment

The game has been deployed to [github pages](https://shaunward.github.io/Milestone-Project-Two/)

### Wireframes

- Start of game overlay [wireframe](https://github.com/ShaunWard/Milestone-Project-Two/blob/master/assets/Game%20Start%20Page.png?raw=true)
- Start of the game [wireframe](https://github.com/ShaunWard/Milestone-Project-Two/blob/master/assets/Game%20-%20your%20turn.png?raw=true)
- Opponent card reveal [wireframe](https://github.com/ShaunWard/Milestone-Project-Two/blob/master/assets/Game%20-%20computer%20reveal.png?raw=true)
- Next turn [wireframe](https://github.com/ShaunWard/Milestone-Project-Two/blob/master/assets/Next%20turn.png?raw=true)

## UX

![Start screen image](https://github.com/ShaunWard/Milestone-Project-Two/blob/master/assets/Start-screen.png?raw=true)

The start screen was made to explain the game in a simple way to the player, and then simply offer a start button so they can begin the game. After this the start screen disappears and the cards are loaded onto the game screen, ready for the player to start.

![In game screen](https://github.com/ShaunWard/Milestone-Project-Two/blob/master/assets/In_game.png?raw=true)

The in game screen shows the payer two cards on top of a background. The card on the left offers the player the name of the NBA star they have drawn, 3 stats about the star to choose from, the current score of the player and an end game button should the player want to finish the game prematurly. The card on the right is the opponents card, this has the same basic layout but the 3 stats are covered so the player cannot see them, however the NBA star image and name are shown to help the player determine the best stat to choose to beat the opponent.

## User Stories

- As a player, I want to play a game that teaches me about a sport I like.
- As a player, I want to use my knowledge of my favourite sport to be better at a game.


Game achieves this by:


## Features

- Clickable buttons used to select a stat
- 

## Testing

## Issues and Bugs

I originally wanted to use flip boxes for the game, the opponents card flipping over to be reviled to the player would have looked great. When I tried to impliment this the flipboxes would work perfectly on the desktop screen, but as soon as I tested the site on a mobile it was clear that they needed some work.
The problem was that because I was getting to code for the flipbox from W3schools, they had given the boxes a height property to ensure the front and the back of the card were the same height. I could use this property to make sure that the box was big enough to fit all of my info, but then the boxes wouldn't scale with the bootstrap columns that I have used for the layout of the website.

During the testing while coding the game, I found that if the player was quick enough they could select more than one option on the card in s single turn. This would result in the score changing faster than 1 point per round. After trying this several times I found that this was something that was possible on ocassions where the cards did not load quite as quickly as normal. So the chances of a player doing was was small enough that I didn't code this out of the game, this was down to not finding a straight forward solution, quick or simple solution.

## Scalability

One of the things I would add in future would be to allow the player to change the winning score before the game begins. This could be achieved by having an input box that would take a valve from the player and set it in the code as the winning score. This could also be done with radio button options.

Another change I would make to make the game run more smoothly would be to get the data and save it locally using local storage. This way when the game is getting a random NBA player to display on the cards it can quickly get it from local storage rather than an XML request every turn.

## Technologies

### Languages

- HTML
- CSS
- Javascript

### Frameworks used

- Bootstrap

### Tools Used

- Am I Responsive for testing as above
- wireframes.cc: was used to create wireframes
- fontawesome: icons were used for social media links
- Google Maps: embedded into homepage to provide location.
- Google Fonts
- Gitpod: used to create the website.
- JPEG mini: was used to compress images
- Pingdom used to test speed of website
- Google was used to find unlicensed images for use on the site

## Acknowledgements

I'd like to acknowledge my mentor, Felipe Souza Alarcon, for his support throughout this project.

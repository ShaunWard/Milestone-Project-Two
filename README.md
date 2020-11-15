# Milestone-Project-Two - Higher or Lower!

## Description

WORK IN PROGRESS

Higher or Lower is a card game based on a popular physical card game by a different name.

The aim of the game is to pick the statistic on your card that you think will be higher than your opponents. If you pick correctly and your stat is higher you win a point, if the opponents stat is higher they win a point. If the stats are tied we give the benefit to you and award you the point! The first score to 5 wins!

The website consists of a start of game overlay which introduces the player to the game by explaining the rules, and also providing a start button when the player is ready to play.

At the start of the game information is presented onto two cards, both cards with a picture and name of an NBA player. On the players card there are 3 stats, on the opponents card these space are blank. Below this on both cards is the relevant cards score. The only on the player card is a button to end the game without it coming to an end due to score.

At the end of the game the game end screen is presented, it will state who won the game and present a restart button to the player.

## Links

### Deployment

The game has been deployed using github pages, and is available to view [here](https://shaunward.github.io/Milestone-Project-Two/)

### Wireframes

- Start of game overlay [wireframe](https://github.com/ShaunWard/Milestone-Project-Two/blob/master/assets/Game%20Start%20Page.png?raw=true)
- Start of the game [wireframe](https://github.com/ShaunWard/Milestone-Project-Two/blob/master/assets/Game%20-%20your%20turn.png?raw=true)
- Opponent card reveal [wireframe](https://github.com/ShaunWard/Milestone-Project-Two/blob/master/assets/Game%20-%20computer%20reveal.png?raw=true)
- Next turn [wireframe](https://github.com/ShaunWard/Milestone-Project-Two/blob/master/assets/Next%20turn.png?raw=true)

## UX

![Start screen image](https://github.com/ShaunWard/Milestone-Project-Two/blob/master/assets/Start-screen.png?raw=true)

The start screen was made to explain the game in a simple way to the player, and then simply offer a start button so they can begin the game. After this the start screen disappears and the cards are loaded onto the game screen, ready for the player to start.

![In game screen](https://github.com/ShaunWard/Milestone-Project-Two/blob/master/assets/In_game.png?raw=true)

The in game screen shows the payer two cards on top of a background. The card on the left offers the player the name of the NBA star they have drawn, 3 stats about the star to choose from, the current score of the player and an end game button should the player want to finish the game prematurely. The card on the right is the opponents card, this has the same basic layout without the end game button, and the 3 stats are covered so the player cannot see them, however the NBA star image and name are shown to help the player determine the best stat to choose to beat the opponent.

## User Stories

- As a player, I want to play a game that teaches me about a sport I like.
- As a player, I want to use my knowledge of my favourite sport to be better at a game.
- As a player, I want to play a game that has variety and doesn't use the same cards too often.
- As a player, I want a game that I can play without knowing the subject matter.
- As a player, I want to be able to play the game on any screen size so I can play it on the go.
- As a player, I want to be able to end the game before a winner has been declared in case I need to move away from the screen.


Game achieves this by:

- Providing information on NBA stars such as weight, height and years in the league to learn about the players. The game gets random NBA players from the API, there are 510 players to learn about.
- The headshot and name of the opponents player is provided so if you know that players stats you will know how to beat them.
- There is a pool of 510 NBA players that can randomly be pulled into the game, so the same players shouldn't turn up often, and the same match ups less often.
- It is easy to play the game with no knowledge of basketball or the NBA. Once a player has played the game a few times they will start to gather what numbers tend to be on the higher end for that particular stat.
- The game is responsive and can be played on any screen size including on your desktop computer screen or mobile phone.
- The game has an End game button provided 

## Features

- Clickable buttons used to select a stat.
- End game button, used to end the game before either score reaches 5.
- Responsive for all screen sizes

![Responsive start](https://github.com/ShaunWard/Milestone-Project-Two/blob/master/assets/responsive_start.png?raw=true)
![Responsive in game](https://github.com/ShaunWard/Milestone-Project-Two/blob/master/assets/responsive_in_game.png?raw=true)

## Testing

- [Am I Responsive](http://ami.responsivedesign.is/) was used to test the site on various screen sizes to ensure the information could be viewed correctly
- [HTML Validator](https://validator.w3.org/) has been used to validate the HTML. The HTML did return some errors, however these errors were used purposefully to make the site work correctly, such as the align attribute being used on some of the divs.
- [CSS Validator](https://jigsaw.w3.org/css-validator/) has been used to validate the CSS and the errors that came back were either purposefully used, or they were items used by bootstrap.
- [Pingdom](https://tools.pingdom.com/#5ca554057c800000) used to test the speed of the website and improve loading times. The site came back with a grade of A 93, which is acceptable.

## Issues and Bugs

I originally wanted to use flip boxes for the game, the opponents card flipping over to be revealed to the player would have looked great. When I tried to implement this the flipboxes would work perfectly on the desktop screen, but as soon as I tested the site on a mobile it was clear that they needed some work.
The problem was that because I was getting to code for the flipbox from W3schools, they had given the boxes a height property to ensure the front and the back of the card were the same height. I could use this property to make sure that the box was big enough to fit all of my info, but then the boxes wouldn't scale with the bootstrap columns that I have used for the layout of the website.

During the testing while coding the game, I found that if the player was quick enough they could select more than one option on the card in s single turn. This would result in the score changing faster than 1 point per round. After trying this several times I found that this was something that was possible on occasions where the cards did not load quite as quickly as normal. So the chances of a player doing was was small enough that I didn't code this out of the game, this was down to not finding a straight forward, quick or simple solution.

## Scalability

One of the things I would add in future would be to allow the player to change the winning score before the game begins. This could be achieved by having an input box that would take a valve from the player and set it in the code as the winning score. This could also be done with radio button options.

Another change I would make to make the game run more smoothly would be to get the data and save it locally using local storage. This way when the game is getting a random NBA player to display on the cards it can quickly get it from local storage rather than an XML request every turn.

A timer could be added to the game to keep track of how long the player has taken to beat the computer to 5 points. This could then be used as a mechanism for the player to try and beat themselves next time by beating the computer either by a bigger points margin or a lower time.
In addition to this a score page or modal could be added where scores are recorded on a high score page. This would be able to take advantage of recording the time taken to win the game and the score when the game was won, this would enable the player to look at the modal and try to beat their own record.

## Technologies

### Languages

- HTML
- CSS
- Javascript

### Frameworks used

- Bootstrap

### Tools Used

- [sportsdata](https://sportsdata.io/) is the API used to pull NBA players into the game.
- [Am I Responsive](http://ami.responsivedesign.is/) for testing the responsiveness of the website.
- [balsamiq](https://balsamiq.com/) was used to create wireframes
- [Visual Studio Code](https://code.visualstudio.com/) was used to create the website.
- Google was used to find unlicensed images for use on the site.

## Acknowledgements

I'd like to acknowledge my mentor, Felipe Souza Alarcon, for his support throughout this project.

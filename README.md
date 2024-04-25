![mockup](assets/images/readme/mockup.png)

# Rock, Paper, Scissors game with some style

This is a stylish and fully responsive rock, paper, scissors game that you can play on every device we have nowadays.
With it's colourful design it's catches your eyes the first time you spot it. It is easily understandable, and with it's interactive handles, makes the game fun.

Try it yourself here: [RPS game](https://is2dann.github.io/RPS/)

## User stories
|Story No.|Story|
| ----------- | ----------- |
|1.| As a user, <br> I want to do a quick competitive game when I have a couple of minutes. <br><br> I know I did a good job, when somebody with the same idea, look up the web and finds my stylish rock, paper, scissors game and have a go with it. |
|2.| As a user, <br> Sometime I would like to test my intuition. <br><br> I know I am done when I can test my intuition against a computer. |
|3.| As a user, <br> I would play with a game, that is colourful and stylish with interactive fun parts. <br><br> I know I did a good job, when my game has colours and style, with some moving parts and fun quotes or messages. |
|4.| As a user, <br> I would like to play with my game on different platforms. <br><br> I know I did a good job, when my game is responsive and can be played on multiple devices.|

***

## Wireframes
Below are the design that were used to start building the site.

| Desktop Landing page |
| ------- |
| ![wireframe-desktop](assets/images/readme/wireframe-desktop.png) |

| Mobile and tablet Landing page |
| ------- |
| ![wireframe-phone-tablet](assets/images/readme/wireframe-phone-tablet.png) |

***

## First view

| Landing page : Desktop |
| ------- |
| ![landing-desktop](assets/images/readme/landing-desktop.png) |

| Landing page : Mobile |
| ------- |
| ![landing-phone](assets/images/readme/landing-phone.png) |

| Landing page : Tablet |
| ------- |
| ![landing-tablet](assets/images/readme/landing-tablet.png) |

***

## Features

-__Typography and Colour scheme__

As my main plan was to make this game stylish. <br>
I used Papyrus font as that is one of my favourite, because stylish but still readable and works on every platform. <br>
As the colours, my choice was blue as main colour and tan(#e4dcd1) and black added as a hue in the gradient background.
Also green, red, and purple indicators on winning, losing or draw scenarios.

### Existing features

-__Header__
* The game does have a header containing the name or title of the game.
    - Because the name is a tad long, I changed it to it's abbreviation on smaller screens with media queries in css.
    - Also, on smaller screens the scoreboard is tilted and flows in to the header area.

| Header : Desktop | Header : Tablet/Phone |
| ------- | ------- |
| ![header-desktop](assets/images/readme/header-desktop.png) | ![header-tablet](/assets/images/readme/header-scores-tablet.PNG) |

-__Content__
* Straight away after opening the page, the scoreboard is visible below the header with 2 nametags, one for the gamer (YOU) and one for the computer (NPC - as non-playable-character)
    - The scoreboard tilts and crawls up a little bit into the header area on smaller screens.
    - Javascript been used to update the scores on win.
* Text below the scoreboard is initially set to the famous yell, when play this game in real life.
    - Javascript been used to change this text later automatically when there is a result of a game.
        - Win: e.g: Rock tops scissors. You are a winner! and a bright green glow appears around the text.
        - Lose: e.g: Scissors loses to Rock. You are a loser! and a bright red glow appears around the text.
        - Draw: e.g: Paper equals to Paper. It's a draw! and a bright purple glow appears around the text.

| Scoreboard & Message |
| ------- |
| ![score-message-desktop](/assets/images/readme/score-message-desktop.png) |

* Below this text 3 items can be found. 3 image of hands doing gestures of fist(rock), open palm(paper), two straight finger(scissors).<br> These are our playing buttons.
    - For interactivity style these buttons spin around and scale up when hover over with the cursor on a desktop or been tapped on a phone or tablet.
    - These icons are moving to 2 or 3 rows depends on the screen size.

| Icons : Desktop | Icons : Tablet |
| ------- | ------- |
| ![icons-desktop](/assets/images/readme/icons-desktop.png) | ![icons-tablet](/assets/images/readme/icons-tablet.PNG) |

* Small text below the buttons are encourage us to "Choose a gesture" to start the game.
    - This text is not displaying on smaller screens.

-__Footer__
* There is no footer. A little section below the game on the left shows relevant data.

***

## Features left to implement

-__Future__
* The results message could be improved and extended with more relevant messages 
    - like: 
        - Scissors cuts paper. You are a winner.
        - Paper covers Rock.
* The whole game could be expanded to Rock, Paper, Scissors, Lizard, Spock game from the series Big Bang Theory. Or even further...
* Could make the game fully online so we could play with friends.

***

## Technologies used

### Languages used
* HTML
* CSS
* JavaScript

### Programs, Websites, Frameworks and Libraries used
* Visual Studio Code - Used as a developer platform
* [Github](www.github.com) - Used to save project
* Balsamiq - Used for making wireframes designs
* [Favicon.io](www.favicon.io/favicon-generator) - Used to create favicon

***

## Deployment & Local Development

### Deployment

The site is deployed using GitHub Pages - [Is2Dann-RPS](https://is2dann.github.io/RPS/).

To Deploy the site using GitHub Pages:

1. Login (or signup) to Github.
2. Open my repository.
3. Click the settings button.
4. Select pages in the left hand navigation menu.
5. From the source dropdown select main branch and press save.
6. The site has now been deployed, please note that this process may take a few minutes before the site goes live.

## Testing

-__Manual testing__
* Can be found here: [TESTING.md](TESTING.md)

### HTML Validator

- Main page: [w3-report](https://validator.w3.org/nu/?doc=https%3A%2F%2Fis2dann.github.io%2FRPS%2F)

### CSS Validator

- [Jigsaw report](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fis2dann.github.io%2FRPS%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

### Javascript
* JSHint and Esprima were used to check Javascript issues

| JSHint report | Esprima report |
| ------- | ------- |
| ![jshint](/assets/images/readme/jshint.png) | ![esprima](/assets/images/readme/esprima.png) |

### Lighthouse

| Main page |
| ------- |
| ![lighthouse](/assets/images/readme/lighthouse.png) |

## Credits

### Used code

For the code writing I was following the learning material from CodeInstitute and tried to implement the Love Math walkthrough.
When I needed help I was browsing [stackoverflow](www.stackoverflow.com), [w3schools](www.w3schools.com), the Percipio website I got from Learning People (helped a lot) [percipio](www.learningpeople.percipio.com), [MDN Web Docs](www.developer.mozilla.org/en-US/), [Shecodes](www.shecodes.io) and google searches.
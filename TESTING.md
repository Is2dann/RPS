# Manual Testing

Testing devices:
*  Win 11 - Dell 31.5inch monitor
    * Firefox
    * Chrome
*  Iphone 12 Pro Max
*  Ipad Air


## Header

| Feature | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- |
| Main title responsivity | On devices with screen less than 820px | Text is 80% the original size | Pass |
| Main title responsivity | On devices with screen less than 768px | Text turns into abbreviated text | Pass |
| Scoreboard intruding header | On devices with screen less than 768px | Scoreboard intruding into into header area | Pass |

## Scoreboard

| Feature | Testing Performed | Result | Pass/Fail |
| Scoreboard update | Played the game | When win: Gamer score updated by 1. When lose opponent score updated by 1. When draw: no score are updated. | Pass |

## Result message

| Feature | Testing Performed | Result | Pass/Fail |
| Message updates after each round | Played the game | Message updated according to the scenario | Pass |
| Indicator glow around message | Played the game | Indicator glow activated: Green colour if win, Red colour if lose and Purple colour if draw. | Pass |

## Icons/Button (Rock, Paper, Scissors)

| Feature | Testing Performed | Result | Pass/Fail |
| On desktop: spin and scale up on hover | Hovered the mouse over icon | All spinned and scaled up | Pass |
| On mobile or tablet: spin and scale up on touch | Touched the buttons | All spinned and scaled up on touch | Pass |
| Choose and play when clicked on | Clicked on each | All played the relevant gesture | Pass |

## Action text

| Feature | Testing Performed | Result | Pass/Fail |
| Text responsivity | On devices with screen less than 768px | Text is not displaying | Pass |
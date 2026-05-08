let points = 3
let secret = Math.randomRange(1, 6)
let guess = game.askForNumber("Pick a number 1 to 6:")
if (guess == secret) {
    game.splash("You got it right!")
} else {
    game.splash("Wrong! The number was " + secret)
}

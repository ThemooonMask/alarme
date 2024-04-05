input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    music.play(music.stringPlayable("A A G F A C5 C5 B ", 120), music.PlaybackMode.UntilDone)
    basic.clearScreen()
})
basic.forever(function () {
	
})

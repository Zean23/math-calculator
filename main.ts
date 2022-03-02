input.onButtonPressed(Button.A, function () {
    A += 1
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(0)
    basic.showString("+")
    ADD = A + B
    basic.showString("=")
    basic.pause(300)
    basic.clearScreen()
    basic.showNumber(ADD)
})
input.onButtonPressed(Button.B, function () {
    B = 1
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(A)
    basic.showString("-")
    basic.showNumber(B)
    SUBTRACT = A - B
    basic.showString("=")
    basic.pause(300)
    basic.clearScreen()
    basic.showNumber(SUBTRACT)
})
let SUBTRACT = 0
let B = 0
let ADD = 0
let A = 0
basic.showLeds(`
    # . . # .
    # . # . .
    # # . . .
    # . # . .
    # . . # .
    `)
basic.clearScreen()
basic.forever(function () {
	
})

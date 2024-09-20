basic.forever(function () {
    basic.showLeds(`
        # # . # #
        # # # # #
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.pause(10000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(10000)
})

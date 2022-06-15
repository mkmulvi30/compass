let degrees = 0
basic.forever(function () {
    degrees = input.compassHeading()
    if (degrees < 45) {
        basic.showString("N")
        basic.showArrow(ArrowNames.North)
    } else if (degrees < 135) {
        basic.showString("W")
        basic.showArrow(ArrowNames.West)
    } else if (degrees < 225) {
        basic.showString("S")
        basic.showArrow(ArrowNames.South)
    } else if (degrees < 315) {
        basic.showString("E")
        basic.showArrow(ArrowNames.East)
    } else {
        basic.showString("N")
        basic.showArrow(ArrowNames.North)
    }
})

input.onButtonPressed(Button.A, function () {
    for (let x = 0; x <= 4; x++) {
        led.toggle(x, x)
        basic.pause(200)
    }
})

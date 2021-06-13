input.onButtonPressed(Button.A, function () {
	
})
function BullsEye () {
    colorbit_51bit.drawColorBit(2, 2, colorbit.colors(BitColors.Green))
    basic.pause(100)
    colorbit_51bit.clear()
}
let colorbit_51bit: colorbit.Strip = null
colorbit_51bit = colorbit.initColorBit(DigitalPin.P1, BitColorMode.RGB)
colorbit_51bit.clear()
colorbit_51bit.showColorIcon(ColorIcon.ChristmasTree, colorbit.colors(BitColors.Red))
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        BullsEye()
    }
})

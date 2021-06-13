function Outer () {
    colorbit_51bit.clear()
    for (let Count1 = 0; Count1 <= 4; Count1++) {
        colorbit_51bit.drawColorBit(0, Count1, colorbit.colors(BitColors.Red))
        colorbit_51bit.drawColorBit(Count1, 0, colorbit.colors(BitColors.Red))
        colorbit_51bit.drawColorBit(Count1, 4, colorbit.colors(BitColors.Red))
        colorbit_51bit.drawColorBit(4, Count1, colorbit.colors(BitColors.Red))
    }
}
input.onButtonPressed(Button.A, function () {
    Outer()
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
	
})

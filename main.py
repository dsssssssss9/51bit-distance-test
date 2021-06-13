def Outer():
    colorbit_51bit.clear()
    for Count1 in range(5):
        colorbit_51bit.draw_color_bit(0, Count1, colorbit.colors(BitColors.RED))
        colorbit_51bit.draw_color_bit(Count1, 0, colorbit.colors(BitColors.RED))
        colorbit_51bit.draw_color_bit(Count1, 4, colorbit.colors(BitColors.RED))
        colorbit_51bit.draw_color_bit(4, Count1, colorbit.colors(BitColors.RED))

def on_button_pressed_a():
    Outer()
input.on_button_pressed(Button.A, on_button_pressed_a)

def BullsEye():
    colorbit_51bit.draw_color_bit(2, 2, colorbit.colors(BitColors.GREEN))
    basic.pause(100)
    colorbit_51bit.clear()

def BullBed():
    colorbit_51bit.clear()
    for Count12 in range(5):
        colorbit_51bit.draw_color_bit(0, Count12, colorbit.colors(BitColors.RED))
        colorbit_51bit.draw_color_bit(Count12, 0, colorbit.colors(BitColors.RED))
        colorbit_51bit.draw_color_bit(Count12, 4, colorbit.colors(BitColors.RED))
        colorbit_51bit.draw_color_bit(4, Count12, colorbit.colors(BitColors.RED))
colorbit_51bit: colorbit.Strip = None
colorbit_51bit = colorbit.init_color_bit(DigitalPin.P1, BitColorMode.RGB)
colorbit_51bit.clear()
colorbit_51bit.show_color_icon(ColorIcon.CHRISTMAS_TREE, colorbit.colors(BitColors.RED))

def on_forever():
    pass
basic.forever(on_forever)

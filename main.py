def on_button_pressed_a():
    def on_forever():
        soucet=0
        if soucet==0:
            prvniradek.show_image(0)
        basic.pause(3000)
        for i in range(4):
         soucet+=1
         if soucet==1:
                druhy.show_image(0)
         if soucet==2:
             treti.show_image(0)    
         if soucet==3:
             ctvrty.show_image(0)     
         if soucet==4:
             paty.show_image(0)
         basic.pause(3000)                 
    forever(on_forever)
input.on_button_pressed(Button.A, on_button_pressed_a)


prvniradek = images.create_image("""
#####
. . . . .
. . . . .
. . . . .
. . . . .
""")
druhy = images.create_image("""
. . . . .
#####
. . . . .
. . . . .
. . . . .
""")
treti = images.create_image("""
. . . . .
. . . . .
#####
. . . . .
. . . . .
""")
ctvrty = images.create_image("""
. . . . .
. . . . .
. . . . .
#####
. . . . .
""")
paty = images.create_image("""
. . . . .
. . . . .
. . . . .
. . . . .
#####
""")

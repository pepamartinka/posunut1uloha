input.onButtonPressed(Button.A, function on_button_pressed_a() {
    forever(function on_forever() {
        let soucet = 0
        if (soucet == 0) {
            prvniradek.showImage(0)
        }
        
        basic.pause(3000)
        for (let i = 0; i < 4; i++) {
            soucet += 1
            if (soucet == 1) {
                druhy.showImage(0)
            }
            
            if (soucet == 2) {
                treti.showImage(0)
            }
            
            if (soucet == 3) {
                ctvrty.showImage(0)
            }
            
            if (soucet == 4) {
                paty.showImage(0)
            }
            
            basic.pause(3000)
        }
    })
})
let prvniradek = images.createImage(`
#####
. . . . .
. . . . .
. . . . .
. . . . .
`)
let druhy = images.createImage(`
. . . . .
#####
. . . . .
. . . . .
. . . . .
`)
let treti = images.createImage(`
. . . . .
. . . . .
#####
. . . . .
. . . . .
`)
let ctvrty = images.createImage(`
. . . . .
. . . . .
. . . . .
#####
. . . . .
`)
let paty = images.createImage(`
. . . . .
. . . . .
. . . . .
. . . . .
#####
`)

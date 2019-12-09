sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    for (let index = 0; index < 4; index++) {
        otherSprite.setPosition(Math.randomRange(32, 380), Math.randomRange(100, 380))
    }
    info.startCountdown(999)
})
let mySprite2: Sprite = null
scene.setTileMap(img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 4 
4 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 4 
4 9 9 9 9 9 9 9 9 a 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 4 
4 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 a 9 9 9 9 a 9 9 9 4 
4 9 9 9 9 9 9 9 9 9 9 9 9 9 a 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 4 
4 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 4 
4 9 9 a 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 4 
4 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 4 
4 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 a 9 9 9 9 9 9 4 
4 9 9 9 9 9 9 9 9 9 9 9 9 9 a 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 4 
4 9 9 9 9 9 9 9 a 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 4 
4 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 a 9 9 9 9 9 9 9 9 9 4 
4 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 4 
4 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 a 9 9 9 4 
4 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 4 
4 9 9 9 a 9 9 9 9 9 9 9 9 9 9 9 9 9 a 9 9 9 9 9 9 9 9 9 9 9 9 4 
4 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 4 
4 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 4 
4 9 9 9 9 9 9 9 9 9 9 9 9 a 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 4 
4 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 4 
4 9 9 9 9 9 9 9 a 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 a 9 9 9 9 4 
4 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 a 9 9 9 9 9 9 9 9 9 4 
4 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 4 
4 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 4 
4 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 4 
4 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 a 9 9 9 9 9 9 9 9 9 9 9 9 9 4 
4 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 4 
4 9 9 9 9 9 9 9 a 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 a 9 9 9 4 
4 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 4 
4 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`)
// when turned player cant move to the color when
// turned on
scene.setTile(4, img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`, true)
scene.setTile(9, img`
7 e 7 e 7 7 7 7 7 7 7 e 7 e 7 e 7 7 e e e e e 7 e e e 7 7 e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e 7 e e 7 7 7 7 e e e e e e e e e e e 7 7 e e e 7 7 e e e e e 
e 7 7 7 7 7 7 7 e 7 7 7 7 7 e 7 7 7 7 7 7 e e e e e 7 7 e e e e 
e e 7 7 7 7 7 7 7 7 7 7 7 7 7 e e e e e e e e e e e e e 7 e e e 
e 7 7 e 7 e 7 7 7 e e e e e e e e e 7 e e e 7 7 7 7 7 7 7 e e e 
7 7 e e 7 e e e e e e e e 7 7 7 7 7 7 7 7 7 e e 7 7 e e e e e e 
7 7 e e 7 7 e e e 7 7 e e 7 e e e e e e 7 7 7 7 7 7 e e e e e e 
7 e 7 e 7 7 7 e e e e e e 7 e e e e e 7 e e e e 7 7 7 e e e e e 
7 e 7 e e 7 e e 7 7 e 7 7 7 7 7 7 7 7 7 7 7 7 e e 7 7 7 e e e e 
e 7 7 7 e 7 e 7 e e 7 e e 7 7 e e 7 7 7 7 e e e e 7 7 7 7 e e 7 
e e 7 e e 7 e e 7 7 e 7 e 7 7 7 7 e 7 e e 7 e e 7 7 e e e 7 7 e 
7 e 7 7 e 7 e 7 e e e 7 e 7 e e e e e e e e 7 7 7 e e e e 7 7 e 
e 7 7 7 7 e 7 e e e e 7 7 7 e e e e e e 7 e 7 e e e e e e e 7 7 
e e e 7 7 e e 7 e e e 7 7 7 e 7 e e e 7 7 e e e e 7 e e e e 7 e 
e e e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e e 7 7 7 7 e e 7 e e e e e e 
e 7 7 e e e 7 e e 7 7 7 7 7 7 e 7 7 7 7 7 7 e 7 7 7 7 7 e e e e 
e 7 7 e 7 e 7 e 7 e 7 7 7 7 e e e e 7 7 e e 7 7 e e 7 7 7 e e 7 
e e 7 7 7 e e e e e 7 7 7 7 e e 7 7 7 7 7 7 e 7 e e 7 e 7 e e 7 
e e e 7 7 e e 7 e 7 7 e e 7 7 7 7 7 e 7 e e 7 e e e e 7 7 e e e 
e e 7 7 7 e 7 7 e 7 7 7 e e 7 7 7 e e e 7 7 7 e e e e e 7 7 e e 
e e 7 e 7 7 7 7 7 7 7 e 7 e e 7 7 7 7 7 e 7 e e 7 7 e e 7 7 e e 
e 7 7 7 7 e 7 e e 7 7 7 7 7 e e 7 7 e 7 7 7 7 7 e e e e e 7 7 e 
e 7 e 7 e e e e e 7 e 7 e 7 7 7 7 e 7 7 7 7 7 7 7 7 7 7 7 7 7 e 
e 7 e 7 e e e e 7 7 e e 7 7 7 7 e 7 e e e 7 7 7 7 e e e 7 e 7 e 
e e 7 7 e 7 e e e 7 7 e e e 7 e 7 7 e e e e e e 7 e e e 7 e e e 
e e e e 7 7 7 7 e 7 e e e e 7 7 e e 7 7 e e e 7 7 e e e 7 e 7 e 
e 7 7 e 7 7 e e e 7 e e e e e 7 7 e e e 7 7 7 7 7 e e e e e 7 e 
7 e e e 7 7 7 e e 7 e e e e e e 7 7 7 e e e e 7 7 e e e e e 7 e 
e e e 7 e e e e e e e e e e e e e e e 7 7 7 7 7 7 7 7 e e e e e 
e 7 e e e e 7 e 7 7 7 7 7 e e 7 e e e e e e e e e e e e e e e e 
e e 7 7 7 7 e e e e e 7 e 7 7 e e e e e e e e e e e e e e e e e 
`, false)
scene.setTile(10, img`
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
`, true)
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 1 1 1 1 1 1 1 . . . 
. . . . 1 1 1 1 1 1 1 1 1 1 1 . 
. . . 1 1 1 1 1 1 1 1 1 1 1 1 1 
. . . 1 1 1 1 1 1 1 1 1 1 1 1 1 
. . . 1 1 1 1 1 1 1 1 1 1 1 1 1 
. . . f 1 1 1 1 1 1 1 1 1 1 1 f 
. . . 1 1 1 1 1 1 1 1 1 1 1 1 1 
. . . 1 1 f f f f f f f f f f 1 
. . . 1 1 1 1 f f f f f f f f 1 
. . . 1 1 1 1 f f 2 2 2 2 2 f 1 
. . . 1 1 1 1 1 f 2 2 2 2 f 1 1 
. . . 1 1 1 1 1 1 f f f f 1 1 1 
. . . 1 1 1 1 1 1 1 1 1 1 1 1 1 
. . . 1 1 1 1 1 1 1 1 1 1 1 1 . 
. . . . 1 1 1 1 1 1 1 1 1 1 1 . 
`, SpriteKind.Player)
// controls sprite
controller.moveSprite(mySprite, 125, 125)
// makes the camera follow sprite through out sprite
scene.cameraFollowSprite(mySprite)
for (let index = 0; index < 10; index++) {
    mySprite2 = sprites.create(img`
. . . . . 2 2 2 2 2 2 2 . . . . 
. . . . 2 2 2 2 2 2 2 2 2 . . . 
. . . 2 2 2 2 f f f 2 2 2 2 . . 
. . 2 2 2 2 f 1 1 1 f 2 2 2 2 . 
. . . 2 2 f 1 1 f 1 1 f 2 2 . . 
. . . 2 2 2 f 1 1 1 f 2 2 2 . . 
. . . . 2 2 2 f f f 2 2 2 . . . 
. . . . 2 2 2 2 2 2 2 2 2 . . . 
. . . . 2 2 2 2 2 2 2 2 2 . . . 
. . . . . 2 2 2 2 2 2 2 . . . . 
. . . . . . 2 2 2 2 2 . . . . . 
. . . . . . . 2 2 2 . . . . . . 
. . . . . . . 2 2 2 . . . . . . 
. . . . . . . . 2 . . . . . . . 
. . . . . . . . 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
    mySprite2.setPosition(Math.randomRange(32, 380), Math.randomRange(100, 380))
    mySprite2.z = 1
}
info.startCountdown(999)

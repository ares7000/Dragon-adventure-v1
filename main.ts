controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(assets.image`fireball`, mySprite, 150, 0)
})
info.onCountdownEnd(function () {
    game.over(true, effects.confetti)
})
info.onLifeZero(function () {
    game.over(false, effects.slash)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.fire, 100)
    music.magicWand.play()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let projectile: Sprite = null
let projectile2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`dragon`, SpriteKind.Player)
scene.setBackgroundImage(assets.image`night sky`)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
info.startCountdown(30)
info.setLife(4)
info.setScore(0)
animation.runImageAnimation(
mySprite,
assets.animation`breathingfire`,
200,
true
)
forever(function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . f . . 
        . . . . . . . f f f f f f . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f 1 f f f 1 f . . . . . 
        . . . . f f f f f f f f f . . . 
        . . 2 2 f f 8 8 8 8 8 8 f f f . 
        . . 2 2 f 8 8 8 8 8 8 8 f f f . 
        . . . . f f f f f f f f f . . . 
        . . . . . . f . . . f . . . . . 
        . . . . . . f . . . f . . . . . 
        . . . . . f . f . f . f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, -90, 0)
    projectile.y = randint(10, 115)
    projectile.setKind(SpriteKind.Enemy)
    animation.runImageAnimation(
    projectile,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 9 . 
        . . . . . . f f f f f f f f . . 
        . . . f f f f f f f f f . . . . 
        . . . f f 1 f 1 f f f f . . . . 
        . . . f f f f f f f f f . . . . 
        . 2 2 f f f f f f f f f f f . . 
        . 2 2 f f 8 8 8 8 8 8 f f f f f 
        . . . f 9 8 8 8 8 8 8 f f f f f 
        . . . f f f f f f f 9 f f f f f 
        . . . f f f f f f f f f f f . . 
        . . . . . . f . . . . f . . . . 
        . . . . . . f . . . . f . . . . 
        . . . . . f . f . . f . f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 9 . 
        . . . . . . f f f f f f f f . . 
        . . . f f f f f f f f f . . . . 
        . . . f f 1 f 1 f f f f . . . . 
        . . . f f f f f f f f f . . . . 
        . 2 2 f f f f f f f f f f f . . 
        . 2 2 f f 8 8 8 8 8 8 f f f f f 
        . . . f 9 8 8 8 8 8 8 f f f f f 
        . . . f f f f f f f 9 f f f f f 
        . . . f f f f f f f f f f f . . 
        . . . . . . . f . . . f . . . . 
        . . . . . . . f f . . f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 9 9 . . . . . 
        . . . . f f f . . f . . . . . . 
        . . . 2 f f f f f f f f f f f . 
        . . 2 f f f 1 8 1 8 8 8 f f f . 
        . . 2 f f f 8 8 8 8 8 8 f f f . 
        . . . 2 f f f f f f f f f f f . 
        . . . . f f f f f f f f f f f . 
        . . . . . . . f f . f f f f f . 
        . . . . . . . f f . f f . . . . 
        . . . . . . . . . f . . f . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 9 9 . . . . . 
        . . . . f f f . . f . . . . . . 
        . . . 2 f f f f f f f f f f f . 
        . . 2 f f f 1 8 1 8 8 8 f f f . 
        . . 2 f f f 8 8 8 8 8 8 f f f . 
        . . . 2 f f f f f f f f f f f . 
        . . . . f f f f f f f f f f f . 
        . . . . . . . f f . f f f f f . 
        . . . . . . . f f . f f . . . . 
        . . . . . . . . . f . . f . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 9 . 
        . . . . . . f f f f f f f f . . 
        . . . f f f f f f f f f . . . . 
        . . . f f 1 f 1 f f f f . . . . 
        . . . f f f f f f f f f . . . . 
        . 2 2 f f f f f f f f f f f . . 
        . 2 2 f f 8 8 8 8 8 8 f f f f f 
        . . . f 9 8 8 8 8 8 8 f f f f f 
        . . . f f f f f f f 9 f f f f f 
        . . . f f f f f f f f f f f . . 
        . . . . . . f . . . . f . . . . 
        . . . . . . f . . . . f . . . . 
        . . . . . f . f . . f . f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
    pause(1000)
})

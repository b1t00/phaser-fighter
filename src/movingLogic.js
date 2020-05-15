// TODO: funktion ist noch nicht fertig.. nur der angang mal
// MERKE: Animationen und ihre Animationen müssen für verschiedene Fighter angepasst werden
// evtl insgesamt object für die Logic
function moveLogic(fighter) {
    if (cursors.left.isDown) {
        fighter.setVelocityX(-160);
        fighter.setFlipX(true)
        fighter.anims.play(fighter.name + 'Walk', true);
    }
    else if (cursors.right.isDown) {
        fighter.setVelocityX(160);
        fighter.setFlipX(false)
        fighter.anims.play(fighter.name + 'Walk', true);
    }
    else if (cursors.space.isDown) {
        leoFighter.anims.play('leoKick', true);
    } else {
        leoFighter.setVelocityX(0);
        leoFighter.anims.play('leoStop', true);
    }


    if (cursors.up.isDown && (leoFighter.body.onWall() || leoFighter.body.onFloor()) && !cursorDown) {
        leoFighter.setVelocityY(-200);
        cursorDown = true;
    }
    else if (cursors.up.isDown && !doubleJump && !cursorDown) {
        leoFighter.setVelocityY(-160);
        doubleJump = true;
    }

    if (cursors.up.isUp) {
        cursorDown = false;
    }
    if (leoFighter.body.onFloor()) {
        doubleJump = false;

    } else if (cursors.space.isDown) {
        leoFighter.anims.play('leoKick', true);
    } else {
        leoFighter.anims.play('leoJump');
    }
}
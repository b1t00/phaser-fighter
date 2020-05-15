let cursors;
let leoFighter;


let doubleJump = false;
let cursorDown = false;

class Level1 extends Phaser.Scene {
    constructor() {
        super({
            key: "Level1"
        });
    }
    

    preload() {

        this.load.image('bg_level1', 'assets/backgrounds/bg_level1.png');

        // * ----------------- LEVEL 1 MAP ----------------------------------- *

        this.load.image('level1-tiles', 'assets/tilesets/level1/level1-tiles.png'); // tileSet png

        this.load.tilemapTiledJSON('level1-map', 'assets/tilemaps/level1/level1-map.json'); // tilemap json

        // * ----------------- Player ---------------------------------------- *

        this.load.spritesheet('leoFighter', 'assets/fighters/leoFighter/LeoFighter.png', {
            frameWidth: 39*2,
            frameHeight: 54*2,
        });

        this.load.spritesheet('leoFighterKick', 'assets/fighters/leoFighter/LeoFighter_kick.png', {
            frameWidth: 84,
            frameHeight: 105,
        });
    }

    create() {

        // createAnims(this);
        createAnims(this);

        cursors = this.input.keyboard.createCursorKeys();

        // * ------------------- Map ------------------------------------------ *

        this.add.image(0, 0, 'bg_level1').setOrigin(0, 0);

        let map = this.make.tilemap({ key: 'level1-map' });

        let tileset = map.addTilesetImage('level1-tiles', 'level1-tiles');


        let ground = map.createDynamicLayer('ground', tileset, 0, 0);
        map.createDynamicLayer('ohnecollision', tileset, 0, 0);
        ground.setCollisionByExclusion(-1, true);

        // * ------------------ Player ----------------------------------------- *

        leoFighter = this.physics.add.sprite(400, 100, 'leoFighter');
        // leoFighter.setCollideWorldBounds(true);

        this.physics.add.collider(leoFighter, ground);
    }



    update() {

        moveLogic();
    }
}
function createAnims(scene) {
    scene.anims.create({
        key: 'leoStop',
        frames: scene.anims.generateFrameNumbers('leoFighter', {
            start: 0,
            end: 3
        }),
        frameRate: 4,
        repeat: -1,
        yoyo: true
    });

    scene.anims.create({
        key: 'leoWalk',
        frames: scene.anims.generateFrameNumbers('leoFighter', {
            start: 5,
            end: 7
        }),
        frameRate: 15,
        repeat: -1,
        yoyo: true
    });

    scene.anims.create({
        key: 'leoJump',
        frames: [{
            key: 'leoFighter',
            frame: 4
        }],
        frameRate: 1
    });

    scene.anims.create({
        key: 'leoKick',
        frames: scene.anims.generateFrameNumbers('leoFighterKick', {
            start: 0,
            end: 3 
        }),
        frameRate: 15,
        repeat: 1,
    });
}

function moveLogic(){
    if (cursors.left.isDown) {
        leoFighter.setVelocityX(-160);
        leoFighter.setFlipX(true)
        leoFighter.anims.play('leoWalk', true);
    }
    else if (cursors.right.isDown) {
        leoFighter.setVelocityX(160);
        leoFighter.setFlipX(false)
        leoFighter.anims.play('leoWalk', true);
    }
    else if(cursors.space.isDown){
        leoFighter.anims.play('leoKick',true);
    }else {
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
       
    } else if(cursors.space.isDown ){
        leoFighter.anims.play('leoKick',true);
    }else{
        leoFighter.anims.play('leoJump');
    }
}



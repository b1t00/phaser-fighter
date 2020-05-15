let cursors;
let leoFighter;

let blobFighter;


let doubleJump = false;
let cursorDown = false;

class Level1 extends Phaser.Scene {
    constructor() {
        super({
            key: "Level1"
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

       // ------------------->>>>>> FIGHTERS <<<<<<<<---------------------------------- //

        leoFighter = this.physics.add.sprite(400, 100, 'leoFighter');
        leoFighter.name = 'leoFighter';
        blobFighter = this.physics.add.sprite(600,100, 'blobFighter');


        // ** --------------------- Collider -------------------------------------- ** //
        // leoFighter.setCollideWorldBounds(true);

        this.physics.add.collider(leoFighter, ground);
        this.physics.add.collider(blobFighter, ground);
        
        this.physics.add.collider(blobFighter, leoFighter);

    }

    update() {
        blobFighter.anims.play('blobStop',true);
        moveLogic(leoFighter);
    }
}
function createAnims(scene) {
    // * ---------------------- leoFighter ---------------------------------------- *

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
        key: 'leoFighterWalk',
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
        // * ---------------------- blobFighter ---------------------------------------- *

        scene.anims.create({
            key: 'blobStop',
            frames: scene.anims.generateFrameNumbers('blobFighter', {
                start: 0,
                end: 3
            }),
            frameRate: 5,
            repeat: -1,
            yoyo: true
        });

        scene.anims.create({
            key: 'blobJump',
            frames: [{
                key: 'blobFighter',
                frame: 4
            }],
            frameRate: 1
        });

        scene.anims.create({
            key: 'blobGetHit',
            frames: scene.anims.generateFrameNumbers('blobFighter', {
                start: 0,
                end: 3
            }),
            frameRate: 5,
            repeat: -1,
            yoyo: true
        });
}






class LoadScene extends Phaser.Scene{
    constructor(){
        super({
            key: "LoadScene"
        });
    }

    preload(){


        // this.load.spritesheet('fighterLeo', 'assets/fighters/leoFighter/LeoFighter.png', {
        //     frameWidth: 39,
        //     frameHeight: 54
        // });

        // // LEVEL 1 -----------------------------------
        // this.load.image('level1-tiles', 'assets/tilesets/level1-tiles.png'); // tileSet png

        // this.load.tilemapTiledJSON('level1-map', 'assets/tilemaps/level1-map.json'); // tilemap json
        

        
    }
    create(){
        // createAnimation(this);
        this.scene.start('Level1');
    }
}

// function createAnims(scene) {

//     scene.anims.create({
//         key: 'leoStands',
//         frames: scene.anims.generateFrameNumbers('leoFighter', {
//             start: 0,
//             end: 1
//         }),
//         frameRate: 10,
//         repeat: -1
//     });
// }




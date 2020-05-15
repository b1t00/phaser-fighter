
class LoadScene extends Phaser.Scene {
    constructor() {
        super({
            key: "LoadScene"
        });
    }

    preload() {
        // ------------------->>>>>> FIGHTERS <<<<<<<<---------------------------------- //

        // * ---------------------- leoFighter ---------------------------------------- *

        this.load.spritesheet('leoFighter', 'assets/fighters/leoFighter/LeoFighter.png', {
            frameWidth: 39 * 2,
            frameHeight: 54 * 2,
        });

        this.load.spritesheet('leoFighterKick', 'assets/fighters/leoFighter/LeoFighter_kick.png', {
            frameWidth: 84,
            frameHeight: 105,
        });
        // * ---------------------- blobFighter ---------------------------------------- *

        this.load.spritesheet('blobFighter', 'assets/fighters/blobFighter/BlobFighter.png', {
            frameWidth: 68,
            frameHeight: 108,
        });
        
        // * ----------------- LEVEL 1 MAP ----------------------------------- *

        this.load.image('bg_level1', 'assets/backgrounds/bg_level1.png'); // Background png
        
        this.load.image('level1-tiles', 'assets/tilesets/level1/level1-tiles.png'); // tileSet png

        this.load.tilemapTiledJSON('level1-map', 'assets/tilemaps/level1/level1-map.json'); // tilemap json

    }
    create() {
        this.scene.start('Level1');
    }
}





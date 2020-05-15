var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 640,
    physics: {
        default: 'arcade',
        arcade: {
            tileBias: 64,
            gravity: {
                y: 300
            }
        }
    },
    render: {
        pixelArt: true,
    },
    scene: [LoadScene,Level1]
};

var game = new Phaser.Game(config);

// canvas width:        960 
// canvas height:       640

// GameWidth:           800
// GameHeight:          640

// tilesize:            64


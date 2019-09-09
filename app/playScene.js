var gameOver;
var platforms;

export default {
  key: "play",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  init: function () {
    gameOver = false;
  },

  create: function () {
    this.add.image(400, 300, "sky");
    platforms = this.physics.add.staticGroup();
    var indexX = 45;
    var indexY = 0;
    this.sound.play("sound");
    for (var i = 0; i < 5; i++) {
      platforms.create(indexX + 64, 64 + indexY, "footright");
      platforms.create(indexX + 128, 64 + indexY, "roadleft");
      platforms.create(indexX + 256, 64 + indexY, "roadleft");
      platforms.create(indexX + 384, 64 + indexY, "roadleft");
      platforms.create(indexX + 512, 64 + indexY, "roadleft");
      platforms.create(indexX + 640, 64 + indexY, "footleft");
      indexY += 128;
    }

    platforms.create(128, 64, "oil");
    platforms.create(256, 64 + 455, "car");
  },

  update: function () {
    if (gameOver) {
      this.scene.stop().run("end");
    }
  }
};

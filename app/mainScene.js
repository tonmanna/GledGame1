// import Phaser from "phaser";

export default {
  key: "boot",

  preload: function () {
    this.load.image("sky", require("../assets/background.png"));
    this.load.image("logo", require("../assets/geld.jpg"));
    this.load.image("car", require("../assets/car.png"));
    this.load.image("roadleft", require("../assets/left.png"));
    this.load.image("roadright", require("../assets/right.png"));
    this.load.image("oil", require("../assets/oil.png"));
    this.load.image("footleft", require("../assets/mapleft.png"));
    this.load.image("footright", require("../assets/mapright.png"));
    this.load.audio("sound", [require("../assets/audio/level_music.mp3")]);
  },

  create: function () {
    // this.scene.start("menu");
    this.scene.start("play");
  }
};

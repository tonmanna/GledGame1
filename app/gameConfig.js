import Phaser from "phaser";
import mainScene from "./mainScene";
import menuScene from "./menuScene";
import playScene from "./playScene";
export default {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [mainScene, menuScene, playScene]
};

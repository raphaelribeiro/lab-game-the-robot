import Phaser from "phaser";
import logoImg from "./assets/logo.png";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.atlas('robot', 'src/assets/robot.png', 'src/assets/robot.json');  
}

function create() {
  this.robot = this.add.sprite(300, 300, 'robot');
}

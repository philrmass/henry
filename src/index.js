import Phaser from 'phaser';
import logoImg from './assets/logo.png';
import sky from './assets/sky.png';
import bomb from './assets/bomb.png';
import star from './assets/star.png';
import ground from './assets/platform.png';

class MyGame extends Phaser.Scene
{
  constructor ()
  {
    super();
  }

  preload ()
  {
    this.load.image('logo', logoImg);
    this.load.image('sky', sky);
    this.load.image('bomb', bomb);
    this.load.image('star', star);
    this.load.image('ground', ground);

    this.load.image('dude',
        'assets/dude.png',
      { framewidth: 32, frameheight: 48 }
    );
  }

  create ()
  {
    
    this.add.image(400, 300, 'sky');
    this.add.image(100, 150, 'ground');
    //const logo = this.add.image(400, 150, 'logo');
    //const logo = this.add.image(400, 150, 'bomb');
    const logo = this.add.image(400, 150, 'ground');

    this.tweens.add({
      targets: logo,
      y: 450,
      duration: 2000,
      ease: "Power2",
      yoyo: true,
      loop: -1
    });
  }
}

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  scene: MyGame
};

const game = new Phaser.Game(config);

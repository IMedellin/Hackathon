import Phaser from "phaser"

class Game extends Phaser.Scene {

  create() {
    const ball = this.add.circle(400, 250, 10, 0x69982f, 1)
    this.physics.add.existing(ball)
    ball.body.setVelocity(-300, 0)
    ball.body.setBounce(1, 1)
    ball.body.setCollideWorldBounds(true, 1, 1)

    const paddleLeft = this.add.rectangle(25, 250, 30, 100, 0xffffff)
    this.physics.add.existing(paddleLeft, true)
    this.physics.add.collider(paddleLeft, ball)

    const paddleRight = this.add.rectangle(775, 250, 30, 100, 0xffffff)
    this.physics.add.existing(paddleRight, true)
    this.physics.add.collider(paddleRight, ball)
  }
}

export default Game

var xCor = 90;
var yCor = 100;
var timesToRun = 23;

var bricksGroup;

var brickImage1;
var brickImage2;
var brickImage3;
var brickImage4;
var brickImage5;

var bgImg;

var paddle, paddleImg;
var ball, ballImg;

var imgs = [];
var imageToUse;
var brickBreakSound, gameOverSound, gameWinSound;
var score = 0;

var gameState = "pre-play";

function preload() {
  bgImg = loadImage("images/bg2.jpeg")
  ballImg = loadImage("images/ball.png")
  brickImage1 = loadImage("images/blue.jpeg")
  brickImage2 = loadImage("images/green.jpeg")
  brickImage3 = loadImage("images/orange.jpeg")
  brickImage4 = loadImage("images/red.jpeg")
  brickImage5 = loadImage("images/yellow.jpeg")
  paddleImg = loadImage("images/paddle.png")

  brickBreakSound = loadSound("Sounds/brickBreak.mp3")
  gameOverSound = loadSound("Sounds/gameOver.mp3")
  gameWinSound = loadSound("Sounds/gameWin.mp3")
}

function setup() {
  createCanvas(1325, 680);

  paddle = createSprite(650, 600, 200, 25);
  paddle.addImage(paddleImg);
  paddle.setCollider("rectangle", 0, 0, 230, 35);

  ball = createSprite(650, 550, 20, 20);
  ball.addImage(ballImg);
  ball.scale = 0.02;
}

function draw() {
  background(bgImg)

  var edges = createEdgeSprites()

  ball.bounceOff(edges[2])
  ball.bounceOff(edges[0])
  ball.bounceOff(edges[1])
  ball.bounceOff(paddle)

  if (gameState == "pre-play") {
    drawBricks();
    gameState = "play"

    ball.velocityX = -5;
    ball.velocityY = -5;

    ball.x = 650;
    ball.y = 550;

    paddle.x = 650;
    paddle.y = 600;

    score = 0;
  }

  ball.bounceOff(bricksGroup, deleteBrick)

  fill("white")
  textSize(30)
  textFont("TimesNewRoman")
  text("Score: " + score, 100, 60);

  if (gameState == "play") {
    if (ball.isTouching(edges[3])) {
      gameOverSound.play();
      gameState = "over"
    }
    if (score == 144) {
      gameWinSound.play();
      gameState = "win";
    }
  }

  if (gameState == "over") {
    textSize(55)
    text("You lost. Game over.", 400, 500)

    ball.velocityX = 0;
    ball.velocityY = 0;
  }

  if (gameState == "win") {
    textSize(55)
    text("You win. Congratulations!", 400, 500)

    ball.velocityX = 0;
    ball.velocityY = 0;
  }

  if (gameState == "win" || gameState == "over") {
    if (keyDown("space")) {
      bricksGroup.destroyEach();
      gameState = "pre-play"
    }
  }

  drawSprites();
}

function keyPressed() {
  if (gameState == "play") {
    if (paddle.x >= 5 && paddle.x <= 1300) {
      if (keyCode == RIGHT_ARROW) {
        paddle.x += 25;
      }
      if (keyCode == LEFT_ARROW) {
        paddle.x -= 25;
      }
    }
    else if (paddle.x < 5) {
      paddle.x = 10
    }
    else if (paddle.x > 1300) {
      paddle.x = 1275
    }
  }
}

function deleteBrick(ball, brick) {
  brick.remove();
  brickBreakSound.play();
  score++;
}

function drawBricks() {
  imgs = [brickImage1, brickImage2, brickImage3, brickImage4, brickImage5]

  imageToUse = random(imgs);

  bricksGroup = createGroup();

  for (var i = 1; i <= 12; i++) {
    for (var j = timesToRun; j >= 1; j -= 1) {
      brick = createSprite(xCor, yCor, 50, 20)
      imageToUse = random(imgs);
      brick.addImage(imageToUse)
      brick.scale = 1;
      bricksGroup.add(brick);
      xCor += 51;
    }
    xCor = 90
    xCor += (51 * i)
    yCor += 25
    timesToRun = timesToRun - 2;
  }
}
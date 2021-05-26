var brickRowOne = 23;
var brickRowTwo = 21;
var brickRowThree = 19;
var brickRowFour = 17;
var brickRowFive = 15;
var brickRowSix = 13;
var brickRowSeven = 11;
var brickRowEight = 9;
var brickRowNine = 7;
var brickRowTen = 5;
var brickRowEleven = 3;
var brickRowTwelve = 1;
var bricksArray = [];
// var bricksGroup;

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

function preload() {
  bgImg = loadImage("images/bg2.jpeg")
  ballImg = loadImage("images/ball.png")
  brickImage1 = loadImage("images/blue.jpeg")
  brickImage2 = loadImage("images/green.jpeg")
  brickImage3 = loadImage("images/orange.jpeg")
  brickImage4 = loadImage("images/red.jpeg")
  brickImage5 = loadImage("images/yellow.jpeg")
  paddleImg = loadImage("images/paddle.png")
}

function setup() {
  createCanvas(1325, 700);

  imgs = [brickImage1, brickImage2, brickImage3, brickImage4, brickImage5]

  imageToUse = random(imgs);

  bricksGroup = createGroup();

  var xRowOne = 90;
  var yRowOne = 100;
  for (i = 1; i <= brickRowOne; i++) {
    brick = createSprite(xRowOne, yRowOne, 50, 20)
    imageToUse = random(imgs);
    brick.addImage(imageToUse)
    brick.scale = 1;
    // bricksGroup.add(brick);
    bricksArray.push(brick);
    xRowOne += 51;
  }


  var xRowTwo = 141;
  var yRowTwo = 125;
  for (i = 1; i <= brickRowTwo; i++) {
    brick = createSprite(xRowTwo, yRowTwo, 50, 20)
    imageToUse = random(imgs);
    brick.addImage(imageToUse)
    brick.scale = 1;
    // bricksGroup.add(brick);
    bricksArray.push(brick);
    xRowTwo += 51;
  }

  var xRowThree = 192;
  var yRowThree = 150;
  for (i = 1; i <= brickRowThree; i++) {
    brick = createSprite(xRowThree, yRowThree, 50, 20)
    imageToUse = random(imgs);
    brick.addImage(imageToUse)
    brick.scale = 1;
    // bricksGroup.add(brick);
    bricksArray.push(brick);
    xRowThree += 51;
  }

  var xRowFour = 243;
  var yRowFour = 175;
  for (i = 1; i <= brickRowFour; i++) {
    brick = createSprite(xRowFour, yRowFour, 50, 20)
    imageToUse = random(imgs);
    brick.addImage(imageToUse)
    brick.scale = 1;
    // bricksGroup.add(brick);
    bricksArray.push(brick);
    xRowFour += 51;
  }

  var xRowFive = 293;
  var yRowFive = 200;
  for (i = 1; i <= brickRowFive; i++) {
    brick = createSprite(xRowFive, yRowFive, 50, 20)
    imageToUse = random(imgs);
    brick.addImage(imageToUse)
    brick.scale = 1;
    // bricksGroup.add(brick);
    bricksArray.push(brick);
    xRowFive += 51;
  }

  var xRowSix = 344;
  var yRowSix = 225;
  for (i = 1; i <= brickRowSix; i++) {
    brick = createSprite(xRowSix, yRowSix, 50, 20)
    imageToUse = random(imgs);
    brick.addImage(imageToUse)
    brick.scale = 1;
    // bricksGroup.add(brick);
    bricksArray.push(brick);
    xRowSix += 51;
  }

  var xRowSeven = 395;
  var yRowSeven = 250;
  for (i = 1; i <= brickRowSeven; i++) {
    brick = createSprite(xRowSeven, yRowSeven, 50, 20)
    imageToUse = random(imgs);
    brick.addImage(imageToUse)
    brick.scale = 1;
    // bricksGroup.add(brick);
    bricksArray.push(brick);
    xRowSeven += 51;
  }

  var xRowEight = 446;
  var yRowEight = 275;
  for (i = 1; i <= brickRowEight; i++) {
    brick = createSprite(xRowEight, yRowEight, 50, 20)
    imageToUse = random(imgs);
    brick.addImage(imageToUse)
    brick.scale = 1;
    // bricksGroup.add(brick);
    bricksArray.push(brick);
    xRowEight += 51;
  }

  var xRowNine = 497;
  var yRowNine = 300;
  for (i = 1; i <= brickRowNine; i++) {
    brick = createSprite(xRowNine, yRowNine, 50, 20)
    imageToUse = random(imgs);
    brick.addImage(imageToUse)
    brick.scale = 1;
    // bricksGroup.add(brick);
    bricksArray.push(brick);
    xRowNine += 51;
  }

  var xRowTen = 548;
  var yRowTen = 325;
  for (i = 1; i <= brickRowTen; i++) {
    brick = createSprite(xRowTen, yRowTen, 50, 20)
    imageToUse = random(imgs);
    brick.addImage(imageToUse)
    brick.scale = 1;
    // bricksGroup.add(brick);
    bricksArray.push(brick);
    xRowTen += 51;
  }

  var xRowEleven = 599;
  var yRowEleven = 350;
  for (i = 1; i <= brickRowEleven; i++) {
    brick = createSprite(xRowEleven, yRowEleven, 50, 20)
    imageToUse = random(imgs);
    brick.addImage(imageToUse)
    brick.scale = 1;
    // bricksGroup.add(brick);
    bricksArray.push(brick);
    xRowEleven += 51;
  }

  var xRowTwelve = 650;
  var yRowTwelve = 375;
  for (i = 1; i <= brickRowTwelve; i++) {
    brick = createSprite(xRowTwelve, yRowTwelve, 50, 20)
    imageToUse = random(imgs);
    brick.addImage(imageToUse)
    brick.scale = 1;
    // bricksGroup.add(brick);
    bricksArray.push(brick);
    xRowTwelve += 51;
  }

  paddle = createSprite(650, 600, 200, 25);
  paddle.addImage(paddleImg);
  paddle.setCollider("rectangle", 0, 0, 230, 35);
  // paddle.debug = true;
  
  ball = createSprite(650, 550, 20, 20);
  ball.addImage(ballImg);
  ball.scale = 0.02;
  ball.velocityX = -5;
  ball.velocityY = -5;
}

function draw() {
  background(bgImg)

  var edges = createEdgeSprites()
  ball.bounceOff(edges[2])
  ball.bounceOff(edges[0])
  ball.bounceOff(edges[1])
  ball.bounceOff(paddle)

  // if(ball.collide(bricksGroup)){
    // bricksGroup.forEach()
    // brick.destroy()
  // }
  // ball.bounceOff(bricksGroup)

  for(var i = bricksArray.length - 1; i >= 0; i++){
    const brick = bricksArray[i]
    if(ball.collide(brick)){
      bricksArray.splice(i, 1)  
    }
    else{
      bricksArray.display()
    }
  }
    

  if(ball.isTouching(edges[3])){
    ball.velocityX = 0;
    ball.velocityY = 0;
  }

  
  drawSprites();
}

function keyPressed() {
  if (paddle.x >= 5 && paddle.x <= 1300) {
    if (keyCode == RIGHT_ARROW) {
      paddle.x += 20;
    }
    if (keyCode == LEFT_ARROW) {
      paddle.x -= 20;
    }
  }
  else if (paddle.x < 5) {
    paddle.x = 10
  }
  else if (paddle.x > 1300) {
    paddle.x = 1275
  }
}


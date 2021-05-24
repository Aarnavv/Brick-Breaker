const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;



var engine, world;
var brickRowOneArray = [];
var brickRowOne = 20;

var brickRowTwoArray = [];
var brickRowTwo = 18;

var brickRowThreeArray = [];
var brickRowThree = 16;

var brickRowFourArray = [];
var brickRowFour = 14;

var brickRowFiveArray = [];
var brickRowFive = 12;

var brickRowSixArray = [];
var brickRowSix = 10;

var brickRowSevenArray = [];
var brickRowSeven = 8;

var brickRowEightArray = [];
var brickRowEight = 6;

var brickRowNineArray = [];
var brickRowNine = 4;

var brickRowTenArray = [];
var brickRowTen = 2;

var brickRowElevenArray = [];
var brickRowEleven = 0;

var bgImg;
var i;

var paddle;
var ball, ballImg;

function preload() {
  bgImg = loadImage("images/bg2.jpeg")
  ballImg = loadImage("images/ball.png");

}

function setup() {
  createCanvas(1400, 800);
  engine = Engine.create();
  world = engine.world;
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1400,
      height: 800,
      wireframes: false
    }
  });
  Render.run(render);

  var xRowOne = 100;
  var yRowOne = 200;
  for(i = 0; i <= brickRowOne; i++){
    brickRowOneArray.push(new Bricks(xRowOne, yRowOne))
    xRowOne += 61;
  }


  var xRowTwo = 161;
  var yRowTwo = 221;
  for(i = 0; i <= brickRowTwo; i++){
    brickRowTwoArray.push(new Bricks(xRowTwo, yRowTwo))
    xRowTwo += 61;
  }

  var xRowThree = 222;
  var yRowThree = 242;
  for(i = 0; i <= brickRowThree; i++){
    brickRowThreeArray.push(new Bricks(xRowThree, yRowThree))
    xRowThree += 61;
  }

  var xRowFour = 283;
  var yRowFour = 263;
  for(i = 0; i <= brickRowFour; i++){
    brickRowFourArray.push(new Bricks(xRowFour, yRowFour))
    xRowFour += 61;
  }

  var xRowFive = 343;
  var yRowFive = 284;
  for(i = 0; i <= brickRowFive; i++){
    brickRowFiveArray.push(new Bricks(xRowFive, yRowFive))
    xRowFive += 61;
  }

  var xRowSix = 404;
  var yRowSix = 305;
  for(i = 0; i <= brickRowSix; i++){
    brickRowSixArray.push(new Bricks(xRowSix, yRowSix))
    xRowSix += 61;
  }

  var xRowSeven = 465;
  var yRowSeven = 326;
  for(i = 0; i <= brickRowSeven; i++){
    brickRowSevenArray.push(new Bricks(xRowSeven, yRowSeven))
    xRowSeven += 61;
  }

  var xRowEight = 526;
  var yRowEight = 347;
  for(i = 0; i <= brickRowEight; i++){
    brickRowEightArray.push(new Bricks(xRowEight, yRowEight))
    xRowEight += 61;
  }

  var xRowNine = 587;
  var yRowNine = 368;
  for(i = 0; i <= brickRowNine; i++){
    brickRowNineArray.push(new Bricks(xRowNine, yRowNine))
    xRowNine += 61;
  }

  var xRowTen = 648;
  var yRowTen = 389;
  for(i = 0; i <= brickRowTen; i++){
    brickRowTenArray.push(new Bricks(xRowTen, yRowTen))
    xRowTen += 61;
  }

  var xRowEleven = 709;
  var yRowEleven = 410;
  for(i = 0; i <= brickRowEleven; i++){
    brickRowElevenArray.push(new Bricks(xRowEleven, yRowEleven))
    xRowEleven += 61;
  }

  paddle = new Paddle();
  ball = new Ball();
}

function draw() {
  background("blue")
  
  Engine.update(engine); 
 

  for(i = 0; i <= brickRowOne; i++){
    brickRowOneArray[i].display();
  }

  for(i = 0; i <= brickRowTwo; i++){
    brickRowTwoArray[i].display();
  }

  for(i = 0; i <= brickRowThree; i++){
    brickRowThreeArray[i].display();
  }

  for(i = 0; i <= brickRowFour; i++){
    brickRowFourArray[i].display();
  }

  for(i = 0; i <= brickRowFive; i++){
    brickRowFiveArray[i].display();
  }

  for(i = 0; i <= brickRowSix; i++){
    brickRowSixArray[i].display();
  }

  for(i = 0; i <= brickRowSeven; i++){
    brickRowSevenArray[i].display();
  }

  for(i = 0; i <= brickRowEight; i++){
    brickRowEightArray[i].display();
  }

  for(i = 0; i <= brickRowNine; i++){
    brickRowNineArray[i].display();
  }

  for(i = 0; i <= brickRowTen; i++){
    brickRowTenArray[i].display();
  }

  for(i = 0; i <= brickRowEleven; i++){
    brickRowElevenArray[i].display();
  }

  paddle.display();
  paddle.paddle.position.y = 600;
  ball.display();
  image(ballImg, ball.body.position.x, ball.body.position.y, 40, 40);


  drawSprites();
}

// function keyPressed(){
//   paddle.move();
// }


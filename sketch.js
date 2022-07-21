const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, backgroundImg;
var canvas, angle, tower, wall, cannon;
var bombs = [];
var asteroids = [];
var score = 0;
var asteroidImg;
var nuclearbomb;
var isGameOver = false

function preload(){
  backgroundImg = loadImage("./assets/istockphoto-1173451503-612x612.jpg");
  asteroidImg = loadImage("./assets/asteroid.png");
  asteroidbrokenImg = loadImage("./assets/asteroid broken.png");
  bombs = loadImage("./assets/nuclear bomb.png")
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES)
  angle = 15


  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  cannon = new Cannon(180, 110, 240, 140, angle);
  
}


function draw() 
{
  background(51);
  image(backgroundImg, 0, 0, width, height);
  Engine.update(engine);
  push();
  translate(ground.position.x, ground.position.y);
  fill("brown");
  rectMode(CENTER);
  rect(0, 0, width * 2, 1);
  pop();
  for (var i = 0; i < bombs.length; i++) {
    showNuclearBombs(bombs[i], i);
    collisionWithAsteroid(i);
  }
  cannon.display();
  showNuclearBombs();
}


function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    nuclearbomb = new Nuclearbomb(cannon.x, cannon.y);
    Matter.Body.setAngle(nuclearbomb.body, cannon.angle);
    //bombs.push(nuclearbomb);
  }
}

function showNuclearBombs(bombs) {
  if (bombs) {
    bombs.display();
    bombs.animate();
    if(bombs.body.position.x>=width+10||bombs.body.position.x>=height-50){
      bombs.remove(index);
    }
    }
  }

  function keyReleased() {
    if (keyCode === DOWN_ARROW) {
      //bombs[bombs.length - 1].shoot();
      nuclearbomb.shoot()
    }
  }
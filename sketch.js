var fairy, fairyImg;

var star, starImg;

var star, starNight;

var joySound;

var DOWN_ARROW;

var starBody;

const Engine = Matter.Engine;

const World = Matter.World;

const Bodies = Matter.Bodies;

const Body = Matter.Body;

function preload(){
	fairyImg = loadAnimation("fairyImage1.png", "fairyImage2.png");

	starNight = loadImage("starNight.png");

	starImg = loadImage("starImage.png");

	joySound = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	joySound.loop();

	fairy = createSprite(130, 590); 
	fairy.addAnimation("fairyflying", fairyImg);  
	fairy.scale = 0.25;
	fairy.debug = false;
	fairy.setCollider("circle", 0, 0, 300);

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.04;

	engine = Matter.Engine.create();
	
	world = engine.world;
   
	var options = {
	   isStatic : false,
	   restitution : 0.2
	}

	starBody = Bodies.circle(650, 30, 5, options);
	 
	Matter.World.add(world, starBody);

	console.log(star);
}

function draw() {
  background(starNight);

  Matter.Engine.update(engine);

  if(starBody.position.x > 550
  && star.position.y > 550){
	Matter.Body.setStatic(starBody, true);
	star.x = starBody.position.x;
	star.y = starBody.position.y;
	star.y = 550;
	joySound.stop();
	}
  
  fairy.velocityX = 0;
  fairy.velocityY = 0;

  drawSprites();

}

function keyPressed() {

  if(keyCode === LEFT_ARROW){
	  fairy.velocityX = -12;
	  fairy.addAnimation("fairyImg", fairyImg);
  }

  if(keyCode === RIGHT_ARROW){
	  fairy.velocityX = 12;
	  fairy.addAnimation("fairyImg", fairyImg);
  }

  if(keyCode === DOWN_ARROW){
	star.velocityY = 5;
  }

}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paperObject,paper;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(500,480,1000,20);

	paper = new Paper (90,50,60);

	dastbin = new Dastbin (900,440,20,100);
	dastbin1 = new Dastbin (700,440,20,100);
    dastbin2 = new Dastbin (800,480,200,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  

  ground.display();
  paper.display();
  dastbin.display();
  dastbin1.display();
  dastbin2.display();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
		
	}
	
}


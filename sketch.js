var paper1,ground;
var dustpinLeft,dustpinRight,dustpinCenter;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	


	



	engine = Engine.create();
	world = engine.world;
	//Engine.run(engine);


	
	//Create the Bodies Here.
   paper1 = new Paper(100,670,10,10);
   ground = new Ground(500,height,1200,40);
   dustpinLeft=new Dustpin(430, 620, 20,100);
   dustpinCenter=new Dustpin(490, 670, 100,20);
   dustpinRight=new Dustpin(550, 615, 20,90);
	Engine.run(engine);
  
}


function draw() {
	//Engine.update(engine);
	keyPressed();
  rectMode(CENTER);
  background("black");
  paper1.display();
  ground.display();
  dustpinLeft.display();
  dustpinCenter.display();
  dustpinRight.display();
 
  drawSprites();
 
}


function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper1.Body,paper1.Body.position,{x:85,y:-85});
	}
}

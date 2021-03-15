
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var chain1,chain2,chain3,chain4,chain5;

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	bob1=new Bob(210,550,45);
	bob2=new Bob(300,550,45);
	bob3=new Bob(390,550,45);
	bob4=new Bob(480,550,45);
	bob5=new Bob(570,550,45);
	roof=new Roof(550,150,500,50);
	chain1=new Chain(bob1.body,roof.body,-95*2,0);
	chain2=new Chain(bob2.body,roof.body,-50*2,0);
	chain3=new Chain(bob3.body,roof.body,-5*2,0);
	chain4=new Chain(bob4.body,roof.body,40*2,0);
	chain5=new Chain(bob5.body,roof.body,85*2,0);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  Engine.update(engine);

  keyPressed();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display(); 
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
 
 
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position,
			{x: 110,y: 0});
	}
}

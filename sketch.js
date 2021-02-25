
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,250,300,50);
	bobObject1 = new Bob(300,450,50,50);
	bobObject2 = new Bob(350,450,50,50);
	bobObject3 = new Bob(400,450,50,50);
	bobObject4 = new Bob(450,450,50,50);
	bobObject5 = new Bob(500,450,50,50);
	rope1 = new Rope(bobObject1,roof.body);
	rope2 = new Rope(bobObject2,roof.body);
	rope3 = new Rope(bobObject3,roof.body);
	rope4 = new Rope(bobObject4,roof.body);
	rope5 = new Rope(bobObject5,roof.body);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}
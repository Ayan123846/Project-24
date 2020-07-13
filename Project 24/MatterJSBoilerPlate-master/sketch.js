var paper;

var ground;

var dustbinside1,dustbinside2,dustbinside3;

const Engine = Matter.Engine;

const World = Matter.World;

const Bodies = Matter.Bodies;

const Body = Matter.Body;


function setup() {
createCanvas(1366,653);

//creating world and engine
engine = Engine.create();

world = engine.world;

//creating ground, dustbin and paper
ground = new Ground(683,600,1366,20); 

dustbinside1 = new Dustbin(1010,578,250,25);
dustbinside2 = new Dustbin(1138,510,25,120);
dustbinside3 = new Dustbin(880,510,25,120);

paper = new Paper(200,400,20);

}


function draw() {
  rectMode(CENTER);

  background(0);

  //setting text
  textSize(40);
  textFont("Times New Roman");
  fill("white");
  text("Press 'Up' Arrow Key To Throw The Waste In The Dusbin",200,80);

  //updating engine
  Engine.update(engine);

  //telling to display ground, dustbin and paper
  ground.display();
  dustbinside1.display();
  dustbinside2.display();
  dustbinside3.display();
  paper.display();
  
  //telling to draw sprites
  drawSprites();
 
}

//telling to appy force when 'up' arrow is pressed
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
}
}




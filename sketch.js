var engine, world, Matter;

const Engine =Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.body;



var miniG,miniG2;
var chain;
var ground,block1;


var polygon,polygon_img ;


function preload(){
  polygon_img=loadImage("hexagon.jpeg");
}


function setup() {
  createCanvas(800,400);

//var engine;
  engine= Engine.create();
  world= engine.world;


 ground= new Ground(400, 580, 1000,20);
miniG = new Ground(640,250,220,20);
miniG2= new Ground (330,450,250,20)
  
//box to hit 
  block1= new Block(330,235,30,40);
  block2= new Block(360,235,30,40);
  block3= new Block(390,235,30,40);
  block4= new Block(420,235,30,40);
  block5= new Block(450,235,30,40);

  block6= new Block(360,195,30,40);
  block7= new Block(390,195,30,40);
  block8= new Block(420,195,30,40);

  block9= new Block(390,195,30,40);

  
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  chain = new Chain(this.polygon,{x:200, y:50});

  Engine.run(engine);

}



function draw() {
  background(255,255,255);

  ground.display();
  miniG.dispaly();
  miniG2.display();
  
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  polygon.display();
  chain.display();



  imageMode(CENTER)
  image(polygon_img ,polygon.postion.x, polygon.position.y,40,40);

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  chain.fly();
}

function keyPressed (){
  if(keyCode === 32 ){
      chain.attach(polygon.Body);

  }
}


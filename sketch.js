const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies
var engine, world;

var ground;
var particle = [];

var divisions = [];
var divisionsHeight=300;

var plinko = [];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(200,650,550,20);

  for(var k = 0;k< width; k = k+80){
    divisions.push(new Divisions(k, height-divisionsHeight/2,10,divisionsHeight))
  }

  for (var j =40;j<=width;j=j+50)
  {
    plinko.push(new Plinko(j,75));
  }

  for(var j= 15; j<width;j=j+50 )
  {
    plinko.push(new Plinko(j,175));
  }

  if(frameCount%60===0){
    particle.push(new Particle(random(width/2-10,width/2+10),10,10))
  }
  
}

function draw() {
  background(25);
  
  for(var j = 0; j <plinko.length; j++){
    plinko[j].display();
  }

  for(var j = 0;j<plinko.length; j++){
    plinko[j].display();
  }

  for(var k = 0; k< divisions.length; k++){
    divisions[k].display();
  }

  for(var j = 0; j<particle.length; j++){
    particle[j].display();
  }

  
  ground.display();
  


  Engine.update(engine);
  drawSprites();
}
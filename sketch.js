const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var iron;
var stone;



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(15,200);
    iron = new Iron(20,300);
    stone = new Stone(25,400);
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    
    iron.display();
    stone.display();
    rubber.display();
    plane.display();
    hammer.display();

    
 
}
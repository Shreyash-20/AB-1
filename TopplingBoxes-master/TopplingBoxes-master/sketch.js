const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1=  new Pg(810,350);
    log1= new  Stick(810,260,300,PI/2);
    box3=new Box(700,240,70,70);
    box4=new Box(920,240,70,70);
    pig2=  new Pg(810,220);
    log2= new  Stick(810,180,300,PI/2);
    box5= new Box(810,160,70,70);
    log3= new  Stick(760,120,150,PI/7);
    log4= new  Stick(870,120,150,-PI/7);
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(100,200,178);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    log3.display();
    log4.display();
    box5.display();
    ground.display();
}
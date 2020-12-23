const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(245,360,50,50);
    box2 = new Box(355,360,50,50);
    box3 = new Box(245,270,50,50);
    box4 = new Box(355,270,50,50);
    box5 = new Box(300,210,50,50);
    ground = new Ground(200,height,400,20);

    pig1 = new Pig(300,360);
    pig2 = new Pig(300,270);

    log1 = new Log(300,300,100,PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();






}
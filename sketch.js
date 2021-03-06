const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1600,700);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(800,height,1600,20)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box18 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    box5 = new Box(300, 560, 70, 70);
    box6 = new Box(300, 460, 70, 70);
    box7 = new Box(300, 360, 70, 70);
    box8 = new Box(300, 260, 70, 70);
    box9 = new Box(300, 160, 70, 70);
    box10 = new Box(230, 560, 70, 70);
    box11  = new Box(370, 560, 70, 70);
    box12  = new Box(230, 460, 70, 70);
    box13  = new Box(370, 460, 70, 70);
    box14  = new Box(230, 360, 70, 70);
    box15  = new Box(370, 360, 70, 70);
    box16  = new Box(230, 260, 70, 70);
    box17  = new Box(370, 260, 70, 70);
    specialpig1 = new Pig(245, 160);
    specialpig2 = new Pig(355, 160);
    kingpig = new Pig(300, 80);
    log6 = new Log(300, 50, 200, PI/2);
    guardpig1 = new Pig(250, 10);
    guardpig2 = new Pig(350, 10);

    bird = new Bird(100,100);

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    kingpig.display();

    guardpig1.display();
    guardpig2.display();

    specialpig1.display();
    specialpig2.display();

    log6.display();


    bird.display();
}
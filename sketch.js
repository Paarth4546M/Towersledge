const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){
    polygon_img = loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;

    //Ground for boxes
    ground1 = new Ground(350,500,200,10)

    // level-1 
   
    box1 = new Box(350,450,25,30)
    box2 = new Box(375,450,25,30)
    box3 = new Box(400,450,25,30)
    box4 = new Box(325,450,25,30)
    box5 = new Box(300,450,25,30)

    // level-2
    box6 = new Box(350,420,25,30)
    box7 = new Box(325,420,25,30)
    box8 = new Box(375,420,25,30)
    
    // level-3
    box9 = new Box(350,390,25,30)

    // polygon
    polygon = Bodies.circle(50,200,20)
    World.add(world,polygon)
    //chain = new Slingshot(polygon.body,{x:50, y:200});

    Engine.run(engine)
    
}
function draw(){
    background(0);
    Engine.update(engine);

    ground1.display()
    // level-1
    fill("green")
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    // level-2
    fill("blue")
    box6.display()
    box7.display()
    box8.display()
   // level-3
    fill("red")
    box9.display()

   // polygon
   imageMode(CENTER)
   image(polygon_img,polygon.position.x,polygon.position.y,40,40)
   //chain.display()
   
}
function mouseDragged(){

    Matter.Body.setPosition(polygon.body,{x: mouseX,y: mouseY})  
    }
    function mouseReleased(){
    
        chain.detach()
    
    }
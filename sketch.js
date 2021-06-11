
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


//function preload() {
   // getBackgroundImg();
//}

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;
    ground= new Ground(600,600,1200,20);
    ball= new Ball(200,200,80);
    rope= new Rope(ball.body,{x:500,y:50});
    box1= new Box(900,100,70,70);
    box2= new Box(900,100,70,70);
    box3= new Box(900,100,70,70);
    box4= new Box(900,100,70,70);
    box5= new Box(800,100,70,70);
    box6= new Box(800,100,70,70);
    box7= new Box(800,100,70,70);
    box8= new Box(700,100,70,70);
    box9= new Box(700,100,70,70);
    box10= new Box(600,100,70,70);


}

function draw(){
    
    Engine.update(engine);
    //strokeWeight(4);
    ground.display();
    ball.display();
    rope.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();


}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    rope.fly();
    
}

function keyPressed(){

  if(keyCode === 32  ){
 
     rope.attach(ball.body);
     
  }
}


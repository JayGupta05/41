const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Events = Matter.Events;
var boyUmbImg;
var boy,thunder,drops;
var thunderImg1,thunderImg2,thunderImg3,thunderImg4;
var engine, world;

function preload(){
   boyUmbImg = loadImage("boyUmbrella.jpg"); 
   thunderImg1 = loadImage("Thunder_1.jpg");
   thunderImg2 = loadImage("Thunder_2.jpg");
   thunderImg3 = loadImage("Thunder_3.jpg");
   thunderImg4 = loadImage("Thunder_4.jpg");
}

function setup(){
   createCanvas(400,800);
   engine = Engine.create();
   world = engine.world;
   boy = new Umbrella(200,700);
   var maxDrops = 100;
   for(var i = 0; i < maxDrops; i++){
      drops.push(new Drop(random(0,400),random(0,400)));
   }
   
}

function draw(){
   Engine.update(engine);
   if(World.frameCount % 60 === 0){
      thunder = createSprite(random(100,300),0);
      var rand = Math.round(random(1,4));
      switch(rand){
         case 1 : thunder.addImage(thunderImg1);
         break;
         case 2 : thunder.addImage(thunderImg2);
         break;
         case 3 : thunder.addImage(thunderImg3);
         break;
         case 4 : thunder.addImage(thunderImg4);
         break;
      }
      thunder.scale = random(0.3,0.6);
   }
    boy.display();
    for(var i = 0; i < maxDrops; i++){
     drops[i].display();
     drops[i].update();
   }
}   


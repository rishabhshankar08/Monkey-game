
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score = 0;
var ground; 
function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}



function setup() {
  createCanvas(400,400);
  monkey=createSprite(40,325,40,10);
  monkey.addAnimation("abc",monkey_running);
  monkey.scale = 0.09;
  ground = createSprite(400,350,1000,10);
  ground.velocityX = -4;
  
 FoodGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw(){
  background(220);
    text("Survival Time:"+score,200,50);

       score = score+(round(frameCount/90));
  
  monkey.collide(ground);
  if(ground.x <= 0 ){
    ground.x = ground.width/2;
  }
  if(keyDown("space")& monkey.y >= 300){
  monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  Food();
  obstacles();
  drawSprites();
}
function Food(){
  if(frameCount%100 ===0){
  banana = createSprite(420,0,30,20);
  
  banana.velocityX = -8;
  
  banana.lifetime = 300;
  
  banana.scale = 0.05;
  
  banana.addImage("abcefg",bananaImage);
  
  banana.y = round(random(200,270));
}
}
function obstacles(){
  if(frameCount%100 === 0){
    obstacle = createSprite(500,315,50,10);
                            
    obstacle.addImage("obstacle",obstacleImage);                            
    obstacle.velocityX = -4;
    
    obstacle.lifetime = 300; 
    
    obstacle.scale = 0.2;
    
    
  }
  
}





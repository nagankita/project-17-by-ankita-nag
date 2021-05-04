
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var survivalTime=0
function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  monkey=createSprite(80,320,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  
  ground=createSprite(400,350,900,10)
  ground.x=ground.width/2
  ground.velocityX=-6
  
  
  FoodGroup=new Group();
  obstacleGroup=new Group();
  
}


function draw() {
background(225)
  stroke("black")
  textSize(20);
  fill("black");
  text("score:"+score,500,50)
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=survivalTime+Math.round(getFrameRate()/60)
  text("Survival Time:"+survivalTime,100,50)
  
  if(ground.x<0){
      ground.x=ground.width/2}
  
  if(keyDown("space") && monkey.y>=159){
    monkey.velocityY=-12}
  
  monkey.velocityY=monkey.velocityY+0.8
  monkey.collide(ground)
  
  
    
  
  
  
  spawnBanana()
  spawnObstacles()
  
  drawSprites();
}
function spawnBanana(){
  if(frameCount%80===0){
    banana=createSprite(200,200,10,10)
    banana.y=Math.round(random(120,200))
    banana.addImage( bananaImage)
    banana.scale=0.1
    banana.velocityX=-5
    banana.lifetime=80
    banana.depth=monkey.depth
    monkey.depth=monkey.depth+1
    FoodGroup.add(banana)
  }
}

function spawnObstacles(){
  if(frameCount%100===0){
  obstacles=createSprite(400,310,200,10)
  obstacles.velocityX=-6
  obstacles.addImage(obstacleImage)
  obstacles.scale=0.2 
  obstacles.lifetime=70
  obstacles.depth=monkey.depth
    monkey.depth=monkey.depth+1
  obstacleGroup.add(obstacles)
  }
  
}




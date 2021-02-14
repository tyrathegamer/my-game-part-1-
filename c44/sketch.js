var player1, invisibleground, ground

function setup() {
 createCanvas (800,400)
 player1=createSprite(50,360,20,20)
 invisibleground=createSprite(400,380,800,10)
 ground=createSprite(400,370,800,10)
 invisibleground.visible=false
}
function draw() {
 background(0) 
 drawSprites()
 if(keyDown('space')){
 player1.velocityY= -3  
 }
 player1.velocityY += 0.5
 player1.collide(invisibleground)
 spawnObstacles();
 spawnFood();
}
function spawnObstacles(){
  if(frameCount % 100===0){
     var Obstacles=createSprite(800,360,20,20)
     Obstacles.velocityX= -2
  }
}
function spawnFood() {
  if(frameCount % 150===0){
    var Food=createSprite(800,350,20,20)
    Food.velocityX=-2
  }
}
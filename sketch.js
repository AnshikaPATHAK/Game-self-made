var back,path,ghost1;
var ghost;
var score=0;
var gameOver,restart;
var obstacle:
function preload(){
  back = loadImage("ha.jpg")
  ghost=loadAnimation("Screen1.png","Screen2.png","Screen3.png","Screen4.png","Screen5.png","Screen6.png","Screen7.png")
  obstacle=loadImage("sword.jpg")
}
function setup(){
  createCanvas(900,700);
  // Moving background
  path=createSprite(100,150);
  path.addImage(back);
  path.scale=1
  path.velocityX = -5;
  ghost1=createSprite(50,630);
  ghost1.addAnimation("ani",ghost)
  score=0;

  
}
function draw(){
 text("Score: "+ score, 500,50);
 if (gameState===PLAY){
    score = score + Math.round(getFrameRate()/60);
    ground.velocityX = -(6 + 3*score/100);
  
   //change the ghost animation
    ghost.changeAnimation("running", trex_running);
    
    if(keyDown("space") && ghost.y >= 159) {
      ghost.velocityY = -12;
    }
   ghost.velocityY = ghost.velocityY + 0.8
   

  //code to reset the background
  if(path.x < 0 ){
    path.x = width/2;
  }
  drawSprites();
}
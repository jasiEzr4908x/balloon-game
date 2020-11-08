var bow,attackingbow
var grassland,grassimage
var arrow,attackingarrow,arrowsGroup
var redballoon,redtarget,redGroup
var greenballoon,greentarget,greenGroup
var pinkballoon,pinktarget,pinkGroup
var blueballoon,bluetarget,blueGroup
var score 



function preload(){
attackingbow=loadImage("bow0.png")
grassimage=loadImage("background0.png") 
attackingarrow=loadImage("arrow0.png")
redtarget=loadImage("red_balloon0.png")
greentarget=loadImage("green_balloon0.png")
pinktarget=loadImage("pink_balloon0.png")
bluetarget=loadImage("blue_balloon0.png")
}

function setup() {
  createCanvas(600, 500);
  
  grassland=createSprite(0,0,600,500)
  grassland.addImage("grass",grassimage)
  grassland.scale=3
  
  bow=createSprite(550,250,20,100)
  bow.addImage("bowimage",attackingbow)
  
  score=0
  
  arrowsGroup = new Group()
  redGroup = new Group()
  blueGroup = new Group()
  greenGroup = new Group()
  pinkGroup = new Group()
}

function draw() {
 //createEdgeSprites()
  
bow.y=World.mouseY
  

  
 // console.log(World.mouseY)
 // console.log(World.mouseX)
  
  grassland.velocityX=-5
  
  if (grassland.x < 0){
    grassland.x = grassland.width/2;
  }
  
  if (keyDown("space")) {
  spawnarrow()
  }
  
  if (arrowsGroup.isTouching(redGroup)){
    redGroup.destroyEach()
    arrowsGroup.destroyEach()
    score=score+1
  }
   
  if (arrowsGroup.isTouching(blueGroup)){
    blueGroup.destroyEach()
    arrowsGroup.destroyEach()
    score=score+1
  }
  
  if (arrowsGroup.isTouching(greenGroup)){
    greenGroup.destroyEach()
    arrowsGroup.destroyEach()
    score=score+1
  }
  
  if (arrowsGroup.isTouching(pinkGroup)){
    pinkGroup.destroyEach()
    arrowsGroup.destroyEach()
    score=score+1
  }
  
 drawSprites()
  fill("black")
  textSize(15)
  text("Score: "+ score, 480,50);
  
}
function targets(){
  if (frameCount%250===0) {
  redballoon=createSprite(41,48,30,30)
  redballoon.addImage("red",redtarget)
  redballoon.velocityX=5
  redballoon.y=Math.round(random(10,500))
  redballoon.scale=.10
  redGroup.add(redballoon) 
  }
  if (frameCount%200===0) {
  greenballoon=createSprite(190,200,30,30)
  greenballoon.addImage("green",greentarget)
  greenballoon.velocityX=5
  greenballoon.y=Math.round(random(10,500))
  greenballoon.scale=.10 
  greenGroup.add(greenballoon)
  }
  if (frameCount%220===0) {
  pinkballoon=createSprite(100,180,30,30)
  pinkballoon.addImage("pink",pinktarget)
  pinkballoon.velocityX=5
  pinkballoon.y=Math.round(random(10,500))
  pinkballoon.scale=1.5
  pinkGroup.add(pinkballoon)
  }
  if (frameCount%250===0) {
  blueballoon=createSprite(420.74,180,30,30)
  blueballoon.addImage("blue",bluetarget)
  blueballoon.velocityX=5
  blueballoon.y=Math.round(random(10,500))
  blueballoon.scale=.10
  blueGroup.add(blueballoon)
  }
 
}
function spawnarrow(){
  arrow=createSprite(550,250,50,20)
  arrow.addImage("arrowimage",attackingarrow)
  arrow.scale=0.2
  arrow.y=bow.y 
  arrow.velocityX=-5
  arrowsGroup.add(arrow)
  
}

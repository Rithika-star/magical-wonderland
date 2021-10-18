var amy;
var canvas;
var galaxy,Wanda,amyImg;
function preload(){
    galaxy=loadImage("galaxy.jpg")
    Wanda=loadImage("Energiserpt2.png")
    amyImg=createImage("Amy.gif")
}

function setup(){
 canvas=createCanvas(displayWidth,displayHeight)
 backGround=createSprite(displayWidth/2,displayHeight/2)
 backGround.addImage(galaxy)
 amy=createSprite(displayWidth/2,displayHeight-50,100,100)
 
 //wand=createSprite(random(displayWidth/10,displayWidth),displayHeight/2,40,30)

}

function draw(){
    background(0,0,0)
    imageMode(CENTER)
    //image(galaxy,width/2,height/2,width,height*10)=>made background bigger
    backGround.velocityY=3
    amyImg.position(100,100)
    if(backGround.y>=height){
    backGround.y=500 //<=check the number
    } 
   if (keyDown(UP_ARROW)){
   //amy.velocityY=-5
    amy.y=amy.y-5
   } 
   if (keyDown(DOWN_ARROW)){
    //.velocityY=+5
     amy.y=amy.y+5
    }
    if (keyDown(LEFT_ARROW)){
    //    amy.velocityX=-5
         amy.x=amy.x-5
        }
if (keyDown(RIGHT_ARROW)){
        //    amy.velocityX=+5 =>it keeps on going 
             amy.x=amy.x+5
            }
spawnwanda();
//camera.position.x=amy.x
//camera.position.y=amy.y

    drawSprites();
}

function spawnwanda() {
    //write code here to spawn the wanda
    if (frameCount % 60 === 0) {
      var wanda = createSprite(600,300,40,10);
      wanda.addImage(Wanda)
      wanda.x = Math.round(random(100,1000))
      wanda.scale = 0.4;
      wanda.velocityY = 3;
      
      //assign lifetime to the variable
      wanda.lifetime = 134;
      
      //adjust the depth
      //cloud.depth = trex.depth
      //trex.depth = trex.depth + 1;
      
      //add each cloud to the group
      //cloudsGroup.add(cloud);
      }
  }
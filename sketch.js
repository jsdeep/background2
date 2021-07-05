var img1;
var color;
function preload(){
  img1=loadImage("download.png");
}

function setup() {
  createCanvas(400,400);
  //color = createSprite(200,200,200,200)
  }

function draw() 
{
  
  if(keyDown(UP_ARROW)){
    background("red");
 }
 if(keyDown(RIGHT_ARROW)){
  background("green");
}
if(keyDown(LEFT_ARROW)){
  background("yellow");
}
if(keyDown(DOWN_ARROW)){
  background("blue");
}
 
}

  




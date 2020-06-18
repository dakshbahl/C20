var fixedRect, movingRect; 

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(100, 100, 100, 50);

  fixedRect.debug = true
  movingRect.debug = true
}



function draw() {
  background(255,255,255);  
  movingRect.x = World.mouseX
  movingRect.y = World.mouseY
  
  movingRect.shapeColor = "green"
  fixedRect.shapeColor = "green"
  
  if(movingRect.x - fixedRect.x < ((movingRect.width + fixedRect.width)/2) &&
  fixedRect.x - movingRect.x < ((movingRect.width + fixedRect.width)/2) &&
  movingRect.y - fixedRect.y < ((movingRect.height + fixedRect.height)/2) &&
  fixedRect.y - movingRect.y < ((movingRect.height + fixedRect.height)/2) )   {
    
    movingRect.shapeColor = "red"
    fixedRect.shapeColor = "red"
  
  }
  
  else  {
  
    movingRect.shapeColor = "green"
    fixedRect.shapeColor = "green"

  }


  drawSprites();
}
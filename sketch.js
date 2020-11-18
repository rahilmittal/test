var fixedRect, movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColour = "green";
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColour = "red";
  movingRect.debug = true;
  fixedRect.debug = true;
}

function draw() {
  background(255,255,255);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  console.log(movingRect.x-fixedRect.x);
  if (fixedRect.x-movingRect.x < movingRect.width/2+fixedRect.width/2 && movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2) {
    fixedRect.shapeColour = "red";
    movingRect.shapeColour = "green";
 } else{
  fixedRect.shapeColour = "green";
  movingRect.shapeColour = "red";
 }
  drawSprites();
}
var movingRect, fixedRect, sprite1, sprite2, sprite3, sprite4;
function setup() {
  createCanvas(800, 800);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "red";
  movingRect = createSprite(400, 200, 60, 30);
  movingRect.shapeColor = "red";
  sprite1 = createSprite(300, 150, 50, 50);
  sprite1.shapeColor = "red";
  sprite2 = createSprite(200, 200, 60, 30);
  sprite2.shapeColor = "red";

  sprite3 = createSprite(400, 200, 50, 50);
  sprite3.shapeColor = "black";
  sprite3.velocityX= -3;
  sprite4 = createSprite(100, 200, 60, 30);
  sprite4.shapeColor = "black";
  sprite4.velocityX= 3;
}

function draw() {
  background("white");
  text(mouseX+ "," + mouseY , mouseX, mouseY);
  drawSprites();

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(movingRect, sprite2)){
    movingRect.shapeColor = "blue";
    sprite2.shapeColor = "blue";

  }
  else{
    movingRect.shapeColor = "red";
    sprite2.shapeColor = "red";
  };


  if(isTouching(movingRect, sprite1)){
    movingRect.shapeColor = "blue";
    sprite1.shapeColor = "blue";

  }
  else{
    movingRect.shapeColor = "red";
    sprite1.shapeColor = "red";
  };

  bounceOff(sprite3, sprite4);
}

var fix, moving;

var object3;

function setup() {
  createCanvas(800,400);
  fix = createSprite(400, 200, 50, 50);
  fix.shapeColor = 'red';
  fix.velocityX = 1;

  object3 = createSprite(200, 200, 50, 50);
  object3.shapeColor = 'green';
  object3.velocityX = 1;

  moving = createSprite(600, 200, 50, 50);
  moving.shapeColor = 'blue';
  moving.velocityX = -1;
}

function draw() {
  background(255,255,255); 

//  moving.x = mouseX;
  //moving.y = mouseY;

  if(isTouching(object3, moving)){
    moving.shapeColor = 'red';
    object3.shapeColor = 'blue';
  }
  else{
    moving.shapeColor = 'blue';
    object3.shapeColor = 'green';
  }

  bounceOff(moving, fix);
  bounceOff(fix, object3);

  drawSprites();
}
var a, b;
function setup() {
  createCanvas(800,400);
  a = createSprite(700, 200, 75, 100);
  a.shapeColor = 'red';
  b = createSprite(20, 200, 100, 50);
  b.shapeColor = 'red';
  b.velocityX = random(5, 40);
}

function draw() {
  background("grey");  
  drawSprites();
  if (isTouching2(a, b) == true) {
    
    b.shapeColor = 'green';
    b.velocityX = 0;
  } else {
    a.shapeColor = 'red';
    b.shapeColor = 'red';
  }
}
function isTouching2(fsprite, ssprite) {
  var i, i2, j, j2;
  var trueornot;
  i = (fsprite.width / 2);
  i2 = (fsprite.height / 2);
  j = (ssprite.width / 2);
  j2 = (ssprite.height / 2);
  if ((ssprite.x - j) <= (fsprite.x + i) && (ssprite.x + j) >= (fsprite.x - i) && (ssprite.y - j2) <= (fsprite.y + i2) && (ssprite.y + j2) >= (fsprite.y - i2)) {
    trueornot = true;
  } else {
    trueornot = false;
  }
  return trueornot;
}
function deformationChecker(fsprite2, ssprite2) {
  
}
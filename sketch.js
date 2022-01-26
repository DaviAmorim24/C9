var quadrado
function setup() {
  createCanvas(400,400);
quadrado = createSprite (200, 200, 40, 40)
}

function draw() 
{background(30);
  drawSprites()
if (keyDown("right")){
  quadrado.x +=5
}
if (keyDown("left")){
  quadrado.x -=5
}
}




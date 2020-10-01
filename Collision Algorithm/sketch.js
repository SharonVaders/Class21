var F,M,R1,R2,R3,R4
function setup() {
  createCanvas(800,400);
 F= createSprite(400, 200, 50, 50);
 M= createSprite(200, 200, 50, 50);
 M.shapeColor="purple"
 F.shapeColor="purple"
 M.debug=true
 F.debug=true
 R1= createSprite(400, 100, 50, 50);
 R2= createSprite(200, 100, 50, 50);
 R1.shapeColor="purple"
 R2.shapeColor="purple"
 R1.debug=true
 R2.debug=true
 R3= createSprite(100, 100, 50, 50);
 R4= createSprite(500, 100, 50, 50);
 R3.shapeColor="purple"
 R4.shapeColor="purple"
 R3.debug=true
 R4.debug=true
}

function draw() {
  background(255,255,255);
  M.x=World.mouseX
  M.y=World.mouseY
  
  if(collision(M,R4))
  { M.shapeColor = "pink"; R4.shapeColor = "pink"; } 
    else 
    { M.shapeColor = "purple"; R4.shapeColor = "purple"; }
  drawSprites();
}

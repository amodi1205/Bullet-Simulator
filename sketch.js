var bullet ,wall;
var speed,weight,thickness;



function setup() {
  createCanvas(1600,400);
  speed=random(100,150);
  weight=random(30,52);
  thickness=random(22,38);

  bullet=createSprite(50,200,50,50);
  bullet.velocityX = speed;

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80,80,80);
  


}

function draw() {
  background(255,255,255); 

  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
  if(hasCollided(bullet, wall)){
    console.log("collided");
    bullet.velocityX=0;
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
  }
  }
  
  text("damage calculated: "+damage,600,200);

  drawSprites();
}

function hasCollided(bullet, wall){
  bulletRightEdge=bullet.x +bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}
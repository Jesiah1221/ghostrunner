var tower, towerImage;

var door, doorImage, doorGroup;

var climber, climberImage, climberGroup

var ghost, ghostImage

function preload(){

 towerImage = loadImage("tower.png");
 
 doorImage = loadImage("door.png");
 doorGroup = new Group(); 
  
 climberImage = loadImage("climber.png");
 climberGroup = new Group();
  
 ghostImage = loadImage("ghost-standing.png");

}

function setup(){
createCanvas(450,450);

  //Create tower
  tower = createSprite(225,225,20,20);
  tower.addImage(towerImage);
  tower.scale = 0.8;
  tower.velocityY = 2;
  
  //Create ghost
  ghost = createSprite(225,225,20,20);
  ghost.addImage(ghostImage);
  ghost.scale = 0.3;
  
} 

function draw(){
  background(0);
  
  if(keyDown("space")){
   ghost.velocityY = -5; 
  }
  ghost.velocityY+= 0.8;


  if(tower.y > 300){
    tower.y = 0
  }

  spawndoor();
  
  drawSprites();
}

function spawndoor(){
  if(frameCount % 150===0){
    door=createSprite(225,10,20,20);
    climber=createSprite(225,70,20,20);
    var ground = createSprite(225,70,50,10)
    door.addImage(doorImage);
    climber.addImage(climberImage);
    door.x = Math.round(random(100,300));
    climber.x = door.x;
    ground.x = door.x;
    door.velocityY = 2;
    climber.velocityY = 2;
    ground.velocityY = 2;
    
    ground.visible = false;
  }
  
}


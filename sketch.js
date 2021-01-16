var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashGroup,diamondsGroup,jwelleryGroup,swordGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
  
// Moving background
  
path=createSprite(width/2,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
  
boy = createSprite(width/2,height-2,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  
cashGroup=new Group();
diamondsGroup=new Group();
jwelleryGroup=new Group();
swordGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
    
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > height ){
    path.y = height/2;
  }
  
    createCash();
    createDiamonds();
    createJwellery();
    createSword();

    if (cashGroup.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (diamondsGroup.isTouching(boy)) {
      diamondsGroup.destroyEach();
      treasureCollection=treasureCollection+100;
      
    }else if(jwelleryGroup.isTouching(boy)) {
      jwelleryGroup.destroyEach();
      treasureCollection= treasureCollection + 150;
      
    }else{
      if(swordGroup.isTouching(boy)) {
        gameState=END;
        
   boy.addAnimation("SahilRunning",endImg);
   boy.x=width/2;
   boy.y=height/2;
   boy.scale=0.6;
        
cashGroup.destroyEach();
diamondsGroup.destroyEach();
jwelleryGroup.destroyEach();
swordGroup.destroyEach();
        
cashGroup.setVelocityYEach(0);
diamondsGroup.setVelocityYEach(0);
jwelleryGroup.setVelocityYEach(0);
swordGroup.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,width-150,30);
  }

}
function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50,width-50),40, 10, 10));
sword.addImage(swordImg);
sword.scale=0.1;
sword.velocityY = 3;
sword.lifetime = 150;
swordGroup.add(sword);
  }
}
function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, width-50),40, 10, 10));
cash.addImage(cashImg);
cash.scale=0.12;
cash.velocityY = 3;
cash.lifetime = 150;
cashGroup.add(cash);
  }
}
function createJwellery() {
  if (World.frameCount % 410 == 0) {
  var jwellery = createSprite(Math.round(random(50, width-50),40, 10, 10));
jwellery.addImage(jwelleryImg);
jwellery.scale=0.13;
jwellery.velocityY = 3;
jwellery.lifetime = 150;
jwelleryGroup.add(jwellery);
  }
}


function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, width-50),40, 10, 10));
diamonds.addImage(diamondsImg);
diamonds.scale=0.03;
diamonds.velocityY = 3;
diamonds.lifetime = 150;
diamondsGroup.add(diamonds);
}
}


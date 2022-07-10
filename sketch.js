var bg, bgImg, player
var playerImg, playerShootImg


function preload() {

  bgImg = loadImage("assets/bg.jpeg")
  playerImg = loadImage("assets/shooter_1.png")
  playerShootImg = loadImage("assets/shooter_3.png")

}

function setup() {

  createCanvas(windowWidth, windowHeight);

  bg = createSprite(width / 2, height / 2 + 200)
  bg.addImage(bgImg)
  bg.scale = 1.3

  player = createSprite(150, height - 150)
  player.addImage(playerImg)
  player.scale = 0.6



}

function draw() {
  background(0);

  if(keyDown("up")){
    player.y = player.y - 5
  }

  if(keyDown("down")){
    player.y = player.y + 5
  }

  if(keyWentDown("space")){
    player.addImage(playerShootImg)
  }

  if(keyWentUp("space")){
    player.addImage(playerImg)
  }

  drawSprites();

}








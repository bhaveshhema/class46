var player, player2;
var playerImg, player2Img, life, star,starImg;
var obstacleImg;

function preload() {
 playerImg = loadImage("images/player.png");
 player2Img = loadImage("images/player2.png");
 bg = loadImage('images/background.jpg');
 bg2 = loadImage('images/background2.jpg');
 crowImg = loadImage('images/crow.png');
 starImg = loadImage('images/star.png')
 obstacleImg = loadImage('images/Obstacle1.png')
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  player = createSprite(250,150,50,50)
  player.addImage(playerImg);
  player.scale = 0.2;

  player2 = createSprite(70,150,50,50)
  player2.addImage(player2Img);
  player2.scale = 0.2;

  scoreStar = createSprite(60,80,50,50)
  scoreStar.addImage(starImg);
  scoreStar.scale = 0.1;

  life = 50;
  score=0;

  crowGroup = new Group();
  starGroup = new Group();
  snowmanGroup = new Group();
}

function draw() {
  background(bg);
  fill('black')
  textSize(30);
  text("life:"+life,50,50);
  text(':'+score,90,90);

  if (keyDown("RIGHT")){
    player.x = player.x + 5;
  }
  if (keyDown("UP")){
    player.y = player.y - 5;
  }
  if (keyDown("Down")){
    player.y = player.y + 5;
  }
  player2.x = player.x - 200;
  player2.y = player.y;

  if (crowGroup.isTouching(player)){
    life = life-Math.round(frameCount/60);
  }

  if (starGroup.isTouching(player)){
    score = score+Math.round(getFrameRate()/60);
  }

  if (score >= 20){
    stage2();
  }

  //camera.position.x = player.x;
  //camera.position.y = player.y;
  spawnCrow ()
  spawnStars ()
  drawSprites()
}

function stage2 (){
  background(bg2);
  spawnSnowman ()
  crowGroup.destroyEach();
}

function spawnCrow () {
  if (frameCount % 120 === 0){
    crow = createSprite(width-10,150,50,50)
    crow.addImage(crowImg);
    crow.scale = 0.15;
    crow.velocityX = -10
    crow.y = Math.round(random(100,300))
    crowGroup.add(crow);
  }
}

function spawnSnowman () {
  if (frameCount % 120 === 0){
    snowman = createSprite(width-10,150,50,50)
    snowman.addImage(obstacleImg);
    snowman.scale = 0.05;
    snowman.velocityX = -10
    snowman.y = Math.round(random(100,300))
    snowmanGroup.add(snowman);
  }
}

function spawnStars () {
  if (frameCount % 80 === 0){
    star = createSprite(width-10,150,50,50)
    star.addImage(starImg);
    star.scale = 0.15;
    star.velocityX = -10
    star.y = Math.round(random(100,300))
    starGroup.add(star);
  }
}


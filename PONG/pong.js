//using
// https://codepen.io/yashbhardwaj/pen/iqBac?editors=0010
// for reference


var canvas = document.getElementById("canvas"),
context = canvas.getContext('2d'),
ball = {},
paddle1 = {},
paddle2 = {},
 width = 500,
height = 500,
 canvas.width = width,
 canvas.height = height;

var step = function(){
 update();
 render();
 animate(step);
};


var update = function(){
paintCanvas();
};

function paintCanvas() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, W, H);
}

var render = function(){
  context.fillStyle = "#adf442";
  context.fillRect(0,0,width,height);
};

ball {
var x;
var y;
var speedX;
var speedY;
var ballSize = 70;
var r = ballSize/2;
var score1 = 0;
var score2 = 0;
 boolean contact = false;

  Ball() {
    this.x = width/2;
    this.y = height/2;
    this.speedX = random(-5, 5);
    this.speedY = random(-5, 5) + 3;
  }
move: function() {
    println(paddle2.h) ;
    if (y > height - (ballSize/2) || y < (ballSize/2)) {
      this.speedY = -this.speedY ;
    } else if (x+r > paddle2.x && x+r < paddle2.x + 20 && y+ballSize <= paddle2.y +200 && y >= paddle2.y) {
     this.speedX = -this.speedX ;
      this.speedY = -this.speedY ;
    } else if (x - r < paddle1.x  &&  x-r > paddle1.x - 20 && y+ballSize <= paddle1.y +200 && y >= paddle1.y) {
      this.speedX = -this.speedX ;
      this.speedY = -this.speedY ;
    }
    //LOSE CHECK
    if (x < 0) {
      score2++;
      Reset();
    } else if (x > width) {
      score1++;
      Reset();
    }
    this.x += speedX;
    this.y += speedY;
    fill(255);
    ellipse(x, y, ballSize/2, ballSize/2);
    //image(pong, x, y, ballSize, ballSize);
  }

reset: function() {
    this.speedX = random(-5, 5);
    this.speedY = random(-5, 5) + 3;
   this.x = width/2;
    this.y = height/2;
  }

score: function() {
    ctx.fill(255);
    ctx.text(score2, 100, 50);
    ctx.text(score1, width-100, 50);
  }
};

function Paddle {
  boolean up = false;
  boolean down = false;
 var x;
var y;
var speed;
var w;
var h;
  Paddle(float tempX) {
    x = tempX;
    y = height/2;
    h = rectSize - y;
  }
move: function () {
    if (up == true) {
      this.y-=5;
    }
    if (down==true) {
      this.y+=5;
    }
    this.w = x - 20;
    rect(x, y, 20, rectSize);
  }
}


function keyPressed() {
  if (key==CODED) {
    if (keyCode==UP) {
      paddle1.up = true;
    }
    if (keyCode==DOWN) {
      paddle1.down = true;
    }
  }
  if (key== 'W' || key== 'w') {
    paddle2.up = true;
  }      
  if (key== 'S' || key== 's') {
    paddle2.down = true;
  }
}
function keyReleased() {
  if (key==CODED) {
    if (keyCode==UP) {
      paddle1.up = false;
    }
    if (keyCode==DOWN) {
      paddle1.down = false;
    }
  }
  if (key == 'W'|| key== 'w') {
    paddle2.up = false;
  }      
  if (key == 'S'|| key== 's') {
    paddle2.down = false;
  }
}

function render () {
  line();
  paddle1.Move();
  paddle2.Move();
  ball.Move();
  ball.Score();
}


//Draws middle line
function line() {
  background(0);
  for (int i = 0; i < height; i+=60)
  {
    stroke(255);
    strokeWeight(10);
    line(width/2, i, width/2, i + 30);
  }
}
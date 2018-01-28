Paddle paddle1;
Paddle paddle2;
Ball ball;
PImage pong;
int rectSize = 100;

class Ball {
  float x;
  float y;
  float speedX;
  float speedY;
  float ballSize = 70;
  float r = ballSize/2;
  int score1 = 0;
  int score2 = 0;
  boolean contact = false;

  Ball() {
    x = width/2;
    y = height/2;
    speedX = random(-5, 5);
    speedY = random(-5, 5);
  }

  void Move() {

    if (y > height - (ballSize/2) || y < (ballSize/2)) {
      speedY = -speedY;
    } else if ( speedX - r < paddle2.w + 10 && speedY <= paddle2.y + paddle2.h && speedY >= paddle2.y){ //THIS SHLD WORK
      speedX = -speedX;
      speedY = -speedY;
      //right
    } else if (speedX + r > 570 - paddle1.w && speedY <= paddle1.y + paddle1.h && speedY >= paddle1.y) {
      speedX = -speedX;
      speedY = -speedY;
    }
    //LOSE CHECK
    if (x < 0) {
      score2++;
      Reset();
    } else if (x > width) {
      score1++;
      Reset();
    }
    x += speedX;
    y += speedY;
    fill(255);
    //ellipse(x,y,ballSize,ballSize);
    image(pong, x, y, ballSize, ballSize);
  }

  void Reset() {
    speedY = random(-6,6);
    speedX = random(-6,6);
    x = width/2;
    y = height/2;
  }

  void Score() {
    fill(255);
    text(score2, 100, 50);
    text(score1, width-100, 50);
  }
}

class Paddle {
  boolean up = false;
  boolean down = false;
  float x;
  float y;
  float speed;
  float w;
  float h;
  Paddle(float tempX) {
    x = tempX;
    y = height/2;
    h = rectSize - y;
  }
  void Move () {
    if (up == true) {
      y-=5;
    }
    if (down==true) {
      y+=5;
    }
    w = x - 20;
    rect(x, y, 20, rectSize);
  }
}


void setup() {
  background(0);
  size(600, 400);
  paddle1 = new Paddle(10);
  paddle2 = new Paddle(570);
  ball = new Ball();
  pong = loadImage("me.png");
}

void keyPressed() {
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
void keyReleased() {
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
void draw () {
  line();
  paddle1.Move();
  paddle2.Move();
  ball.Move();
  ball.Score();
}



void line() {
  background(0);
  for (int i = 0; i < height; i+=60)
  {
    stroke(255);
    strokeWeight(10);
    line(width/2, i, width/2, i + 30);
  }
}
var h, m, s;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  let h= hour();
  text('Current hour:\n' + h, 5, 50);
  let m= minute();
  text('Current hour:\n' + m, 5, 50);
  let s= second();
  text('Current hour:\n' + s, 5, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();

  angleMode(DEGREES);


  hAngle= map(h, 0, 60, 0, 360);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0)
  mAngle= map(m, 0, 60, 0, 360);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0)
  sAngle= map(s, 0, 60, 0, 360);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0)

  if (frameCount%12===0)
  rotate(sAngle,mAngle,hAngle)
}
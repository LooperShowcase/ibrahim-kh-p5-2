let img;
function preload() {
  img = loadImage("braithwaite.jpg");
}
function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  // The same as doing: background(220); or --> background(220,220,220);
  background(122, 112, 0);
  translate(width / 2, height / 2);
  rotate(-90);
  let sc = second();
  let mn = minute();
  let hr = hour();
  noFill();
  line(0, 0);
  strokeWeight(8);
  //Seconds
  stroke(37, 2, 194);
  let SecondANG = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, SecondANG);
  push();
  rotate(SecondANG);
  line(0, 0, 150, 0);
  pop();
  //Minutes
  stroke(125, 4, 4);
  let MinuteANG = map(mn, 0, 60, 0, 360) + map(sc, 0, 60, 0, 6);
  arc(0, 0, 210, 210, 0, MinuteANG);
  push();
  rotate(MinuteANG);
  line(0, 0, 105, 0);
  pop();
  //Hours
  stroke(237, 222, 7);
  let HourANG = map(hr % 12, 0, 12, 0, 360) + map(mn, 0, 60, 0, 6);
  arc(0, 0, 120, 120, 0, HourANG);
  push();
  rotate(HourANG);
  line(0, 0, 60, 0);
  pop();
  //text
  push();
  stroke(0);
  rotate(90);
  textSize(20);
  strokeWeight(1);
  text("12", -10, -170);
  text("3", 170, 0);
  text("6", -10, 180);
  text("9", -170, 0);

  pop();
  //point

  push();
  rotate(90);
  image(img, -25, -25, 50, 50);
  pop();
}

var p5Canvas;
var myName;

function setup() {
  p5Canvas = createCanvas(800, 600);
  p5Canvas.parent("#p5-canvas");
  myName = select("#my-name");
  myName.html("Valencia"); // enter your name here!
}

 /*
  full reference: https://p5js.org/reference/
  line: https://p5js.org/reference/#/p5/line
  rectangle: https://p5js.org/reference/#/p5/rect
  ellipse: https://p5js.org/reference/#/p5/ellipse
  arc: https://p5js.org/reference/#/p5/arc
  background color: https://p5js.org/reference/#/p5/background
  shape color: https://p5js.org/reference/#/p5/fill
  line color, weight, etc: https://p5js.org/reference/#/p5/stroke
 */

// Write all your code inside the draw() function below!
function draw() {
  // Example. You can remove when you're ready!
  //background("red");
  fill(255, 204, 0);    // Always call fill() before the shape you want to fill in.
  rect(30, 20, 55, 55); // Draw a 30x20 pixel rectangle at coordinate (55,55)
fill(255, 204, 0)
triangle(150, 195, 178, 150, 206, 195);
drawTwoCircles();
drawTriangle();
drawMouseCircle();

}

function drawTwoCircles(){
  fill("blue");
  ellipse(500, 400, 55, 55);
  ellipse(400, 400, 55, 55);

}

function drawTriangle(){
  fill("pink");
  triangle(250, 295, 278, 250, 306, 295);
}

function drawMouseCircle(){
  if (mouseIsPressed) {
    fill(117, 191, 47);
  } else {
    fill(210, 137, 249);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
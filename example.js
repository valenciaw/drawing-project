var p5Canvas;
var myName;

function setup() {
  p5Canvas = createCanvas(800, 600);
  p5Canvas.parent("#p5-canvas");
  myName = select("#my-name");
  myName.html("Teacher");
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
  background(255, 168, 241);

  // head
  fill(255, 204, 0);
  ellipse(width / 2, height / 2 - 100, 175, 175);

  // eyes
  fill(0, 181, 111);
  ellipse(width / 2 - 40, height / 2 - 110, 20, 20);
  ellipse(width / 2 + 40, height / 2 - 110, 20, 20);

  // mouth
  arc(width / 2, height / 2 - 60, 100, 60, radians(0), radians(180));

  // body
  line(width / 2, height / 2, width / 2, height / 2 + 180);

  // arms
  line(width / 2, height / 2 + 60, width / 2 - 80, height / 2 - 10);
  line(width / 2, height / 2 + 60, width / 2 + 80, height / 2 - 10);

  // legs
  line(width / 2, height / 2 + 180, width / 2 - 80, height / 2 + 220);
  line(width / 2, height / 2 + 180, width / 2 + 80, height / 2 + 220);
}

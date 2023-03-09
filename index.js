function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    //canvas.position(windowWidth/2 - (windowWidth/4), 0);
    background(204);
    fill("black");
    let circle = ellipse(50, 40, 50);
    text("press c for circle", 25, 80);
    let square = rect(25, 100, 50, 50);
    text("press s for square", 25, 175);
    let rectangle = rect(25, 200, 50, 100);
    text("press r for rectangle", 25, 325);
  }

  function draw() {
  }

  function mousePressed() {

  }
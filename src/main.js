const CANVAS_WIDTH = 401;
const CANVAS_HEIGHT = 600;

const EntityList = [];

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT).parent("canvasblock");
  background(120);
  EntityList.push(new Square(200, 200, 80, 80, false, Colors.random));
  EntityList.push(
    new ClickableSquare(0, CANVAS_HEIGHT - 81, 80, 80, true, Colors.all[0])
  );
  EntityList.push(
    new ClickableSquare(80, CANVAS_HEIGHT - 81, 80, 80, true, Colors.all[1])
  );
  EntityList.push(
    new ClickableSquare(160, CANVAS_HEIGHT - 81, 80, 80, true, Colors.all[2])
  );
  EntityList.push(
    new ClickableSquare(240, CANVAS_HEIGHT - 81, 80, 80, true, Colors.all[3])
  );
  EntityList.push(
    new ClickableSquare(320, CANVAS_HEIGHT - 81, 80, 80, true, Colors.all[4])
  );
}

function mouseClicked() {
  EntityList.forEach(square => square.isClickable && square.clicked());
}

function draw() {
  EntityList.forEach(square => {
    fill(square.color);
    square.show();
  });
}

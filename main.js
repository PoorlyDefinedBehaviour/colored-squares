const CANVAS_WIDTH = 401;
const CANVAS_HEIGHT = 600;

const EntityList = [];
const ProjectileList = [];
let points = 0;

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT).parent("canvasblock");
  textSize(32);

  EntityList.push(
    new Square(0, CANVAS_HEIGHT - 81, 80, 80, Colors.all[0], true)
  );
  EntityList.push(
    new Square(80, CANVAS_HEIGHT - 81, 80, 80, Colors.all[1], true)
  );
  EntityList.push(
    new Square(160, CANVAS_HEIGHT - 81, 80, 80, Colors.all[2], true)
  );
  EntityList.push(
    new Square(240, CANVAS_HEIGHT - 81, 80, 80, Colors.all[3], true)
  );
  EntityList.push(
    new Square(320, CANVAS_HEIGHT - 81, 80, 80, Colors.all[4], true)
  );

  SquareCreator.createRandomSquare();
  SquareCreator.createRandomSquare();
  SquareCreator.createRandomSquare();
  SquareCreator.createRandomSquare();
  SquareCreator.createRandomSquare();

  MovementControl.setSpeed(2);
}

function mouseClicked() {
  EntityList.forEach(square => square.isClickable && square.clicked());
}

function draw() {
  background(120);

  fill(255);
  text(points, CANVAS_WIDTH / 2, 40);

  EntityList.forEach(square => {
    fill(square.color);
    square.show();
  });

  ProjectileList.forEach(projectile => {
    fill(projectile.color);
    projectile.show();
  });

  MovementControl.moveSquares();
  MovementControl.moveProjectiles();
  ScreenEvents.didAnySquareDie();
  ScreenEvents.didAnyProjectileDie();
}

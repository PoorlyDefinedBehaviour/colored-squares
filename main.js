const CANVAS_WIDTH = 401;
const CANVAS_HEIGHT = 600;

const EntityList = [];
const ProjectileList = [];
let points = 0;

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT).parent("canvasblock");
  textSize(32);

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

  MovementControl.moveAll();
  MovementControl.moveProjectiles();
  ScreenEvents.didAnySquareDie();
  ScreenEvents.didAnyProjectileDie();
}

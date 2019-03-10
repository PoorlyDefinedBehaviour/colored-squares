class SquareCreator {
  static createRandomSquare() {
    const size = 80;
    const possiblePositions = [0, 80, 160, 240, 320];

    const _x =
      possiblePositions[Math.floor(Math.random() * possiblePositions.length)];

    let _y;
    let squaresAreTooClose;
    while (true) {
      squaresAreTooClose = false;
      _y = -possiblePositions[
        Math.floor(Math.random() * possiblePositions.length - 1) + 1
      ];

      EntityList.forEach(square => {
        if (square.x === _x && Math.abs(_y - square.y) < size) {
          squaresAreTooClose = true;
        }
      });

      if (!squaresAreTooClose) {
        break;
      }
    }
    EntityList.push(new Square(_x, _y, size, size, Colors.random));
  }
}

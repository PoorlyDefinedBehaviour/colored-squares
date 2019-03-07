class SquareCreator {
  constructor() {
    this.size = 80;
    this.possiblePositions = [0, 80, 160, 240, 320];
  }

  createRandomSquare() {
    const _x = this.possiblePositions[
      Math.floor(Math.random() * this.possiblePositions.length)
    ];

    let _y;
    let squaresAreTooClose;
    while (true) {
      squaresAreTooClose = false;
      _y = this.possiblePositions[
        Math.floor(Math.random() * this.possiblePositions.length)
      ];

      EntityList.forEach(square => {
        if (square.x === _x && Math.abs(_y - square.y) < this.size) {
          squaresAreTooClose = true;
        }
      });

      if (!squaresAreTooClose) {
        break;
      }
    }

    EntityList.push(
      new Square(_x, _y, this.size, this.size, false, Colors.random)
    );
  }
}

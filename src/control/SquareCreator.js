class SquareCreator {
  constructor() {
    this.size = 80;
    this.possiblePositions = [
      {
        x: 0,
        y: 0
      },
      {
        x: 80,
        y: 0
      },
      {
        x: 160,
        y: 0
      },
      {
        x: 240,
        y: 0
      },
      {
        x: 320,
        y: 0
      }
    ];
  }

  createRandomSquare() {
    let squaresAreToClose;
    let _position;
    while (square) {
      squaresAreToClose = false;

      _position = this.possiblePositions[
        Math.floor(Math.random() * this.possiblePositions.length)
      ];

      EntityList.forEach(square => {
        if (
          Math.abs(_position.x - square.x + (_position.y - square.y)) <
          this.size
        ) {
          squaresAreToClose = true;
        }
      });

      if (!squaresAreToClose) {
        break;
      }
    }

    EntityList.push(
      new Square(
        _position.x,
        _position.y,
        this.size,
        this.size,
        false,
        Colors.random
      )
    );
  }
}

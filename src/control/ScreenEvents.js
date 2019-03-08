class ScreenEvents {
  static didAnySquareDie() {
    EntityList.forEach((square, index) => {
      if (square.y + square.height > CANVAS_HEIGHT + 1) {
        EntityList.splice(index, 1);
        SquareCreator.createRandomSquare();
      }
    });
  }
}

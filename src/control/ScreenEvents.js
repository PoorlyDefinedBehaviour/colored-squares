class ScreenEvents {
  static didAnySquareDie() {
    EntityList.forEach((square, index) => {
      if (square.y + square.height > CANVAS_HEIGHT + 1) {
        switch (square.x) {
          case 0:
            EntityList[0].color.levels[0] === square.color.levels[0]
              ? points++
              : points--;
            break;

          case 80:
            EntityList[1].color.levels[0] === square.color.levels[0]
              ? points++
              : points--;
            break;

          case 160:
            EntityList[2].color.levels[0] === square.color.levels[0]
              ? points++
              : points--;
            break;

          case 240:
            EntityList[3].color.levels[0] === square.color.levels[0]
              ? points++
              : points--;
            break;

          case 320:
            EntityList[4].color.levels[0] === square.color.levels[0]
              ? points++
              : points--;
            break;
        }
        MovementControl.setSpeed(MovementControl.speed + 0.01);
        EntityList.splice(index, 1);
        SquareCreator.createRandomSquare();
      }

      ProjectileList.forEach((projectile, _index) => {
        if (
          projectile.x > square.x &&
          projectile.x < square.x + square.width &&
          projectile.y > square.y &&
          projectile.y < square.y + square.height &&
          !square.isClickable
        ) {
          if (square.color.levels[0] === projectile.color.levels[0]) {
            points--;
          }
          EntityList.splice(index, 1);
          ProjectileList.splice(_index, 1);
          SquareCreator.createRandomSquare();
        }
      });
    });
  }

  static didAnyProjectileDie() {
    ProjectileList.forEach((projectile, index) => {
      if (projectile.y < 0) {
        ProjectileList.splice(index, 1);
      }
    });
  }
}

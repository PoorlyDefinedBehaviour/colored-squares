class ScreenEvents {
  static didAnySquareDie() {
    EntityList.forEach((square, index) => {
      if (square.y + square.size > CANVAS_HEIGHT + 1) {
        switch (square.x) {
          case 0:
            JSON.stringify(EntityList[0].color) === JSON.stringify(square.color)
              ? points++
              : points--;
            break;

          case 80:
            JSON.stringify(EntityList[1].color) === JSON.stringify(square.color)
              ? points++
              : points--;
            break;

          case 160:
            JSON.stringify(EntityList[2].color) === JSON.stringify(square.color)
              ? points++
              : points--;
            break;

          case 240:
            JSON.stringify(EntityList[3].color) === JSON.stringify(square.color)
              ? points++
              : points--;
            break;

          case 320:
            JSON.stringify(EntityList[4].color) === JSON.stringify(square.color)
              ? points++
              : points--;
            break;
        }
        MovementControl.setSpeed(MovementControl.speed + 0.05);
        EntityList.splice(index, 1);
        SquareCreator.createRandomSquare();
      }

      ProjectileList.forEach((projectile, _index) => {
        if (
          projectile.x > square.x &&
          projectile.x < square.x + square.size &&
          projectile.y > square.y &&
          projectile.y < square.y + square.size &&
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

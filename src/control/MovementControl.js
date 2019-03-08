class MovementControl {
  static setSpeed(_speed) {
    this.speed = _speed;
  }

  static moveAll() {
    EntityList.forEach(square => {
      if (square.isClickable) return;

      square.y += this.speed;
    });
  }

  static moveProjectiles() {
    ProjectileList.forEach(projectile => {
      projectile.y -= this.speed;
    });
  }
}

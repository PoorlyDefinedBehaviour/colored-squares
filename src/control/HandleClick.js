const handleClick = square => {
  if (
    mouseX >= square.x &&
    mouseX <= square.x + square.size &&
    mouseY >= square.y &&
    mouseY <= square.y + square.size
  ) {
    ProjectileList.push(
      new Projectile(
        square.x + square.size / 2,
        square.y + square.size / 2,
        square.size * 0.1,
        square.color
      )
    );
  }
};

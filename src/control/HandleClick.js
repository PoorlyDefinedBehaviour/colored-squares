const handleClick = square => {
  if (
    mouseX >= square.x &&
    mouseX <= square.x + square.width &&
    mouseY >= square.y &&
    mouseY <= square.y + square.height
  ) {
    ProjectileList.push(
      new Projectile(
        square.x + square.width / 2,
        square.y + square.height / 2,
        square.color
      )
    );
  }
};

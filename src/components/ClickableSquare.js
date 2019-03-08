class ClickableSquare extends Square {
  clicked() {
    if (
      mouseX >= this.x &&
      mouseX <= this.x + this.width &&
      mouseY >= this.y &&
      mouseY <= this.y + this.height
    ) {
      ProjectileList.push(
        new Projectile(
          this.x + this.width / 2,
          this.y + this.height / 2,
          this.color
        )
      );
      print(ProjectileList);
    }
  }
}

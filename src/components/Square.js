class Square {
  constructor(x, y, width, height, _color, isClickable = false) {
    this.color = _color;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.isClickable = isClickable;
  }

  show() {
    rect(this.x, this.y, this.width, this.height);
  }

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

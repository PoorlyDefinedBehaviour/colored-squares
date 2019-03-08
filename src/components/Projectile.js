class Projectile {
  constructor(_x, _y, _color) {
    this.x = _x;
    this.y = _y;
    this.color = _color;
  }

  show() {
    ellipse(this.x, this.y, TWO_PI);
  }
}

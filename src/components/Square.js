class Square {
  constructor(x, y, width, height, isClickable = false, _color) {
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
}

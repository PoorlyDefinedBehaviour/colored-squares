class Square {
  constructor(_x, _y, _width, _height, _color, _isClickable = false) {
    this.color = _color;
    this.x = _x;
    this.y = _y;
    this.width = _width;
    this.height = _height;
    this.isClickable = _isClickable;
  }

  show() {
    rect(this.x, this.y, this.width, this.height);
  }
}

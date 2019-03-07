class ClickableSquare extends Square {
  clicked() {
    if (
      mouseX >= this.x &&
      mouseX <= this.x + this.width &&
      mouseY >= this.y &&
      mouseY <= this.y + this.height
    ) {
      console.log("I was clicked, and my color is", this.color);
    }
  }
}

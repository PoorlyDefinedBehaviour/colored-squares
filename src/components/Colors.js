class Colors {
  static get random() {
    const colors = [
      color(33, 150, 243),
      color(244, 67, 54),
      color(156, 39, 176),
      color(76, 175, 80),
      color(255, 152, 0)
    ];

    return colors[Math.floor(Math.random() * colors.length)];
  }

  static get all() {
    return [
      color(33, 150, 243),
      color(244, 67, 54),
      color(156, 39, 176),
      color(76, 175, 80),
      color(255, 152, 0)
    ];
  }
}

const drawEntities = (...entities) => {
  entities.forEach(entity => {
    fill(entity.color);
    entity.show();
  });
};

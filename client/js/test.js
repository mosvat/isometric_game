






function next(a,b) {
  var x = (b.x - a.x),
      y = (b.y - a.y);
  
  return({
    x: a.x + (x > 0) ? 1 : (x < 0) ? -1 : 0,
    y: a.y + (y > 0) ? 1 : (y < 0) ? -1 : 0
  });
};
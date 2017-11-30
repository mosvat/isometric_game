






function next(a,b) {
  var x = (b.x - a.x),
      y = (b.y - a.y);
  
  return({
    x: a.x + (x > 0) ? 1 : (x < 0) ? -1 : 0,
    y: a.y + (y > 0) ? 1 : (y < 0) ? -1 : 0
  });
};


function cut(start = 0,width = 64,height = 32,count = 9){
  var str = "";
  
  var id = "g";
  
  for(var i = 0; i < count-1; i++){
    str += `
      a[${id+i}] = {
        img: "img/forest.png",
        x: ${start+width*i},
        y: 545
      };
    `;    
  }
  return str;
  
}
;(function() {

var _Layer_2 = function(app) {
  
  this.iso = {
    width: 64,
    height: 32
  };
  
  this.two = {
    width: 100,
    height: 100
  };
  
  this.units = (function() {
  var units = {};
  
  var _default = {
    img: "img/ground.png",
    x: 0,
		y: 0,
    w: 0,
		h: 0,
    _x: 0,
    _y: 0,
    _w: 0,
    _h: 0
  };
  
  units["r"] = {
    img: "img/layer_2.png",
    x: 0,
		y: 0,
    w: 256,
		h: 128
  };
  units["y"] = {
    img: "img/layer_2.png",
    x: 256,
		y: 0,
    w: 256,
		h: 128
  };
  
  units["b_1"] = {
    img: "img/buildings.png",
    x: 15,
		y: 12,
    w: 280,
		h: 250,
    _x: 6,
    _y: 300
  };
  
   units["b_2"] = {
    img: "img/cub.png",
    x: 0,
		y: 0,
    w: 198,
		h: 200,
    
    _x: 0,
    _y: 150,
    _w: 100,
    _h: 200
    
    
  };
  
  
  for(var key in units)
    units[key].__proto__ = _default;
  return units;
})();


this.map = [
    ["r","y","r","y","r","y","r","y","r","y"],
    ["y","r","y","r","y","r","y","r","y","r"],
    ["r","y","r","y","r","y","r","y","r","y"],
    ["y","r","y","r","y","b_1","y","r","y","r"],
    ["r","y","r","y","r","y","r","y","r","y"],
    ["y","r","y","r","y","r","y","r","y","r"],
    ["r","y","r","y","r","y","r","y","r","y"],
    ["y","r","y","r","b_2","r","y","r","y","r"],
    ["r","y","r","y","r","y","r","y","r","y"],
    ["y","r","y","r","y","r","y","r","y","r"],
  ];

 
  this.render = function() {
    for(var i = this.map.length-1; i >=0; i--)
    try{
      for(var j = 0; j < this.map[i].length; j++)
        app.renders.ground(j,i,this);
    }catch(err){
    };
  }
  
};

window.Layer_2 = _Layer_2;
})();
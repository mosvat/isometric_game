;(function() {

var _Layer_2 = function(app) {
  
  this.iso = {
    width: 40,
    height: 20
  };
  
  this.two = {
    width: 20,
    height: 20
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
    _y: -0.5,
    _w: 1,
    _h: 1
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
  };
  
   units["b_2"] = {
    img: "img/cub.png",
    x: 0,
		y: 0,
    w: 198,
		h: 200,
    _y: -1.5,
    _h: 2
  };
  
  
  for(var key in units)
    units[key].__proto__ = _default;
  return units;
})();


  this.map = [];

  this.map[33] = [];
  this.map[33][12] = "b_2";

  this.map[34] = [];
  this.map[34][11] = "b_2";
 
  this.render = function() {
    var arr = [];
    for(var i in this.map)
      for(var j in this.map[i])
        arr.unshift([i,j]);
    arr.forEach((e)=>{
      app.renders.ground(e[0],e[1],this);
    });  
  };
  
};

window.Layer_2 = _Layer_2;
})();
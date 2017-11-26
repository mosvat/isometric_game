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
  return units;
})();


this.map = [
    ["r","y","r","y","r","y","r","y","r","y"],
    ["y","r","y","r","y","r","y","r","y","r"],
    ["r","y","r","y","r","y","r","y","r","y"],
    ["y","r","y","r","y","r","y","r","y","r"],
    ["r","y","r","y","r","y","r","y","r","y"],
    ["y","r","y","r","y","r","y","r","y","r"],
    ["r","y","r","y","r","y","r","y","r","y"],
    ["y","r","y","r","y","r","y","r","y","r"],
    ["r","y","r","y","r","y","r","y","r","y"],
    ["y","r","y","r","y","r","y","r","y","r"],
  ];

 
  this.render = function() {
    for(var i = 0; i < this.map.length; i++)
    try{
      for(var j = 0; j < this.map[i].length; j++)
        app.renders.ground(j,i,this);
    }catch(err){
    };
  }
  
};

window.Layer_2 = _Layer_2;
})();
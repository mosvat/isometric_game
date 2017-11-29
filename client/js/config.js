(function() {

var config = function() {
  
 

 
 

this.grounds = (function() {
  var a = {};
  var _default = {
    img: "img/ground.png",
    x: 0,
		y: 0,
    w: 0,
		h: 0,
    iso: {
      width: 200,
      height: 100
    },
    _x: -100,
    _y: 0,
    _w: 200,
    _h: 100
  };
 
  a["g_1"] = {
    img: "img/ground.png",
    x: 200,
		y: 0,
    w: 200,
		h: 100
  };
 
  a["g_2"] = {
    img: "img/ground.png",
    x: 400,
		y: 0,
    w: 200,
		h: 100
  }; 
 
  for(var key in a)
    a[key].__proto__ = _default;
 
  return a;
})();
this.buildings = (function() {
  var units = {};
  
  var _default = {
    pos: {
      x: 0,
      y: 0
    },
    
    
    fiz: {
      x: 2,
      y: 2
    },
    
    img: "img/ground.png",
    x: 0,
		y: 0,
    w: 0,
		h: 0,
    
    iso: {
      width: 40,
      height: 20
    },
  
    _x: -20,
    _y: 0,
    _w: 40,
    _h: 20
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
  
  units["h_1"] = {
    img: "img/houses.png",
    x: 252,
		y: 13,
    w: 88,
		h: 102,
    _x: -50,
    _y: -67,
    _w: 80,
    _h: 92
  };
  
   units["b_2"] = {
    fiz: {
      x: 1,
      y: 1
    },
    img: "img/cub.png",
    x: 0,
		y: 0,
    w: 198,
		h: 200,
    _x: -20,
    _y: -20,
    _w: 40,
    _h: 40
  };
  
  
  for(var key in units){
    var u = units[key];
    units[key].__proto__ = _default;
    // if(u._w == "auto" || u._w == undefined) u._w = u._h * (u.w / u.h);
    // if(u._h == "auto" || u._h == undefined) u._h = u._w * (u.h / u.w);
  }
  return units;
})();
this.units = (function() {
  var _default = {
    img: "img/ground.png",
    x: 0,
		y: 0,
    w: 0,
		h: 0,
    iso: {
      width: 200,
      height: 100
    },
    _x: -100,
    _y: 0,
    _w: 200,
    _h: 100
  };
  
  var a = {};
  a["orc"] = {
    img: "img/ground.png",
    x: 200,
		y: 0,
    w: 200,
		h: 100
  };
 
  for(var key in a)
    a[key].__proto__ = _default;
 
  return a;
})();  
  

};

window.Config = config;
})();




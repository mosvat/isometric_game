(function() {

var config = function() {
  
 




this.objects = (function() {
  var objects = {};
  objects["g"] = {
  	"img": {
			"0": {
				"render": "pattern",
				"src": "img/forest.png",
				"_x": 0,
				"_y": 0,
				"_w": 50,
				"_h": 50,
				"x": 0,
				"y": 0,
				"w": 50,
				"h": 50,
				"sw": 50,
				"sh": 50
			}
		}
  }
  return objects;
})();





//========================= grounds =========================
this.grounds = (function() {
  var a = {};
  var _default = {
    img: "img/ground.png",
    x: 0,
		y: 0,
    w: 0,
		h: 0,
    _x: 0,
    _y: 50,
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

//========================= buildings =========================
this.buildings = (function() {
  var a = {};
  var _default = {
    img: "img/buildings.png",
    x: 0,
		y: 0,
    w: 0,
		h: 0,
    _x: 0,
    _y: 0
  };
 
  a["b_1"] = {
    img: "img/buildings.png",
    x: 15,
		y: 12,
    w: 280,
		h: 250,
    _x: 0,
    _y: 0
  };
 
  a["b_2"] = {
    img: "img/buildings.png",
    x: 400,
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




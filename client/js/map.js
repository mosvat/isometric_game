(function() {




window.block = {
  size: 100,
  width: 64,
  height: 32
}




window.objects = (function() {
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






window.units = (function() {
  var units = {};
  
  
  units["r"] = {
    img: "img/forest.png",
    x: 0,
		y: 0,
    w: 64,
		h: 32
  }; 
  
  units["g"] = {
    img: "img/forest.png",
    x: 64,
		y: 0,
    w: 64,
		h: 32
  };   

  units["b"] = {
    img: "img/forest.png",
    x: 128,
		y: 0,
    w: 64,
		h: 32
  };   
  
  units[0] = {
    img: "img/forest.png",
    x: 0,
		y: 0,
    w: 64,
		h: 32
  };
  
  units["w"] = {
    img: "img/forest.png",
    x: 512,
		y: 545,
    w: 64,
		h: 32
  };
  
  
  units["b_r"] = {
    img: "img/forest.png",
    x: 0,
		y: 545,
    w: 64,
		h: 32
  };
  
  units["b_t"] = {
    img: "img/forest.png",
    x: 128,
		y: 545,
    w: 64,
		h: 32
  };  

  units["b_d"] = {
    img: "img/forest.png",
    x: 256,
		y: 545,
    w: 64,
		h: 32
  };  
  
   units["b_l"] = {
    img: "img/forest.png",
    x: 384,
		y: 545,
    w: 64,
		h: 32
  }; 

    units["b_t_r"] = {
    img: "img/forest.png",
    x: 512,
		y: 545,
    w: 64,
		h: 32
  };
  
    units["b_d_l"] = {
    img: "img/forest.png",
    x: 640,
		y: 545,
    w: 64,
		h: 32
  };
  
    units["b_r_d"] = {
    img: "img/forest.png",
    x: 768,
		y: 545,
    w: 64,
		h: 32
  };
  
    units["b_t_l"] = {
    img: "img/forest.png",
    x: 896,
		y: 545,
    w: 64,
		h: 32
  };
  
  units[3] = {
    img: "img/forest.png",
    x: 0,
		y: 673,
    w: 64,
		h: 32
  };

  units["gr"] = {
    img: "img/forest.png",
    x: 384,
		y: 33,
    w: 64,
		h: 32
  };
  
  return units;
})();






window.map = (function() {
  var map = {};
  map.structure = [
	["w","w","gr","gr","gr","w","w","w","w","w","w","w","w","w","w","w","w","w","w","gr","gr","gr","w","w","w"],
	["w","gr","gr","w","w","w","w","w","gr","w","w","w","w","gr","gr","gr","w","w","w","w","w","3","w","w","w"],
	["gr","gr","gr","w","gr","w","gr","gr","gr","3","gr","gr","gr","gr","w","gr","w","3","w","w","b_t_r","b_t_r","w","w","gr"],
	["gr","w","w","gr","gr","w","gr","gr","w","w","w","gr","gr","w","gr","gr","b_t_r","b_t_r","gr","gr","gr","b_r","3","gr","gr"],
	["gr","w","gr","gr","gr","gr","gr","w","w","w","w","w","w","gr","gr","w","b_t_r","gr","gr","gr","b_t_r","b_l","gr","gr","gr"],
	["gr","w","gr","gr","gr","gr","w","w","3","w","w","w","gr","gr","gr","gr","gr","gr","gr","w","w","w","w","w","w"],
	["gr","w","w","gr","gr","w","w","3","3","w","w","gr","gr","gr","gr","gr","gr","w","w","3","w","w","w","w","gr"],
	["gr","w","gr","gr","gr","w","w","w","w","gr","gr","gr","gr","gr","gr","gr","gr","w","w","b_t_r","w","w","w","gr","gr"],
	["gr","gr","gr","gr","gr","gr","w","gr","gr","gr","gr","gr","gr","gr","gr","gr","3","w","gr","gr","b_r","w","w","gr","gr"],
	["w","gr","gr","gr","gr","gr","gr","gr","w","w","b_t","b_t","b_t","w","gr","gr","w","gr","gr","gr","b_r","w","w","w","gr"],
	["w","gr","gr","w","gr","gr","gr","w","w","w","3","w","3","w","gr","gr","gr","gr","gr","gr","b_r","w","3","w","gr"],
	["w","gr","w","w","w","gr","gr","gr","w","w","w","w","3","gr","gr","gr","gr","gr","gr","gr","b_r","w","w","w","gr"],
	["w","gr","w","3","w","w","gr","gr","gr","w","gr","gr","gr","gr","gr","gr","gr","gr","gr","gr","b_r","w","w","gr","gr"],
	["w","gr","gr","w","w","gr","gr","gr","gr","gr","gr","gr","gr","gr","gr","gr","b_t","b_t","b_t","b_t","b_l","w","w","gr","w"],
	["w","w","gr","gr","gr","gr","w","w","w","gr","gr","gr","gr","gr","gr","b_r","w","w","w","3","3","w","w","gr","gr"],
	["w","gr","gr","gr","gr","w","w","w","w","w","b_t","b_t","gr","gr","gr","b_r","w","w","w","3","w","3","w","w","gr"],
	["w","gr","w","gr","w","w","w","gr","w","w","gr","w","b_t","b_t","b_t","b_l","w","w","w","3","3","w","w","gr","gr"],
	["w","gr","w","w","w","w","gr","gr","gr","gr","gr","w","w","w","gr","3","w","w","w","w","3","w","3","gr","w"],
	["w","gr","w","w","gr","gr","gr","gr","w","w","w","w","w","w","gr","w","w","gr","w","3","w","w","w","gr","w"],
	["w","gr","gr","w","w","gr","gr","gr","gr","w","w","w","w","w","gr","w","w","gr","gr","gr","gr","w","gr","gr","w"],
	["w","gr","gr","gr","gr","gr","w","gr","gr","gr","3","w","w","w","gr","gr","w","3","w","w","gr","w","gr","w","w"],
	["w","w","w","w","w","w","w","w","w","w","w","gr","gr","gr","gr","gr","gr","gr","w","w","gr","gr","gr","w","w"],
	["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","gr","gr","gr","w","w"],
	["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w"]
];
  return map;
})();








})();
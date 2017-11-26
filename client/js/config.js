(function() {

var config = function() {
  
  




this.block = {
  size: 100,
  width: 64,
  height: 32
}




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






this.units = (function() {
  var units = {};
  var _p = {
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
    units["rif"] = {
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
  
  
  units["b_r"] = {
    img: "img/forest.png",
    x: 0,
		y: 545,
    w: 64,
		h: 32
  };
  
  units["b_t"] = {
    img: "img/forest.png",
    x: 64,
		y: 545,
    w: 64,
		h: 32
  };  

  units["b_d"] = {
    img: "img/forest.png",
    x: 128,
		y: 545,
    w: 64,
		h: 32
  };  
  
   units["b_l"] = {
    img: "img/forest.png",
    x: 192,
		y: 545,
    w: 64,
		h: 32
  }; 

    units["b_t_r"] = {
    img: "img/forest.png",
    x: 256,
		y: 545,
    w: 64,
		h: 32
  };
  
    units["b_d_l"] = {
    img: "img/forest.png",
    x: 320,
		y: 545,
    w: 64,
		h: 32
  };
  
    units["b_r_d"] = {
    img: "img/forest.png",
    x: 384,
		y: 545,
    w: 64,
		h: 32
  };
  
    units["b_t_l"] = {
    img: "img/forest.png",
    x: 448,
		y: 545,
    w: 64,
		h: 32
  };
  

    units["0"] = {
    img: "img/forest.png",
    x: 512,
		y: 33,
    w: 64,
		h: 32
  };
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
  return units;
})();






this.map = (function() {
  var map = {};
  map.structure = [
	["w","w","b_l","gr","gr","w","w","w","w","w","w","w","w","w","w","w","w","w","w","b_l","gr","gr","w","w","w"],
	["w","b_l","gr","w","w","w","w","w","b_t_r","w","w","w","w","gr","gr","b_t_r","w","w","w","w","w","rif","w","w","w"],
	["b_l","gr","gr","w","b_t_r","w","b_t_l","gr","gr","rif","b_t_l","gr","gr","gr","w","b_l","w","rif","w","w","b_t_r","w","w","w","b_t_l"],
	["b_l","w","w","b_t_l","gr","w","gr","gr","w","w","w","b_d_l","b_r_d","w","b_t_r","b_d_l","b_t_r","b_t_r","gr","gr","gr","b_t","b_t","b_t","gr"],
	["b_l","w","b_t_l","gr","gr","gr","gr","w","w","w","w","w","w","b_t_l","gr","w","b_t_r","gr","gr","gr","b_d","b_d","b_d","b_d","b_d"],
	["b_l","w","b_d_l","gr","gr","gr","w","w","rif","w","w","w","b_t_l","gr","gr","gr","gr","gr","gr","b_d","w","w","w","w","w"],
	["b_l","w","w","gr","gr","w","w","rif","rif","w","w","b_t_l","gr","gr","gr","gr","gr","b_d","b_d","rif","w","w","w","w","b_t_l"],
	["b_l","w","gr","gr","gr","w","w","w","w","b_t_l","gr","gr","gr","gr","gr","gr","b_r_d","w","w","b_t_r","w","gr","w","b_t_l","gr"],
	["b_d_l","gr","gr","gr","gr","gr","w","b_t_l","gr","gr","gr","gr","gr","gr","gr","gr","rif","w","gr","gr","b_t_r","w","w","b_d_l","gr"],
	["w","b_l","gr","gr","gr","gr","gr","gr","w","w","b_l","b_d","b_d","b_l","gr","gr","w","gr","gr","gr","b_r","w","w","w","b_l"],
	["w","b_l","gr","w","gr","gr","gr","w","w","w","rif","w","rif","b_l","gr","gr","gr","gr","gr","gr","b_r","w","rif","w","b_l"],
	["w","b_l","w","w","w","gr","gr","b_t_r","w","w","w","w","rif","gr","gr","gr","gr","gr","gr","gr","b_r","w","w","w","b_l"],
	["w","b_l","w","rif","w","w","gr","gr","b_t_r","w","gr","gr","gr","gr","gr","gr","gr","gr","gr","gr","b_r","w","w","b_t_l","gr"],
	["w","b_d_l","gr","w","w","gr","gr","gr","gr","gr","gr","gr","gr","gr","gr","gr","b_t","b_t","b_t","b_t","b_r_d","w","w","b_l","w"],
	["w","w","b_l","gr","gr","b_r_d","w","w","w","gr","gr","gr","gr","gr","gr","b_r","w","w","w","rif","rif","w","w","b_d_l","gr"],
	["w","b_l","gr","gr","b_r_d","w","w","w","w","w","b_t","b_t","gr","gr","gr","b_r","w","w","w","rif","w","rif","w","w","gr"],
	["w","b_l","w","b_d_l","w","w","w","b_t_l","w","w","gr","b_d","b_d","b_d","b_d","b_r_d","w","w","w","rif","rif","w","w","b_t_l","b_r_d"],
	["w","b_l","w","w","w","w","b_t_l","gr","gr","gr","gr","w","w","w","b_l","rif","w","w","w","w","rif","w","rif","gr","w"],
	["w","b_l","w","w","b_t_l","gr","gr","gr","w","w","w","w","w","w","b_l","w","w","b_t_r","w","rif","w","w","w","gr","w"],
	["w","b_l","b_t_l","w","w","gr","gr","gr","b_t_r","w","w","w","w","w","b_l","w","w","b_d_l","gr","gr","b_t_r","w","b_t_l","b_r_d","w"],
	["w","b_d_l","gr","gr","gr","gr","w","b_d_l","gr","gr","rif","w","w","w","b_l","b_t_r","w","rif","w","w","gr","w","gr","w","w"],
	["w","w","w","w","w","w","w","w","w","w","w","b_l","gr","gr","gr","gr","gr","gr","w","w","gr","gr","gr","w","w"],
	["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","b_d_l","gr","b_r_d","w","w"],
	["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w"],
];
  return map;
})();
  
  
  
  
  
  
  
};


window.Config = config;
})();




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
  
  units[1] = {
    img: "img/forest.png",
    x: 256,
		y: 545,
    w: 64,
		h: 32
  };
  
  units[2] = {
    img: "img/forest.png",
    x: 128,
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

  units[4] = {
    img: "img/forest.png",
    x: 128,
		y: 673,
    w: 64,
		h: 32
  }; 

  units[4] = {
    img: "img/forest.png",
    x: 0,
		y: 33,
    w: 64,
		h: 32
  };   

  units[5] = {
    img: "img/forest.png",
    x: 0,
		y: 161,
    w: 64,
		h: 32
  }; 

  
  return units;
})();






window.map = (function() {
  var map = {};
  map.structure = [
    [1,1,1,1,1],
    [2,2,2,2,2],
    [3,3,3,3,3],
    [4,4,4,4,4],
    [1,2,3,4,1]
  ];
  return map;
})();








})();
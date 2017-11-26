;(function() {

var _Layer_1 = function(app) {
  
  this.iso = {
    width: 128,
    height: 64
  };
  
  this.two = {
    width: 100,
    height: 100
  };
  
  this.units = (function() {
  var units = {};
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


this.map = [
    ["w","w","b_l","gr","gr","w","w","w","w","w","w","w","w","w","w","w","w","w","w","b_l"],
    ["w","b_l","gr","w","w","w","w","w","b_t_r","w","w","w","w","gr","gr","b_t_r","w","w","w","w"],
    ["b_l","gr","gr","w","b_t_r","w","b_t_l","gr","gr","rif","b_t_l","gr","gr","gr","w","b_l","w","rif","w","w"],
    ["b_l","w","w","b_t_l","gr","w","gr","gr","w","w","w","b_d_l","b_r_d","w","b_t_r","b_d_l","b_t_r","b_t_r","gr","gr"],
    ["b_l","w","b_t_l","gr","gr","gr","gr","w","w","w","w","w","w","b_t_l","gr","w","b_t_r","gr","gr","gr"],
    ["b_l","w","b_d_l","gr","gr","gr","w","w","rif","w","w","w","b_t_l","gr","gr","gr","gr","gr","gr","b_d"],
    ["b_l","w","w","gr","gr","w","w","rif","rif","w","w","b_t_l","gr","gr","gr","gr","gr","b_d","b_d","rif"],
    ["b_l","w","gr","gr","gr","w","w","w","w","b_t_l","gr","gr","gr","gr","gr","gr","b_r_d","w","w","b_t_r"],
    ["b_d_l","gr","gr","gr","gr","gr","w","b_t_l","gr","gr","gr","gr","gr","gr","gr","gr","rif","w","gr","gr"],
    ["w","b_l","gr","gr","gr","gr","gr","gr","w","w","b_l","b_d","b_d","b_l","gr","gr","w","gr","gr","gr"],
    ["w","b_l","gr","w","gr","gr","gr","w","w","w","rif","w","rif","b_l","gr","gr","gr","gr","gr","gr"],
    ["w","b_l","w","w","w","gr","gr","b_t_r","w","w","w","w","rif","gr","gr","gr","gr","gr","gr","gr"],
    ["w","b_l","w","rif","w","w","gr","gr","b_t_r","w","gr","gr","gr","gr","gr","gr","gr","gr","gr","gr"],
    ["w","b_d_l","gr","w","w","gr","gr","gr","gr","gr","gr","gr","gr","gr","gr","gr","b_t","b_t","b_t","b_t"],
    ["w","w","b_l","gr","gr","b_r_d","w","w","w","gr","gr","gr","gr","gr","gr","b_r","w","w","w","rif"],
    ["w","b_l","gr","gr","b_r_d","w","w","w","w","w","b_t","b_t","gr","gr","gr","b_r","w","w","w","rif"],
    ["w","b_l","w","b_d_l","w","w","w","b_t_l","w","w","gr","b_d","b_d","b_d","b_d","b_r_d","w","w","w","rif"],
    ["w","b_l","w","w","w","w","b_t_l","gr","gr","gr","gr","w","w","w","b_l","rif","w","w","w","w"],
    ["w","b_l","w","w","b_t_l","gr","gr","gr","w","w","w","w","w","w","b_l","w","w","b_t_r","w","rif"],
    ["w","b_l","b_t_l","w","w","gr","gr","gr","b_t_r","w","w","w","w","w","b_l","w","w","b_d_l","gr","gr"],
    ["w","b_d_l","gr","gr","gr","gr","w","b_d_l","gr","gr","rif","w","w","w","b_l","b_t_r","w","rif","w","w"],
    ["w","w","w","w","w","w","w","w","w","w","w","b_l","gr","gr","gr","gr","gr","gr","w","w"],
    ["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w"],
    ["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w"]
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

window.Layer_1 = _Layer_1;
})();
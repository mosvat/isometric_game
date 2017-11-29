(function() {

var config = function() {
  
 

 
 

this.grounds = (function() {
  var a = {};
  var _default = {
    img: "img/forest.png",
    x: 384,
		y: 33,
    
    w: 64,
    h: 32,
    
    iso: {
      width: 128,
      height: 64
    },
    
    _x: -64,
    _y: 0,
    _w: 128,
    _h: 64
  };
 
  
  
  a["w"] = {
    img: "img/forest.png",
    x: 512,
		y: 545
  };
  
  a["rif"] = {
    img: "img/forest.png",
    x: 0,
		y: 673
  };

  a["gr"] = {
    img: "img/forest.png",
    x: 384,
		y: 33
  };
  
 a["b_r"] = {
    img: "img/forest.png",
    x: 0,
		y: 545
  };
  
  a["b_t"] = {
    img: "img/forest.png",
    x: 128,
		y: 545
  };  

  a["b_d"] = {
    img: "img/forest.png",
    x: 256,
		y: 545
  };  
  
   a["b_l"] = {
    img: "img/forest.png",
    x: 384,
		y: 545
  }; 

  a["b_t_r"] = {
    img: "img/forest.png",
    x: 256,
		y: 545
  };
  //========================
  a["b_d_l"] = {
    img: "img/forest.png",
    x: 545,
		y: 640
  };
  
  a["b_r_d"] = {
    img: "img/forest.png",
    x: 768,
		y: 545
  };
  
  a["b_t_l"] = {
    img: "img/forest.png",
    x: 896,
		y: 545
  };
  //========================
  a["r"] = {
    img: "img/forest.png",
    x: 0,
		y: 0
  }; 
  
  a["g"] = {
    img: "img/forest.png",
    x: 64,
		y: 0
  };   

  a["b"] = {
    img: "img/forest.png",
    x: 128,
		y: 0
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
      x: 1,
      y: 1
    },
    
    img: "img/ground.png",
    x: 0,
		y: 0,
    w: 0,
		h: 0,
    cx: 0,
    cy: 0,
    
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
    
    cx: 0,
    cy: 0,
    
    fiz: {
      x: 2,
      y: 2
    },
    
    _x: 32,
    _y: 32,
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
    w: 200,
		h: 200,
    
    cx: 0,
    cy: 150,
    
    _x: 20,
    _y: 20,
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




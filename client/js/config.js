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
 
  


  a["gr"] = {
    img: "img/forest.png",
    x: 384,
		y: 33
  };
  

       a["g0"] = {
        img: "img/forest.png",
        x: 0,
        y: 545
      };
    
      a["g1"] = {
        img: "img/forest.png",
        x: 64,
        y: 545
      };
    
      a["g2"] = {
        img: "img/forest.png",
        x: 128,
        y: 545
      };
    
      a["g3"] = {
        img: "img/forest.png",
        x: 192,
        y: 545
      };
    
      a["g4"] = {
        img: "img/forest.png",
        x: 256,
        y: 545
      };
    
      a["g5"] = {
        img: "img/forest.png",
        x: 320,
        y: 545
      };
    
      a["g6"] = {
        img: "img/forest.png",
        x: 384,
        y: 545
      };
    
      a["g7"] = {
        img: "img/forest.png",
        x: 448,
        y: 545
      }; 
  
   a["g8"] = {
        img: "img/forest.png",
        x: 512,
        y: 545
      };
        a["g9"] = {
        img: "img/forest.png",
        x: 0,
        y: 97
      };
    
      a["g10"] = {
        img: "img/forest.png",
        x: 64,
        y: 97
      };
    
      a["g11"] = {
        img: "img/forest.png",
        x: 128,
        y: 97
      };
    
      a["g12"] = {
        img: "img/forest.png",
        x: 192,
        y: 97
      };
    
      a["g13"] = {
        img: "img/forest.png",
        x: 256,
        y: 97
      };
    
      a["g14"] = {
        img: "img/forest.png",
        x: 320,
        y: 97
      };
    
      a["g15"] = {
        img: "img/forest.png",
        x: 384,
        y: 97
      };
    
      a["g16"] = {
        img: "img/forest.png",
        x: 448,
        y: 97
      };
  
  
  
  
  for(var key in a)
    a[key].__proto__ = _default;
 
  window.j = a["b_t_l"];
 
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
  
  
    units["_n"] = {
    fiz: {
      x: 1,
      y: 1
    },
    img: "img/cub.png",
    
    x: 0,
		y: 0,
    w: 0,
		h: 0,
    
    cx: 0,
    cy: 0,
    
    _x: 0,
    _y: 0,
    _w: 40,
    _h: 40
  };
  
  
  units["_"] = {
    fiz: {
      x: 1,
      y: 1
    },
    img: "img/layer_2.png",
    
    x: 0,
		y: 0,
    w: 256,
		h: 128,
    
    cx: 0,
    cy: 128,
    
    _x: -20,
    _y: 0,
    _w: 40,
    _h: 20
  };  
  
  
   units["cub"] = {
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
    
    _x: -20,
    _y: -20,
    _w: 40,
    _h: 40
  };
  
  
  
   units["b_2"] = {
    fiz: {
      x: 4,
      y: 5
    },
    img: "img/building_2.png",
    
    w: 241,
		h: 189,
   
    _x: -50,
    _y: -50,
    _w: 128,
    _h: 128
  };
 
  units["b_3"] = {
    fiz: {
      x: 4,
      y: 4
    },
    img: "img/building_3.png",
    
    w: 180,
		h: 270,
   
    _x: -68,
    _y: -124,
    _w: 128,
    _h: 200
  };
  
  units["b_3v"] = {
    fiz: {
      x: 1,
      y: 1
    },
    img: "img/building_3_v.png",
    
    x: 0,
		y: 0,
    w: 107,
		h: 107,
    
    cx: 0,
    cy: 53,
    
    _x: -20,
    _y: -20,
    _w: 40,
    _h: 40
  };
    units["b_1"] = {
    fiz: {
      x: 5,
      y: 5
    },
    img: "img/building_1.png",
    
    w: 250,
		h: 190,
   
    _x: -85,
    _y: -30,
    _w: 170,
    _h: 128
  };

  units["btro50"] = {
    fiz: {
      x: 2,
      y: 4
    },
    img: "img/btr50.png",
    
    w: 170,
		h: 80,
   
    _x: -70,
    _y: -10,
    _w: 170,
    _h: 80
  };
 
  units["tree_1"] = {
    fiz: {
      x: 3,
      y: 3
    },
    
    img: "img/forest.png",
    
    x: 460,
    y: 870,
    w: 180,
		h: 154,
   
    _x: -84,
    _y: -107,
    _w: 180,
		_h: 154
  };
 
  units["tree_2"] = {
    fiz: {
      x: 1,
      y: 1
    },
    
    img: "img/forest.png",
    
    x: 133,
    y: 784,
    w: 50,
		h: 104,
   
    _x: -28,
    _y: -86,
    _w: 50,
		_h: 104
  }; 
 
  units["rock_1"] = {
    fiz: {
      x: 1,
      y: 1
    },
    
    img: "img/forest.png",
    
    x: 0,
    y: 470,
    w: 64,
		h: 45,
   
    _x: -25,
    _y: -12,
    _w: 55,
		_h: 38
  };  
 
 
 units["hrush_1"] = {
    fiz: {
      x: 9,
      y: 18
    },
    
    img: "img/hrush_1.png",
    
    x: 0,
    y: 0,
    w: 560,
		h: 410,
   
    _x: -190,
    _y: -145,
    _w: 560,
		_h: 410
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
    dir: 0,
    
    pos: {
      x: 0,
      y: 0
    },
    
    fiz: {
      x: 15,
      y: 15
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
  
  var a = {};
  
  a["orc"] = {
    speed: 0.25,
    img: {
      "0": {
        img: "img/unit_1.png",
        x: 60,
        y: 0,
        w: 30,
        h: 60
      },
      "90": {
        img: "img/unit_1.png",
        x: 0,
        y: 0,
        w: 30,
        h: 60
      },
      "180": {
        img: "img/unit_1.png",
        x: 90,
        y: 0,
        w: 30,
        h: 60
      },
      "270": {
        img: "img/unit_1.png",
        x: 30,
        y: 0,
        w: 30,
        h: 60
      }
    },
    
    _x: 15,
    _y: 50,
    _w: 30,
    _h: 60
  };
 
  a["petrovich"] = {
    speed: 1,
    img: {
      "0": {
        img: "img/petrivich.png",
        x: 0,
        y: 0,
        w: 100,
        h: 200
      },
      "90": {
        img: "img/petrivich.png",
        x: 0,
        y: 0,
        w: 100,
        h: 200
      },
      "180": {
        img: "img/petrivich.png",
        x: 100,
        y: 0,
        w: 100,
        h: 200
      },
      "270": {
        img: "img/petrivich.png",
        x: 100,
        y: 0,
        w: 100,
        h: 200
      }
    },
    
    _x: 17,
    _y: 43,
    _w: 30,
    _h: 50
  };
 
   a["tank"] = {
    fiz: {
      x: 90,
      y: 90
    }, 
    speed: 0.1,
    img: {
      "0": {
        img: "img/type69_iraq.png",
        x: 230,
        y: 0,
        w: 115,
        h: 80
      },
      "90": {
        img: "img/type69_iraq.png",
        x: 0,
        y: 0,
        w: 115,
        h: 80
      },
      "180": {
        img: "img/type69_iraq.png",
        x: 345,
        y: 0,
        w: 115,
        h: 80
      },
      "270": {
        img: "img/type69_iraq.png",
        x: 115,
        y: 0,
        w: 115,
        h: 80
      }
    },
    
    _x: 50,
    _y: 25,
    _w: 115,
    _h: 80
  };
 
 a["illu"] = {
    fiz: {
      x: 50,
      y: 50
    }, 
    speed: 0.1,
    img: {
      "0": {
        img: "img/illuminati.png",
        x: 0,
        y: 0,
        w: 200,
        h: 130
      },
      "90": {
        img: "img/illuminati.png",
        x: 400,
        y: 0,
        w: 200,
        h: 130
      },
      "180": {
        img: "img/illuminati.png",
        x: 200,
        y: 0,
        w: 200,
        h: 130
      },
      "270": {
        img: "img/illuminati.png",
        x: 400,
        y: 0,
        w: 200,
        h: 130
      }
    },
    
    _x: 32,
    _y: 7,
    _w: 64,
    _h: 41
  };
 
 
  for(var key in a)
    a[key].__proto__ = _default;
 
  return a;
})();  
  

};

window.Config = config;
})();




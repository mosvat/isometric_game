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
    
    _x: 20,
    _y: 20,
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
   
    _x: 50,
    _y: 50,
    _w: 128,
    _h: 128
  };
 
  units["b_3"] = {
    fiz: {
      x: 5,
      y: 5
    },
    img: "img/building_3.png",
    
    w: 180,
		h: 270,
   
    _x: 70,
    _y: 120,
    _w: 128,
    _h: 200
  };

    units["b_1"] = {
    fiz: {
      x: 5,
      y: 5
    },
    img: "img/building_1.png",
    
    w: 250,
		h: 190,
   
    _x: 85,
    _y: 30,
    _w: 170,
    _h: 128
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
      x: 10,
      y: 10
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
 
 
  for(var key in a)
    a[key].__proto__ = _default;
 
  return a;
})();  
  

};

window.Config = config;
})();




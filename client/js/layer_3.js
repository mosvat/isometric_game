;(function() {

var _Layer_3 = function(app) {
  
var iso = {
  width: 32,
  height: 16
};

var two = {
  width: 25,
  height: 25
};
  

var units = app.config["units"];
var render_name = "units";
var print = app.renders[render_name]; 


var list = [];  
var toRad = Math.PI / 180;


window.a = {};
function iscrossing(u1,u2){
  
  if( 
      (u1 != u2) && 
      ((u1.pos.x + u1.fiz.x > u2.pos.x) && (u1.pos.x < u2.pos.x + u2.fiz.x )) && 
      ((u1.pos.y + u1.fiz.y > u2.pos.y) && (u1.pos.y < u2.pos.y + u2.fiz.y))
    ) return true
   
  return false;
}
 

function c() {
  list.forEach(function(obj){
    //============================================== change angle
    obj.dir = Math.random() < 0.01 ? (obj.dir   + (360 + ((Math.random() < 0.5) ? 90 : -90))    )%360 : obj.dir;
    
    //============================================== [-] vector
    for (let key in obj.vec) 
			obj.vec[key] *= (Math.abs(obj.vec[key])<0.1) ? 0 : 0.9;
    //============================================== [+] vector
    var d = ((obj.dir)%360)*toRad;
    var s = Math.random() < 1 ? obj.speed : 0;
    obj.vec.x += s*Math.cos(d);
    obj.vec.y += s*Math.sin(d);
    //============================================== set pos
    var oldPos = {};
        oldPos.x = obj.pos.x;
        oldPos.y = obj.pos.y;
        
    var not_cross = [];
    list.forEach(function(_obj){
      if( !iscrossing(obj,_obj) ) not_cross.push(_obj);
    });      
    
    obj.pos.x += Math.ceil(obj.vec.x);
    obj.pos.y += Math.ceil(obj.vec.y);
    
    for(var i = 0; i < not_cross.length; i++){
      _obj = not_cross[i];
      if( iscrossing(obj,_obj) ) {
        obj.pos.x = oldPos.x;
        obj.pos.y = oldPos.y;
        obj.vec.x *= -1;
        obj.vec.y *= -1;
        break;
      };
    }
  
  });
  window.setTimeout(c,50);
}  
  
c(); 


function set(x,y,unit){
  x *= iso.width/2;
  y *= iso.height;
  add(x,y,unit);
}


function add(x,y,unit,dir) {
  var obj = {};
  obj.vec = {
    x: 0,
    y: 0
  };
  obj.dir = dir || ( Math.round((Math.random()*270)/90)*90       );
  obj.pos = {
    "x": x,
    "y": y
  };
  obj.__proto__ = units[unit];
  list.push(obj);
}

// add(100,200,"orc",0);  
// add(100,200,"orc",90); 
// add(100,200,"orc",180);   
// add(100,200,"orc",270);   
  
var a = this; 
function render() {
  list.forEach(function(obj){
    print(obj,a);
  });
};
  
  

  
this.iso = iso;
this.two = two;
this.units = units;
this.render_name = render_name;
this.list = list;  
this.render = render;
this.add = add;  
this.set = set;  
  
  
  
};

window.Layer_3 = _Layer_3;
})();
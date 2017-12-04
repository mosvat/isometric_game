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

 

function c() {
  list.forEach(function(obj){
    
    obj.dir = Math.random() < 0.01 ? (obj.dir   + (360 + ((Math.random() < 0.5) ? 90 : -90))    )%360 : obj.dir;
    var s = 2;
    var d = ((obj.dir)%360)*toRad;
    obj.pos.x += s*Math.cos(d);
    obj.pos.y -= s*Math.sin(d);
  });
  window.setTimeout(c,100);
}  
  
c(); 


function set(x,y,unit){
  x *= iso.width;
  y *= iso.height;
  add(x,y,unit);
}


function add(x,y,unit,dir = 0) {
  var obj = {};
  obj.dir = dir;
  obj.pos = {
    "x": x,
    "y": y
  };
  obj.__proto__ = units[unit];
  list.push(obj);
}

add(100,200,"orc",0);  
add(100,200,"orc",90); 
add(100,200,"orc",180);   
add(100,200,"orc",270);   
  
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
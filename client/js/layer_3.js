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

      
      ((u1 != u2) && 
      ((u1.pos.x + u1.fiz.x >= u2.pos.x) && (u1.pos.x <= u2.pos.x + u2.fiz.x )) && 
      ((u1.pos.y + u1.fiz.y >= u2.pos.y) && (u1.pos.y <= u2.pos.y + u2.fiz.y)))
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
    var not_cross1 = []; // layer 2
    
    var a = app.layers[1].two;
    app.layers[1].list.forEach(function(_obj){
      var _obj1 = {
        pos: {
          x: _obj.pos.x * a.width,
          y: _obj.pos.y * a.height
        },
        fiz: {
          x: _obj.fiz.x * a.width,
          y: _obj.fiz.y * a.height
        },
      }
      if( !iscrossing(obj,_obj1) ) not_cross1.push(_obj1);
    });
    
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
       
        
        _obj.vec.x += obj.vec.x * 0.5;
        _obj.vec.y += obj.vec.y * 0.5;
        
        obj.vec.x *= -1*0.5;
        obj.vec.y *= -1*0.5;
        break;
      };
    }
    
    
    for(var i = 0; i < not_cross1.length; i++){
      _obj = not_cross1[i];
      if( iscrossing(obj,_obj) ) {
        obj.pos.x = oldPos.x;
        obj.pos.y = oldPos.y;
      
        
        obj.dir = ( obj.dir +  360 + (Math.random() < 0.5) ? 90 : -90       )%360 ;
    
        
        obj.vec.x *= -1*0.5;
        obj.vec.y *= -1*0.5;
        break;
      };
    }
    
    
  });
  window.setTimeout(c,50);
}  
  
c(); 


function set(x,y,unit){
  x *= two.width;
  y *= two.height;
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

// add(0,0,"orc",0);  
// add(1000,1000,"orc",90); 
// add(1000,0,"orc",180);   
// add(0,1000,"orc",270);   
  
  
function bubbleSort(a)
{
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i].pos.x > a[i+1].pos.x) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}  
  
  
  
  
var a = this; 
function render() {
  bubbleSort(list);
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
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
    
list.push({
  pos: {
    x: 0,
    y: 0
  }, 
  fiz: {
    x: 64,
    y: 64
  } 
});  
 
list.push({
  pos: {
    x: 50,
    y: 50
  }, 
  fiz: {
    x: 20,
    y: 10
  } 
});  

 

function c() {
  list.forEach(function(obj){
    obj.pos.x += Math.random() < 0.33 ? 3 : Math.random() < 0.5 ? 0 : -3,
    obj.pos.y += Math.random() < 0.33 ? 3 : Math.random() < 0.5 ? 0 : -3
  });
  window.setTimeout(c,100);
}  
  
// c(); 
  
  
function render() {
  list.forEach(function(obj){
    print(obj,this);
  });
};
  
  

  
this.iso = iso;
this.two = two;
this.units = units;
this.render_name = render_name;
this.list = list;  
this.render = render;
  
  
  
  
  
};

window.Layer_3 = _Layer_3;
})();
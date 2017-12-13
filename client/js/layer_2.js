;(function() {

var _Layer_2 = function(app) {

var max = app.size; 
  
var iso = {
  width: 32,
  height: 16
};

var two = {
  width: 25,
  height: 25
};
  
var render_name = "building";
var units = app.config["buildings"];
  

var print = app.renders[render_name]; 
var map = [];
var list = [];
    
  
  
  
function render() {
  
  var arr = [];
  for(var i in map)
      for(var j in map[i]){
          
          var obj = list[ map[i][j] ];
   
          var ind = arr.indexOf(obj);
          if(ind !== -1) arr.splice(ind, 1);
            
          arr.push(obj);
      }
  var s = this;    
  var z = 0;
  arr.forEach(function(obj){
    print(obj,s,++z);
  });    
        
      
      
      
// for(var i in map)
      // for(var j in map[i]){
          // var id = map[i][j];
          // var obj = list[id];
          // print(obj,this);
      // }      
};
  
  
  
  
 
var id = 0;
function set(x,y,type){
  id++;
  
  x = x < 0 ? 0 : x > max[0] ? max[0] : x;
  y = y < 0 ? 0 : y > max[1] ? max[1] : y;
  
  var obj = {
    id: id,
    pos: {
      x: x,
      y: y
    }
  };   
  obj.__proto__ =  this.units[type];
    
  list[id] = obj;
  for(var i = 0; i < obj.fiz.x; i++)
    for(var j = 0; j < obj.fiz.y; j++){
      map[x+i] =  map[x+i] || [];
      if(map[x+i][y+j] != undefined) this.del( list[ map[x+i][y+j] ])
      map[x+i][y+j] = id;
    };
}
  
function del(obj){
  for(var i = 0; i < obj.fiz.x; i++)
    for(var j = 0; j < obj.fiz.y; j++){
      delete map[obj.pos.x+i][obj.pos.y+j];
      //if(Object.keys(map[obj.pos.x+i]).length == 0) {delete map[obj.pos.x+i]};
    }; 
  delete list[obj.id];
}
  
function getBlock(x,y) {
  return {
    x: x = Math.ceil(y / two.width),
    y: y = Math.ceil(x / two.height)
  };
};    
  
  // this = {
    // iso: iso,
    // two: two,
    // units: units,
    // render_name: render_name,
    // map: map,
    // list: list,
    // set: set,
    // del: del,
    // render: render
    
  // };
  
  
  
  this.iso = iso;
  this.two = two;
  this.units = units;
  this.render_name = render_name;
  this.map = map;
  this.list = list;  
  
  this.set = set;
  this.del = del;
  
  this.getBlock = getBlock;
  
  this.render = render;
  
  
  
  
  
};

window.Layer_2 = _Layer_2;
})();
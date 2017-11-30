;(function() {

var _Layer_2 = function(app) {
  
  this.iso = {
    width: 32,
    height: 16
  };
  
  this.two = {
    width: 25,
    height: 25
  };
  
  this.units = app.config["buildings"];
  this.renders = "building";
  
  var map = [];
    this.map = map;
  
  var list = [];
    this.list = list;
  
  
  
  this.render = function() {   
    var arr = [];
    for(var i in map)
        for(var j in map[i]) {
          if(arr.indexOf(map[i][j]) === -1) {
            arr.push(map[i][j]);
            app.renders[this.renders](i,j,this);
          }
        }
  };
  
  
  
  
 
  var id = 0;
  this.set = function(x,y,type){
    id++;
    
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
  
  this.del = function(obj){
  
    for(var i = 0; i < obj.fiz.x; i++)
      for(var j = 0; j < obj.fiz.y; j++){
        delete map[obj.pos.x+i][obj.pos.y+j];
        //if(Object.keys(map[obj.pos.x+i]).length == 0) {delete map[obj.pos.x+i]};
      };
      
    delete list[obj.id];
  }
  
  
  
  
  
  
  
  
  
  
  
  
};

window.Layer_2 = _Layer_2;
})();
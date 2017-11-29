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
  
  this.units = app.config["grounds"];


  this.map = [
    ["gr","gr","gr","gr","gr","gr","gr","gr","gr","gr"],
    ["gr","gr","gr","gr","gr","gr","gr","gr","gr","gr"],
    ["gr","gr","gr","gr","gr","gr","gr","gr","gr","gr"],
    ["gr","gr","gr","gr","gr","gr","gr","gr","gr","gr"],
    ["gr","gr","gr","gr","gr","gr","gr","gr","gr","gr"],
    ["gr","gr","gr","gr","gr","gr","gr","gr","gr","gr"],
    ["gr","gr","gr","gr","gr","gr","gr","gr","gr","gr"],
    ["gr","gr","gr","gr","gr","gr","gr","gr","gr","gr"],
    ["gr","gr","gr","gr","gr","gr","gr","gr","gr","gr"],
    ["gr","gr","gr","gr","gr","gr","gr","gr","gr","gr"]
  ];

 
  this.render = function() {
    var arr = [];
    for(var i in this.map)
      for(var j in this.map[i])
        arr.push([i,j]);
    arr.forEach((e)=>{
      app.renders.ground(e[0],e[1],this);
    });  
  };
  
 
    
    
  this.set = function(x,y,type){
    this.map[x] = this.map[x] || [];
      this.map[x][y] = type;
  }
};

window.Layer_1 = _Layer_1;
})();
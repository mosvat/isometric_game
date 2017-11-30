;(function() {

var _Layer_3 = function(app) {
  
  this.iso = {
    width: 32,
    height: 16
  };
  
  this.two = {
    width: 25,
    height: 25
  };
  
  this.units = app.config["units"];

  var map = [];
    this.map = map;
  
  var list = [];
    this.list = list;
  
  
  
  this.render = function() {   
    for(var i in map)
        for(var j in map[i]) 
          app.renders.unit(i,j,this);
  };
  
  
  
  
  
  
  
  
  
  
  
  
  
};

window.Layer_3 = _Layer_3;
})();
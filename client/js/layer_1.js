;(function() {

var _Layer_1 = function(app) {
  
  this.iso = {
    width: 100,
    height: 50
  };
  
  this.two = {
    width: 100,
    height: 100
  };
  
  this.units = app.config["grounds"];


  this.map = [
    ["g_1","g_1","g_1","g_1","g_1","g_1","g_1","g_1","g_1","g_1"],
    ["g_1","g_1","g_1","g_1","g_1","g_1","g_1","g_1","g_1","g_1"],
    ["g_1","g_1","g_2","g_1","g_1","g_1","g_1","g_1","g_1","g_1"],
    ["g_1","g_1","g_1","g_1","g_1","g_1","g_1","g_1","g_1","g_1"],
    ["g_1","g_1","g_1","g_1","g_1","g_1","g_1","g_1","g_1","g_1"],
    ["g_1","g_1","g_1","g_1","g_1","g_1","g_1","g_1","g_1","g_1"],
    ["g_1","g_1","g_1","g_1","g_2","g_1","g_1","g_1","g_1","g_1"],
    ["g_1","g_1","g_1","g_1","g_1","g_1","g_1","g_1","g_1","g_1"],
    ["g_1","g_2","g_1","g_1","g_1","g_1","g_1","g_1","g_1","g_1"],
    ["g_1","g_1","g_1","g_1","g_1","g_1","g_1","g_1","g_1","g_1"]
  ];

 
  this.render = function() {
    for(var i = 0; i < this.map.length; i++)
    try{
      for(var j = 0; j < this.map[i].length; j++)
        app.renders.ground(j,i,this);
    }catch(err){
    };
  }
  
};

window.Layer_1 = _Layer_1;
})();
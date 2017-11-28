;(function() {

var _Layer_1 = function(app) {
  
  this.iso = {
    width: 200,
    height: 100
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
    var arr = [];
    for(var i in this.map)
      for(var j in this.map[i])
        arr.push([i,j]);
    arr.forEach((e)=>{
      app.renders.ground(e[0],e[1],this);
    });  
  };
  
  
};

window.Layer_1 = _Layer_1;
})();
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
  this.renders = "ground";

  this.map = [["gr","gr","gr","gr","gr","gr","gr","gr","gr","gr","gr","gr","gr","gr","gr"],["gr","gr","gr","gr","gr","g3","g3","g3","gr","gr","gr","gr","gr","gr","gr"],["gr","gr","gr","gr","g5","g8","g8","g8","g7","gr","gr","gr","gr","gr","gr"],["gr","gr","gr","g2","g8","g4","g6","g8","g8","g1","gr","gr","gr","gr","gr"],["gr","gr","gr","g2","g8","g7","g5","g8","g8","g1","gr","gr","gr","gr","gr"],["gr","gr","g16","gr","g6","g8","g8","g8","g4","gr","gr","gr","gr","gr","gr"],["gr","g15","g16","gr","gr","g0","g0","g0","gr","gr","gr","gr","gr","gr","gr"],["gr","g14","g13","gr","gr","gr","gr","gr","gr","gr","gr","gr","gr","gr","gr"],["gr","gr","gr","gr","gr","gr","gr","gr","gr","gr","gr","gr","gr","gr","gr"],["gr","gr","g3","gr","gr","gr","gr","gr","g16","gr","gr","gr","gr","gr","gr"],["gr","g2","g8","g7","gr","gr","gr","gr","gr","gr","g15","g16","gr","gr","gr"],["gr","gr","g6","g8","g1","gr","gr","gr","gr","gr","g14","g13","gr","gr","gr"],["gr","gr","g2","g8","g1","gr","gr","gr","gr","gr","gr","gr","gr","gr","gr"],["gr","gr","gr","g0","gr","gr","gr","gr","gr","gr","gr","gr","gr","gr","gr"],["gr","gr","gr","gr","gr","gr","gr","gr","gr","gr","gr","gr","gr","gr","gr"]];

 
  this.render = function() {
    var arr = [];
    for(var i in this.map)
      for(var j in this.map[i])
        arr.push([i,j]);
    arr.forEach((e)=>{
      app.renders[this.renders](e[0],e[1],this);
    });  
  };
  
 
    
    
  this.set = function(x,y,type){
    x = x < 0 ? 0 : x;
    y = y < 0 ? 0 : y;
    this.map[x] = this.map[x] || [];
      this.map[x][y] = type;
  }
};

window.Layer_1 = _Layer_1;
})();
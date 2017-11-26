;(function() {

var _pack = function() {
  this.twoDToIso = function(p){
    var point = {};
    point.x = (p.x + p.y);
    point.y = (p.x - p.y) / 2; 
    return point;
  };
  
  this.isoTo2D = function(p){
    var point = {};
    point.x = (2 * -p.y + p.x) / 2;
    point.y = (2 * p.y + p.x) / 2;
    return point;
  };
  
  this.f = function(s,f){
    var a = f.x - s.x,
      b = f.y - s.y;
    a = a == 0 ? 0 : a < 0 ? -1 : 1;
    b = b == 0 ? 0 : b < 0 ? -1 : 1;
    return {x: a, y: b};
  };

  
};

if(!("func_packs" in window)) window.func_packs = [];
window.func_packs.push(_pack);
})();
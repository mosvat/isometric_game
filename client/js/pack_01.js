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
    point.x = p.x/2 - p.y;
    point.y = p.x/2 + p.y;
    return point;
  };
 
  
  this.f = function(s,f){
    var a = f.x - s.x,
      b = f.y - s.y;
    a = a == 0 ? 0 : a < 0 ? -1 : 1;
    b = b == 0 ? 0 : b < 0 ? -1 : 1;
    return {x: a, y: b};
  };

  this.getPos = function(l){
    app = this;
    var _pos = app.isoTo2D({
      x: Math.round( ( app.mouse.x + app.camera.x ) / app.zoom ),
      y: Math.round( ( app.mouse.y + app.camera.y ) / app.zoom )
    }); 
    
    _pos.x = ( _pos.x / ( l.iso.width / 2 ) ) * l.two.width;
    _pos.y = ( _pos.y /   l.iso.height ) * l.two.height;
    
    return _pos;
  };  
  
  
};

if(!("func_packs" in window)) window.func_packs = [];
window.func_packs.push(_pack);
})();
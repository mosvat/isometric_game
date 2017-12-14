;(function() {

var _pack = function() {
  this.twoDToIso = function(p){
    return {
      x: -(p.x - p.y),
      y:  (p.x + p.y) / 2
    };
  };
  
  this.isoTo2D = function(p){
    return {
      x: (p.x/2 + p.y),
      y: -p.x/2 + p.y
    };
  };
 
  
  this.f = function(s,f){
    var a = f.x - s.x,
      b = f.y - s.y;
    a = a == 0 ? 0 : a < 0 ? -1 : 1;
    b = b == 0 ? 0 : b < 0 ? -1 : 1;
    return {x: a, y: b};
  };

  // this.getPos = function(l){
    // app = this;
    // var _pos = this.getBlock(l)
    
    // _pos.x *= l.two.width ;
    // _pos.y *= l.two.height;
    
    // return _pos;
  // };  
  
  // this.getBlock = function(l){
    // app = this;
    // var _pos = app.isoTo2D({
      // x: Math.round( ( app.mouse.x / app.zoom + app.camera.x )  ),
      // y: Math.round( ( app.mouse.y / app.zoom + app.camera.y )  )
    // }); 
    
    // _pos.x = Math.floor( _pos.x / ( l.iso.width / 2 ) ) ;
    // _pos.y = Math.floor( _pos.y /   l.iso.height ) ;
    
    // return _pos;
  // }; 
  
  this.getPos = function(l){
    app = this;
    var _pos = app.isoTo2D({
      x: ( (app.mouse.x - (app.canvas.width/2)) / app.zoom + app.camera.x) ,
      y: ( (app.mouse.y - (app.canvas.height/2)) / app.zoom + app.camera.y) 
    }); 
    
    _pos.x = Math.floor(  (_pos.x / ( l.iso.width / 2 )) * l.two.width ) ;
    _pos.y = Math.floor(  (_pos.y /   l.iso.height) * l.two.height );

    return _pos;
  };  
  
  this.getBlock = function(l){
    app = this;
    
    var _pos = this.getPos(l)
    
    _pos.x = Math.floor( _pos.x / l.two.width ) ;
    _pos.y = Math.floor( _pos.y / l.two.height ) ;
    
    return _pos;
  };   
  
  
  
  
  
  
};

if(!("func_packs" in window)) window.func_packs = [];
window.func_packs.push(_pack);
})();
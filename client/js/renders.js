;(function() {
  
  var _calss = function(app){

    this.ground = function(x,y,l) {

      var _pos = app.twoDToIso({
          x: x * l.iso.width/2 * app.zoom,
          y: y * l.iso.height * app.zoom
        });

      var id = l.map[x][y];  

      
      var t = l.units[id];
      
      var cof = {
        x: (l.iso.width / t.w),
        y: (l.iso.height / t.h)
      };
      
    
      if(!(t.img in app.imagesArr)){
        var o = {};
        o[t.img] = t.img;
        
        app.loadImages(
          o,
          ()=>{console.log("done: "+t.img)}
        ); 
      }
      
      app.context.drawImage(
        app.imagesArr[t.img],
        t.x,
        t.y,
        t.w,
        t.h,
        _pos.x - (app.camera.x - t._x) * app.zoom,
        _pos.y - (app.camera.y - t._y) * app.zoom,
        (cof.x + t._w) * app.zoom,
        (cof.x + t._h) * app.zoom 
      );
      
     // app.context.fillText(
        // x + " | " + y, 
        // _pos.x - (app.camera.x + t.w) * app.zoom,
        // _pos.y - (app.camera.y + t.h) * app.zoom,
      // );  
      
    };
    
  };
  
  window.Renders = _calss;
})();

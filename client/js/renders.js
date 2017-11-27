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
      
      
      var m = 2;
      
    
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
        _pos.x - (app.camera.x + (cof.x * t._x) - m) * app.zoom,
        _pos.y - (app.camera.y + (cof.y * t._y) - m) * app.zoom,
        (cof.x *t.w  + m) * app.zoom,
        (cof.x *t.h + m) * app.zoom 
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

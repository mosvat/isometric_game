;(function() {
  
  var _calss = function(app){

    this.ground = function(x,y,l) {

      var _pos = app.twoDToIso({
          x: x * l.iso.width/2 * app.zoom,
          y: y * l.iso.height * app.zoom
        });

      var id = l.map[x][y];
      var t = l.units[id];
      
      if(!(t.img in app.imagesArr)){
        var o = {};
        o[t.img] = t.img;
        app.loadImages(
          o,
          ()=>{
            console.log("done: "+t.img)
          }
        ); 
      }
      
      var coef = {
        w: l.iso.width / t.iso.width,
        h: l.iso.height / t.iso.height
      };
      
      app.context.drawImage(
        app.imagesArr[t.img],
        t.x,
        t.y,
        t.w,
        t.h,
        _pos.x - (app.camera.x - (coef.w * t._x)) * app.zoom,
        _pos.y - (app.camera.y - (coef.h * t._y)) * app.zoom,
        coef.w * t._w * app.zoom,
        coef.h * t._h * app.zoom 
      );
      
  
      
     // app.context.fillText(
        // x + " | " + y, 
       // _pos.x - (app.camera.x - (l.iso.width * t._x)) * app.zoom,
       // _pos.y - (app.camera.y - (l.iso.height * t._y)) * app.zoom
      // );  
      
    };    
 
    this.building = function(x,y,l) {
      var id = l.map[x][y];
      var obj = l.list[id];
    
    
      var _pos = app.twoDToIso({
          x: obj.pos.x * l.iso.width/2 * app.zoom,
          y: obj.pos.y * l.iso.height * app.zoom
        });


      var t = obj;
      
      if(!(t.img in app.imagesArr)){
        var o = {};
        o[t.img] = t.img;
        app.loadImages(
          o,
          ()=>{
            console.log("done: "+t.img)
          }
        ); 
      }
      
      var coef = {
        w: l.iso.width / t.iso.width,
        h: l.iso.height / t.iso.height
      };
      

      
      app.context.drawImage(
        app.imagesArr[t.img],
        t.x,
        t.y,
        t.w,
        t.h,
        _pos.x - (app.camera.x + (coef.w * t._x)) * app.zoom,
        _pos.y - (app.camera.y + (coef.h * t._y)) * app.zoom,
        coef.w * t._w * app.zoom,
        coef.h * t._h * app.zoom 
      );
      
  
      
     // app.context.fillText(
        // x + " | " + y, 
       // _pos.x - (app.camera.x - (l.iso.width * t._x)) * app.zoom,
       // _pos.y - (app.camera.y - (l.iso.height * t._y)) * app.zoom
      // );  
      
    }; 
  };
  
  window.Renders = _calss;
})();

;(function() {
  
  var _calss = function(app){

    this.ground = function(x,y,l) {

      var _pos = app.twoDToIso({
          x: x * l.iso.height * app.zoom,
          y: y * l.iso.height * app.zoom
        });

      var id = l.map[x][y];  

      var t = l.units[id];

       
      app.context.drawImage(
        app.imagesArr[t.img],
        t.x,
        t.y,
        t.w,
        t.h,
        _pos.x - app.camera.x,
        _pos.y - app.camera.y,
        l.iso.width * app.zoom,
        l.iso.height * app.zoom
      );

    };
    
  };
  
  window.Renders = _calss;
})();

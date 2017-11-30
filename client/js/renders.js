;(function() {
  
  var _calss = function(app){

    this.ground = function(x,y,l,t) {

      var _pos = app.twoDToIso({
          x: x * l.iso.width/2 * app.zoom,
          y: y * l.iso.height * app.zoom
        });

      //var id = ;
      var t = t || l.units[ l.map[x][y] ];
      
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
      
      

      // if(window.show != undefined && window.show == id) {
        // window.show = undefined;
        // console.log([app.imagesArr[t.img],
        // t.x,
        // t.y,
        // t.w,
        // t.h,
        // Math.round(_pos.x - (app.camera.x - (coef.w * t._x)) * app.zoom),
        // Math.round(_pos.y - (app.camera.y - (coef.h * t._y)) * app.zoom),
        // Math.round(coef.w * t._w * app.zoom),
        // Math.round(coef.h * t._h * app.zoom) ]);
      // }
      
      
      
      app.context.drawImage(
        app.imagesArr[t.img],
        t.x,
        t.y,
        t.w,
        t.h,
        Math.round(_pos.x - (app.camera.x - (coef.w * t._x)) * app.zoom),
        Math.round(_pos.y - (app.camera.y - (coef.h * t._y)) * app.zoom),
        Math.round(coef.w * t._w * app.zoom),
        Math.round(coef.h * t._h * app.zoom) 
      );
      
  
      
     // app.context.fillText(
        // x + " | " + y, 
        // _pos.x - (app.camera.x - (coef.w * t._x)) * app.zoom,
        // _pos.y - (app.camera.y - (coef.h * t._y)) * app.zoom
      // );  
      
    };    
 
    this.building = function(x,y,l,t) {

      var obj = (t != undefined) ? {x: x, y: y, __proto__: l.units[t]} : l.list[ l.map[x][y] ];
    
    
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
      
      ctx = app.context;
      
      ctx.drawImage(
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
      
     
     // ctx.fillText(
        // x + " | " + y, 
        // _pos.x - (app.camera.x + (coef.w * t._x)) * app.zoom,
        // _pos.y - (app.camera.y + (coef.h * t._y)) * app.zoom
      // );  


     ctx.fillStyle="#FF0000";
      
      ctx.beginPath();
      


      ctx.moveTo(
        _pos.x - (app.camera.x * app.zoom),
        _pos.y - (app.camera.y * app.zoom)
      );
      

      _pos = app.twoDToIso({
          x: (obj.pos.x+1) * l.iso.width/2 * app.zoom,
          y: (obj.pos.y+1) * l.iso.height * app.zoom
      });
      
      ctx.lineTo(
        _pos.x - (app.camera.x * app.zoom),
        _pos.y - (app.camera.y * app.zoom)
      );   
      
      ctx.fill();
  
  
  
  
  
  
  
      

      
    }; 
  };
  
  window.Renders = _calss;
})();

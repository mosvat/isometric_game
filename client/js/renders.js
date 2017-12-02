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
 
    this.building = function(obj,l) {
   
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
      //===============================================
      var _pos = app.twoDToIso({
          x: obj.pos.x * l.iso.width/2 * app.zoom,
          y: obj.pos.y * l.iso.height * app.zoom
        });
      
      var _x = app.twoDToIso({
          x: (obj.fiz.x) * l.iso.width/2 * app.zoom,
          y: 0
        });
      
      var _y = app.twoDToIso({
          x: 0,
          y: (obj.fiz.y) * l.iso.height * app.zoom
        });      
      
      _pos = {
          x: _pos.x - (app.camera.x * app.zoom),
          y: _pos.y - (app.camera.y * app.zoom)
        };
      
      
      ctx = app.context;
      

      ctx.beginPath();
      
      ctx.moveTo(
        _pos.x,
        _pos.y,
      );
      
      ctx.lineTo(
        _pos.x + _x.x,
        _pos.y + _x.y,
      );   
      ctx.lineTo(
        _pos.x + _x.x + _y.x,
        _pos.y + _x.y + _y.y,
      );      
      ctx.lineTo(
        _pos.x + _y.x,
        _pos.y + _y.y,
      ); 
      ctx.lineTo(
        _pos.x,
        _pos.y,
      );
   
   
      ctx.stroke();
     
     
     
     
     
     
     // ctx.fillText(
        // x + " | " + y, 
        // _pos.x - (app.camera.x + (coef.w * t._x)) * app.zoom,
        // _pos.y - (app.camera.y + (coef.h * t._y)) * app.zoom
      // );     
    }; 
  
    this.units = function(obj,l) {
   
      var _pos = app.twoDToIso({
          x: obj.pos.x * app.zoom,
          y: obj.pos.y * app.zoom
        });
      
      var _x = app.twoDToIso({
          x: obj.fiz.x * app.zoom,
          y: 0
        });
      
      var _y = app.twoDToIso({
          x: 0,
          y: obj.fiz.y * app.zoom
        });      
      
      _pos = {
          x: _pos.x - (app.camera.x * app.zoom),
          y: _pos.y - (app.camera.y * app.zoom)
        };
      
      
      ctx = app.context;
      

      ctx.beginPath();
      
      ctx.moveTo(
        _pos.x,
        _pos.y,
      );
      
      ctx.lineTo(
        _pos.x + _x.x,
        _pos.y + _x.y,
      );   
      ctx.lineTo(
        _pos.x + _x.x + _y.x,
        _pos.y + _x.y + _y.y,
      );      
      ctx.lineTo(
        _pos.x + _y.x,
        _pos.y + _y.y,
      ); 
      ctx.lineTo(
        _pos.x,
        _pos.y,
      );
   
   
      ctx.stroke();
    }; 
  
  
  
  
  
  };
  
  window.Renders = _calss;
})();

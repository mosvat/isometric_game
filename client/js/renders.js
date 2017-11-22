;(function() {
  
var CLASS_RENDER = function(ctx,twoDToIso,isoTo2D,imagesArr,camera) {
  this.renders = new (function() {
    this.ground = function(x,y,id) {
      var _pos = twoDToIso({
          x: x * BLOCK_SIZE,
          y: y * BLOCK_SIZE
        });
        
      var t = window.units[id];
      
      ctx.drawImage(
        imagesArr[t.img],
        t.x,
        t.y,
        t.w,
        t.h,
        _pos.x - camera.x,
        _pos.y - camera.y,
        BLOCK_SIZE*2,
        BLOCK_SIZE
      );
      ctx.fillText(
        x + " | " + y, 
        _pos.x - camera.x + BLOCK_SIZE/4,
        _pos.y - camera.y + BLOCK_SIZE/2
      );  
    };
  })();
  return renders;
};  

window.renders = CLASS_RENDER;
})();

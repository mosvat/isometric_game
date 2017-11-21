;(function() {
  
var CLASS_RENDER = function(ctx,twoDToIso,isoTo2D,imagesArr,camera) {
  this.renders = new (function() {
    this.ground = function(x,y,id) {
      var _pos = twoDToIso({
          x: x * BLOCK_SIZE,
          y: y * BLOCK_SIZE
        });
        
      ctx.drawImage(
        imagesArr["img/forest.png"],
        0,
        32,
        64,
        64,
        _pos.x - camera.x,
        _pos.y - camera.y,
        BLOCK_SIZE*2,
        BLOCK_SIZE*2
      );
    };
  })();
  return renders;
};  

window.renders = CLASS_RENDER;
})();

(function() {

var _pack = function() {
  this.loadImages = function(sources, callback) {
    var loadedImages = 0;
    var numImages = 0;
    for(var src in sources) {
      numImages++;
    };
    for(var src in sources) {
      this.imagesArr[src] = new Image();
      this.imagesArr[src].onload = function(){
        if (++loadedImages >= numImages) {
          callback(this.imagesArr);
        }
      };	
      this.imagesArr[src].src = sources[src];
    };
  };  
};

if(!("func_packs" in window)) window.func_packs = [];
window.func_packs.push(_pack);
})();
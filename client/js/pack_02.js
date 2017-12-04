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
  
  
  
  var editor = {
    "layer": undefined,
    "block": undefined,
    "enabled": enabled,
    "setLayer": setLayer,
    "setBlock": setBlock
  };
  
  
  function enabled(app){
    var a = document.getElementById("layers");
    a.innerHTML = "";
    var b = document.getElementById("blocks");
    b.innerHTML = "";

    
    for(var key in app.layers){
      var i = document.createElement('div');
   
      i.innerHTML = "Layer "+key;
      i.l = app.layers[key];
      i.addEventListener("click", setLayer);
      
      
      a.appendChild(i);
    }
  }
  
  
  function setLayer(){
    editor.block = undefined;
   
    var l = this.l;
    editor.layer = l;
    
    var b = document.getElementById("blocks");
    b.innerHTML = "";
    for(var key in l.units){
      var o = l.units[key];
      

    
      var j = document.createElement('div');
      j.style.width = o._w + "px";
      j.style.height = o._h + "px";
      j.b = key;      
      j.addEventListener("click", setBlock);
      b.appendChild(j);  
      
      if(typeof(o.img) != "string") {

        o = o.img[(Object.keys(o.img)[0])];

      }
      
      var i = document.createElement('div');
      i.style.width = o.w + "px";
      i.style.height = o.h + "px";
      i.style.imageRendering = "pixelated";
      i.style.background = "white url" + "('" +o.img + "') -"+ o.x + "px -" + o.y +"px";
      i.style.zoom = "" + o._w / o.w;
      j.appendChild(i);  
      
      
      
      
      
        
    }
  };
  
  function setBlock(){
    editor.block = this.b;
  };
  
  
  this.editor = editor;
  
  
  
  
  
  
  
};

if(!("func_packs" in window)) window.func_packs = [];
window.func_packs.push(_pack);
})();
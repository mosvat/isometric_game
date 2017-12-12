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
  
  function r() {
    
      return (Math.round(Math.random()*255));
  }
    
  function setLayer(){
    editor.block = undefined;
   
    var l = this.l;
    editor.layer = l;
    
    var b = document.getElementById("blocks");
    b.innerHTML = "";
    
    
    var arr = [];
    for(var key in l.units) arr.push([key,l.units[key]]);
    bubbleSort(arr);
    
    function bubbleSort(a)
    {
        var swapped;
        do {
            swapped = false;
            for (var i=0; i < a.length-1; i++) {
                if (a[i][1]._h > a[i+1][1]._h) {
                    var temp = a[i];
                    a[i] = a[i+1];
                    a[i+1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);
    }  
    
    
    
    
    
    
    for(var key in arr){
      var o = arr[key][1];
      

    
      var j = document.createElement('div');
      j.style.width = o._w + "px";
      j.style.height = o._h + "px";
      // j.style.background = `rgb(${r()},${r()},${r()}) url('img/blockline.png')`;
      j.style.background = `url('img/blockline.png')`;
      j.style.imageRendering = "pixelated";
      j.style.backgroundSize = "20px 20px";
      j.b = arr[key][0];      
      j.addEventListener("click", setBlock);
      b.appendChild(j);  
      
      if(typeof(o.img) != "string") {
        var a = o;
        o = o.img[(Object.keys(o.img)[0])];
        o.__proto__ = a;
      }
      
      var i = document.createElement('div');
      i.style.width = o.w + "px";
      i.style.height = o.h + "px";
      i.style.imageRendering = "pixelated";
      i.style.background = "url" + "('" +o.img + "') -"+ o.x + "px -" + o.y +"px";
      i.style.zoom = "" + o._w / o.w;
      j.appendChild(i);          
    }
  };
  
  function createul(obj) {
    var ul = document.createElement('ul');
    for(var key in obj){
      if(obj.hasOwnProperty(key)){
        var li = document.createElement('li');
          var m = document.createElement('div');
            var type = typeof(obj[key]);
            if(type == "object") {
              m = createul(obj[key])
            };
            if(type == "string") {
              m = document.createElement('input');
              m.type = "text";  
              m.value = obj[key];
              
              
              

              
            
              m.addEventListener("change",(function(k){    
                return function(){    
                  obj[k] = String(this.value);
                }
              })(key));  
              
            };
            if(type == "number") {
              m = document.createElement('input');
              m.type = "number"; 
              m.value = obj[key];
              m.step = m.value%1


              m.addEventListener("change",(function(k){    
                return function(){    
                  obj[k] = Number(this.value);
                }
              })(key));  
              
            };
          
          li.innerHTML = key+": "
          li.appendChild(m);    
        ul.appendChild(li);  
      }
    }
    return ul;
  }
  
  
  
  function setBlock(){
    
    
    editor.block = this.b;
    
    var b = document.getElementById("unit");
    b.innerHTML = "";
    var ul = createul(editor.layer.units[editor.block]);
    b.appendChild(ul);  


     
    
    
  };
  
  
  this.editor = editor;
  
  
  
  
  
  
  
};

if(!("func_packs" in window)) window.func_packs = [];
window.func_packs.push(_pack);
})();
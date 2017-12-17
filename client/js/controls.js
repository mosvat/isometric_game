;(function() {
  
  var _calss = function(app){
    
  switch(true) {
    case (!!window.addEventListener): 
      switch(true) {
        case ('onwheel' in document): 
            window.addEventListener("wheel", onWheel);
            break;
        case ('onmousewheel' in document): 
            window.addEventListener("mousewheel", onWheel);
            break; 
        default:
            window.addEventListener("MozMousePixelScroll", onWheel);
      };
      break;
    default:
      window.attachEvent("onmousewheel", onWheel);
  };
  
  var e = document.getElementById("editor");
  var b = e.getElementsByTagName("button")[0];
  b.addEventListener("click",function(){
    window.fiz = !window.fiz;
  });
    
  window.addEventListener("keydown", keydown);
  window.addEventListener("resize", resize); 
  app.canvas.addEventListener("mousemove", mousemove);
  app.canvas.addEventListener("mousedown", mousedown);
  app.canvas.addEventListener("mouseup", mouseup);
  
  function setB() {
    if(app.editor.layer != undefined && app.editor.block != undefined) {
      
      var _pos = app.getPos(app.layers[0]);
      var b = app.editor.layer.two;
      
      _pos.x = Math.floor( _pos.x / b.width );
      _pos.y = Math.floor( _pos.y / b.height );
        
      app.editor.layer.set(
        _pos.y,
        _pos.x,
        app.editor.block
      );
      window.show = app.editor.block;
    }      
  }
  
  var LMB_press = false;
 
  function mousedown(e) {
     step_up = true;
    LMB_press = true;
  };
  
  function mouseup(e) {
    setB();
    LMB_press = false;
  };
  
  function mousemove(e) {
    app.mouse.x = e.offsetX == undefined ? e.layerX : e.offsetX;
		app.mouse.y = e.offsetY == undefined ? e.layerY : e.offsetY; 
    if(LMB_press) setB();
  };	
  
  

    

  var _camera = app.camera;
  var step = 20;
      
  function keydown(e) {
    if(LMB_press) setB();
    var s = 32;
    switch(e.keyCode){
      case 87:
        _camera.y -= s;
        break;
      case 83:
        _camera.y += s;
        break;      
      case 68:
        _camera.x += s;
        break; 
      case 65:
        _camera.x -= s;
        break;        
      default:    
    }; 
  };
  
 


  function resize(e) {
    app.canvas.width = window.innerWidth || 100;
    app.canvas.height = window.innerHeight || 100;
  };


  function onWheel(e) {
    var m = app.mouse;
    var _c = app._camera;
    
    _c.x += (m.x - app.canvas.width/2)/app.zoom;
    _c.y += (m.y - app.canvas.height/2)/app.zoom;
    
    e = e || window.event;
    var delta = e.deltaY || e.detail || e.wheelDelta;
    var _d = (delta/200);
    
    app.zoom = app.zoom + _d < 0.25 ? 0.25 : app.zoom + _d;    
    e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    
     
  } 
    
    
    
    
    
    
  };
  
  window.Controls = _calss;
})();
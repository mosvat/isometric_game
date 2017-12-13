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
  
  var k = 0;
  
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
  
  
  function resize(e) {
    app.canvas.width = window.innerWidth || 100;
    app.canvas.height = window.innerHeight || 100;
  };
    
  function keydown(e) {
    if(LMB_press) setB();
    
    switch(e.keyCode){
      case 87:
        app.camera.y -= 32;
        break;
      case 83:
        app.camera.y += 32;
        break;      
      case 68:
        app.camera.x += 32;
        break; 
      case 65:
        app.camera.x -= 32;
        break;        
      default:    
    };
  };
    
  function onWheel(e) {
    e = e || window.event;
    var delta = e.deltaY || e.detail || e.wheelDelta;
    app.zoom += (delta/400);
    e.preventDefault ? e.preventDefault() : (e.returnValue = false);
  } 
    
    
  };
  
  window.Controls = _calss;
})();
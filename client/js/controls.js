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

  window.addEventListener("keydown",keydown);
  window.addEventListener("resize",resize); 
  window.addEventListener("mousemove",mousemove);
  
  function mousemove(e) {
    app.mouse.x = e.offsetX == undefined ? e.layerX : e.offsetX;
		app.mouse.y = e.offsetY == undefined ? e.layerY : e.offsetY; 
  };	
  
  
  function resize(e) {
    app.canvas.width = window.innerWidth || 100;
    app.canvas.height = window.innerHeight || 100;
  };
    
  function keydown(e) {
    var k = e.keyCode;
    if(k==87 || k==38) app.camera.y -= 32;
    if(k==83 || k==40) app.camera.y += 32;
    if(k==68 || k==39) app.camera.x += 64;
    if(k==65 || k==37) app.camera.x -= 64;
  };
    
  function onWheel(e) {
    e = e || window.event;
    var delta = e.deltaY || e.detail || e.wheelDelta;
    app.zoom += (delta/1000);
    e.preventDefault ? e.preventDefault() : (e.returnValue = false);
  } 
    
    
  };
  
  window.Controls = _calss;
})();
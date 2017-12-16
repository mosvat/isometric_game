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
  
  

    
  
  var timer_camera = false;
  
  var _camera = app._camera,
       step_x = 0,
       step_y = 0,
       step_up = false;
  
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
    
    step_up = true;
    if(!timer_camera && !(_camera.x == app.camera.x && _camera.y == app.camera.y)) {
      timer_camera = true;
      tocam();
      return;
      };  
    
  };
  
  function tocam() {
    
    if(step_up){
      step_x = (_camera.x - app.camera.x)/step;
      step_y = (_camera.y - app.camera.y)/step;
      step_up = !1;
    }
    
    
    if(_camera.x == app.camera.x && _camera.y == app.camera.y) {
      timer_camera = false;
      return;
      };  

    // var speed = 1;        
    // app.camera.x += 1 > Math.abs(_camera.x - app.camera.x) ? 0 : _camera.x > app.camera.x ? speed : _camera.x < app.camera.x ? -speed : 0; 
    // app.camera.y += 1 > Math.abs(_camera.y - app.camera.y) ? 0 : _camera.y > app.camera.y ? speed : _camera.y < app.camera.y ? -speed : 0; 


    
    app.camera.x += step_x > Math.abs(_camera.x - app.camera.x) ? 0 : step_x;
    app.camera.y += step_y > Math.abs(_camera.y - app.camera.y) ? 0 : step_y;
    
    setTimeout(tocam,10);
  }  
  
  
  
  
  
  
  

  function resize(e) {
    app.canvas.width = window.innerWidth || 100;
    app.canvas.height = window.innerHeight || 100;
  };

  var timer_zoom = false;
  var _zoom = app.zoom;
  
  function onWheel(e) {
    var m = app.mouse;
    var _c = app._camera;
    
    _c.x += (m.x - app.canvas.width/2)/app.zoom;
    _c.y += (m.y - app.canvas.height/2)/app.zoom;
    
    e = e || window.event;
    var delta = e.deltaY || e.detail || e.wheelDelta;
    var _d = (delta/200);
    _zoom = _zoom + _d < 0.25 ? 0.25 : _zoom + _d;
    if(!timer_zoom) {
      timer_zoom = true;
      tozoom()
      };
    e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    
      step_up = true;
      if(!timer_camera && !(_camera.x == app.camera.x && _camera.y == app.camera.y)) {
      timer_camera = true;
      tocam();
      return;
      }; 
  } 
    
    
  function tozoom() {
    if(_zoom == app.zoom) {
      timer_zoom = false;
      return;
      };  

    var speed = 0.025;    
    app.zoom +=  0.05 > Math.abs(_zoom - app.zoom) ? 0 : _zoom > app.zoom ? speed : _zoom < app.zoom ? -speed : 0;    
    
    setTimeout(tozoom,10);
  }  
    
    
    
    
  };
  
  window.Controls = _calss;
})();
function Game() {
 
  var app = {}
 
  app.canvas = document.getElementById("canvas");
  app.canvas.width = window.innerWidth;
  app.canvas.height = window.innerHeight;
  
  app.context = app.canvas.getContext("2d");
  app.imagesArr = {};
  
  
  app.zoom = 1;
  //app.BLOCK_SIZE = 64;
  
  app.greenL = [];
  app.redL = [];

  app.start_dot = finish_dot = {
    x: 0,
    y: 0
  };

  app.last_way = [];
  app.lastKey = 0;

  app.camera = {
    x: 0,
    y: 0
  };

  app.mouse = {
    x: 0,
    y: 0
  }
  
  
  
  
  
  
  
  
  
  window.func_packs.forEach(function(e){
    e.call(app);
  });
  
  app.config = new Config(app);  
  app.renders = new Renders(app);  
  app.controls = new Controls(app);  
  app.layers = [
    new Layer_1(app),
    new Layer_2(app)
  ];
  
  this.app = app;
  
  var sources = {
			"img/forest.png": "img/forest.png",
      "img/layer_2.png": "img/layer_2.png"
  };
		
  app.loadImages(sources,()=>{console.log("done")}); 
  
  
  
  
  
  
  
  
  //====================== start
  var fps = 30;
  var delay = 1000/fps;
  var printed = false;
  
  
  function render() {
    if(!printed) return;
    app.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    app.context.imageSmoothingEnabled = false;
    
    app.layers.forEach(function(i){
      i.render();
    });
    
    var _pos = app.isoTo2D({
      x: Math.round(           (app.mouse.x + app.camera.x)*(app.layers[0].two.width/(app.layers[0].iso.width/2))      ),
      y: Math.round(           (app.mouse.y + app.camera.y)*(app.layers[0].two.height/(app.layers[0].iso.height))         )
    }); 
    app.context.fillText(_pos.x + " | " + _pos.y, 5 , 35 );
    
    
    var _pos = app.isoTo2D({
      x: Math.round(           (app.mouse.x + app.camera.x)*(app.layers[1].two.width/(app.layers[1].iso.width/2))      ),
      y: Math.round(           (app.mouse.y + app.camera.y)*(app.layers[1].two.height/(app.layers[1].iso.height))         )
    }); 
    app.context.fillText(_pos.x + " | " + _pos.y, 5 , 55 );
    
    
    
    
    
    setTimeout(render,delay);
  };
  
  this.start = function() {
    if(!printed){
      printed = true;
      render();
    }
  }
  
  this.stop = function() {
    printed = false;
  }
  
  //====================== /start
  
}
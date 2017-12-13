function Game() {
 
  var app = {}
 
  app.canvas = document.getElementById("canvas");
  app.canvas.width = window.innerWidth;
  app.canvas.height = window.innerHeight;
  
  app.context = app.canvas.getContext("2d");
  app.imagesArr = {};
  
  app.size = [1500,1500];
  app.zoom = 1;
  
  app.camera = {x:0,y:0};
  app.mouse = {x:0,y: 0};
  
  window.func_packs.forEach(function(e){
    e.call(app);
  });
  
  app.config = new Config(app);  
  app.renders = new Renders(app);  
  app.controls = new Controls(app);  
  app.layers = [
    new Layer_1(app),
    new Layer_2(app),
    new Layer_3(app),
    new Layer_2(app)
  ];
  
  this.app = app;
  
  
  //====================== start
  var fps = 80;
  var delay = 1000/fps;
  var printed = false;
  
  
  function render() {
    if(!printed) return;
    app.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    app.context.imageSmoothingEnabled = false;
    
    
    
    app.layers.forEach(function(i){
      i.render();
    });
    
    if(!!window.fiz) app.renders.lines(app.editor.layer || app.layers[0],app.size);
    
    var _pos = app.getPos(app.editor.layer || app.layers[0]);
    app.context.font = "20px Arial";
    app.context.fillText(_pos.y + " | " + _pos.x, 5 , 25 );
    
    var _pos = app.getBlock(app.editor.layer || app.layers[0]);
    app.context.font = "20px Arial";
    app.context.fillText(_pos.y + " | " + _pos.x, 5 , 45 );

    

    // if(app.editor.layer != undefined && app.editor.block != undefined) {
      
      // var l = app.editor.layer;
      // var t = l.units[app.editor.block];
      
      // var _pos = app.getPos(l);
      // _pos = {
        // x: Math.ceil(_pos.x / l.two.height)-1,
        // y: Math.ceil(_pos.y / l.two.width)-1
      // };
      
      
      // app.context.save();
			// app.context.globalAlpha = 0.5;
      
      // app.renders[l.renders](_pos.y,_pos.x,l,t);
      
      // app.context.restore();
    // }
    
    
    
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
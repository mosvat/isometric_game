var BLOCK_SIZE = 100;

(function Game(w) {
var win = w; 
var can;
var	ctx;
var imagesArr = {};

var camera = {
  x: 0,
  y: 0
};

var mouse = {
  x: 0,
  y: 0
}

win.addEventListener("resize",resize);
win.addEventListener("mousemove",mousemove);
win.addEventListener("keydown",keydown);
win.addEventListener("load",init);  

if (win.addEventListener) {
  if ('onwheel' in document) {
    win.addEventListener("wheel", onWheel);
    } else if ('onmousewheel' in document) {
          win.addEventListener("mousewheel", onWheel);
    } else {
      win.addEventListener("MozMousePixelScroll", onWheel);
    }
  } else {
      win.attachEvent("onmousewheel", onWheel);
  };

function onWheel(e) {
  e = e || window.event;
  var delta = e.deltaY || e.detail || e.wheelDelta;
  var info = document.getElementById('delta');
  // info.innerHTML = +info.innerHTML + delta;
  BLOCK_SIZE += delta/10;
  e.preventDefault ? e.preventDefault() : (e.returnValue = false);
  }
  
function init(e) {
	can = document.getElementById("canvas");
	ctx = can.getContext("2d");

  
  function loadImages(sources, callback) {
    var loadedImages = 0;
    var numImages = 0;
    for(var src in sources) {
      numImages++;
    };
    for(var src in sources) {
      imagesArr[src] = new Image();
      imagesArr[src].onload = function(){
        if (++loadedImages >= numImages) {
          callback(imagesArr);
        }
      };	
      //imagesArr[src].crossOrigin = "anonymous";
      imagesArr[src].src = sources[src];
    };
  };  
    
  var sources = {
			"img/forest.png": "img/forest.png",
  };
		
  loadImages(sources, timeout); 
  resize();

};    
    

function keydown(e) {
    var k = e.keyCode;
    if(k==87 || k==38) camera.y -= 32;
    if(k==83 || k==40) camera.y += 32;
    if(k==68 || k==39) camera.x += 64;
    if(k==65 || k==37) camera.x -= 64;
};

function resize(e) {
  can.width = win.innerWidth || 100;
  can.height = win.innerHeight || 100;
};

function mousemove(e) {
    mouse.x = e.offsetX == undefined ? e.layerX : e.offsetX;
		mouse.y = e.offsetY == undefined ? e.layerY : e.offsetY;
		//camera.x = e.clientX; 
		//camera.y = e.clientY; 
};	
	
	
function timeout() {
    setTimeout(function () {
        render();
        timeout();
    }, 1000/31);
};	

/*
var toRad = Math.PI / 180;
var dZ = 45*toRad;
var dy = 45*toRad;  
x1 = x*Math.cos(dZ) - y*Math.sin(dZ);
y1 = x*Math.sin(dZ) + y*Math.cos(dZ);
*/

var toRad = Math.PI / 180;
var dZ = 45*toRad;



function render(data) {	
  ctx.clearRect(0, 0, win.innerWidth, win.innerHeight);
    ctx.imageSmoothingEnabled = false;
  var s = 100;
  var ss = 0;
  for(var i = 0; i < map.length; i++)
    for(var j = 0; j < map[i].length; j++){
 

      var _pos = twoDToIso({
        x: j*BLOCK_SIZE,
        y: i*BLOCK_SIZE
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
      //ctx.fillText(++ss, _pos.x + BLOCK_SIZE - camera.x, _pos.y + BLOCK_SIZE/2 - camera.y);
    }  
  
  ctx.font = "35px Arial";
  ctx.fillStyle = "Black";  
  ctx.fillText((mouse.x + camera.x) + " | " + (mouse.y + camera.y), 5 , 35 );
  
  var _pos = isoTo2D({
    x: mouse.x + camera.x,
    y: mouse.y + camera.y 
  }); 
    
  _pos.x += BLOCK_SIZE/2;  
  _pos.y -= BLOCK_SIZE/2; 
  
  ctx.fillText(_pos.x + " | " + _pos.y, 5 , 70 );    
  
  _pos.x = Math.floor(_pos.x/BLOCK_SIZE)*BLOCK_SIZE;
  _pos.y = Math.floor(_pos.y/BLOCK_SIZE)*BLOCK_SIZE;


  
  _pos = twoDToIso(_pos);
  


  ctx.drawImage(
				imagesArr["img/forest.png"],
					256,
					545,
          64,
					64,
					_pos.x - camera.x,
					_pos.y - camera.y + 3*BLOCK_SIZE/100,
          BLOCK_SIZE*2,
					BLOCK_SIZE*2
			);
      
 
  
};			

  function twoDToIso(p){
    var point = {};
    point.x = (p.x + p.y);
    point.y = (p.y - p.x) / 2; 
    return point;
  };
  
  
  function isoTo2D(p){
  var point = {};
  point.x = (2 * -p.y + p.x) / 2;
  point.y = (2 * p.y + p.x) / 2;
  return point;
 };
 
})(window);









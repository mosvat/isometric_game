var BLOCK_SIZE = 100;

(function Game(w) {
var win = w; 
var can;
var	ctx;
var imagesArr = {};
var renders;

var lastDot_1 = lastDot_2 = {
  x: 0,
  y: 0
};



var lastKey = 0;

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
win.addEventListener("mousedown",function(e){

  var _pos = isoTo2D({
    x: mouse.x + camera.x,
    y: mouse.y + camera.y 
  }); 
  
  _pos.x += BLOCK_SIZE/2;  
  _pos.y -= BLOCK_SIZE/2; 
  
  _pos.x = Math.floor(_pos.x/BLOCK_SIZE);
  _pos.y = Math.floor(_pos.y/BLOCK_SIZE);
  
  
  
  var _p = _pos.x;
    _pos.x = _pos.y;
    _pos.y = _p;
    
  
  if(e.button == 0) {
    lastDot_2 = lastDot_1;
    lastDot_1 = _pos;
    return;
  };


  
  if(map.structure[_pos.x] == undefined) map.structure[_pos.x] = [];
  if(map.structure[_pos.x][_pos.y] == undefined) map.structure[_pos.x][_pos.y] = 0;
  
  
  
  
  var _key = map.structure[_pos.x][_pos.y];
  
  if(lastKey == _key) {
    var set = false;
    for(var key in window.units) {
      if(set) {
        map.structure[_pos.x][_pos.y] = key;
        set = false;
        }
      if(_key == key) set = true;
    }
    if(set)
      for(var key in window.units) {
        map.structure[_pos.x][_pos.y] = key;
        break;
      }
    lastKey = map.structure[_pos.x][_pos.y];
  }else{
    map.structure[_pos.x][_pos.y] = lastKey;
  }

  //map.structure[_pos.x][_pos.y] = map.structure[_pos.x][_pos.y] == 1 ? 0 : 1;
  
  
}); 

 

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
  renders = window.renders.call(this,ctx,twoDToIso,isoTo2D,imagesArr,camera);
  console.log(renders);

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
    }, 1000/20);
};	

var toRad = Math.PI / 180;
var dZ = 45*toRad;



function render(data) {	
  ctx.clearRect(0, 0, win.innerWidth, win.innerHeight);
    ctx.imageSmoothingEnabled = false;
  var s = 100;
  var ss = 0;
  for(var i = 0; i < map.structure.length; i++)
    //if(map.structure[i] == undefined) continue;
    try{
      for(var j = 0; j < map.structure[i].length; j++)
        //if(map.structure[i][j] == undefined) continue;
        if(map.structure[i][j] != 0) renders.ground(i,j,map.structure[i][j]);
    }catch(err){
      //console.log(err);
    };
  ctx.font = "35px Arial";
  ctx.fillStyle = "Black";  
  
  
  var _pos = isoTo2D({
    x: mouse.x + camera.x,
    y: mouse.y + camera.y 
  }); 
  ctx.fillText((_pos.x+BLOCK_SIZE/2) + " | " + (_pos.y-BLOCK_SIZE/2), 5 , 35 );
  
  
  
  
  
  renders.ground(
    lastDot_1.x,
    lastDot_1.y,
    "g"
  );
  
  
  renders.ground(
    lastDot_2.x,
    lastDot_2.y,
    "b"
  );  
  
  
  
  
  
  //==================================== Hover
  // var _pos = isoTo2D({
    // x: mouse.x + camera.x,
    // y: mouse.y + camera.y 
  // }); 
    
  // _pos.x += BLOCK_SIZE/2;  
  // _pos.y -= BLOCK_SIZE/2; 
  
  // ctx.fillText(_pos.x + " | " + _pos.y, 5 , 70 );    
  
  // _pos.x = Math.floor(_pos.x/BLOCK_SIZE)*BLOCK_SIZE;
  // _pos.y = Math.floor(_pos.y/BLOCK_SIZE)*BLOCK_SIZE;

  // var _p = _pos.x;
    // _pos.x = _pos.y;
    // _pos.y = _p;
  
  // _pos = twoDToIso(_pos);

  // ctx.drawImage(
				// imagesArr["img/forest.png"],
					// 0,
					// 0,
          // 64,
					// 32,
					// _pos.x - camera.x,
					// _pos.y - camera.y,
          // BLOCK_SIZE*2,
					// BLOCK_SIZE
			// );
  //==================================== /Hover    
 
  
};			


})(window);



  // function twoDToIso(p){
    // var point = {};
    // point.x = (p.x + p.y);
    // point.y = (p.y - p.x) / 2; 
    // return point;
  // };
  
  function twoDToIso(p){
    var point = {};
    point.x = (p.x + p.y);
    point.y = (p.x - p.y) / 2; 
    return point;
  };
  
  function isoTo2D(p){
    var point = {};
    point.x = (2 * -p.y + p.x) / 2;
    point.y = (2 * p.y + p.x) / 2;
    return point;
  };
 
 //============================================================================================        
var test_arr = [
  [1,1,1,1,1],
  [2,2,2,2,2],
  [3,3,3,3,3],
  [4,4,4,4,4],
  [1,2,3,4,1]
];
 
 //============================================================================================ 
  function way(pos,tar,map1){
    var map = map1.slice();
    

     
   function ways(pos){
      //console.log(pos);
      pos.father = this;
      pos.ways = [];

      var arr = [
        [-1,0],
        [0,-1],
        [1,0],
        [0,1]
      ];
      
      var stop = false;
      for(var i = 0; i < arr.length; i++){
        var _pos = {
          x: pos.x + arr[i][0],
          y: pos.y + arr[i][1]
        } 
        if(_pos.x == tar.x && _pos.y == tar.y) {
          return return_way(pos);
          stop = true;
          break; //done
        }
        if(!stop && map[_pos.x] != undefined && map[_pos.x][_pos.y] != 0 && map[_pos.x][_pos.y] != undefined) {
          map[_pos.x][_pos.y] = 0;
          pos.ways.push(_pos);
          ways.call(pos,_pos);
        }
      }
    }

    function return_way(pos){
      var way = [];
      
      function push(){
        way.unshift(pos);
        if((pos.father.exit) && ((pos = pos.father) != undefined)) push();
      }
      push();
      console.log(way);
      return way;
    };
    
    ways.call({exit: true},pos);
  };
//============================================================================================       
    
    
    
    
    var point = {};
    point.x = (2 * -p.y + p.x) / 2;
    point.y = (2 * p.y + p.x) / 2;
    return point;
  };
 
 
 
 
 
 
 
 
 
 
 
 




var BLOCK_SIZE = 64;

(function Game(w) {
var win = w; 
var can;
var	ctx;
var imagesArr = {};
var renders;

var start_dot = finish_dot = {
  x: 0,
  y: 0
};

var last_way = [];

var lastKey = 0;

var camera = {
  x: 0,
  y: 0
};

var mouse = {
  x: 0,
  y: 0
}

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
  BLOCK_SIZE += (delta/100)*16;
  e.preventDefault ? e.preventDefault() : (e.returnValue = false);
  }
  
function onmousedown(e) {
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
    finish_dot = start_dot;
    start_dot = _pos;
    last_way = way(start_dot,finish_dot,window.map.structure,["w","rif"]);
    return;
  };
  


  
  if(map.structure[_pos.x] == undefined) map.structure[_pos.x] = [];
  if(map.structure[_pos.x][_pos.y] == undefined) map.structure[_pos.x][_pos.y] = "w";
  
  
  
  
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
  
  last_way = way(start_dot,finish_dot,window.map.structure,["w","rif"]);  
}  
  
  
  
  
win.addEventListener("load",init);   
function init(e) {
	can = document.getElementById("canvas");
	ctx = can.getContext("2d");
  renders = window.renders.call(this,ctx,twoDToIso,isoTo2D,imagesArr,camera);

  win.addEventListener("resize",resize);
  win.addEventListener("keydown",keydown);
  
  can.addEventListener("mousemove",mousemove);
  can.addEventListener("mousedown",onmousedown);
 
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
  
  
    //way
  for(var i = 0; i < last_way.length; i++) 
    renders.ground(last_way[i].x,last_way[i].y,"g");
  //
  
  
  renders.ground(
    start_dot.x,
    start_dot.y,
    "r"
  );
  
  
  renders.ground(
    finish_dot.x,
    finish_dot.y,
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
function way(start,finish,_map,_sub = []){
  var map = []
  for(var i = 0; i < _map.length; i++)
    map[i] = _map[i].slice(0);
  
  
  
  if(map == _map) console.log("true");
  var __way = [];
  
  var dots_pack = [ //Packet
    [ // Array dots
      start // dot
    ]
  ];
  
 
  
  var w = 0;
  cycle();

  return __way;
      
  function getway(dot){
      var _dot = dot;
      var way = [];
      
      g();
      function g() {
        way.unshift(_dot);
        if(_dot.f != undefined){
          var d = _dot.f;
          delete _dot.f;
          _dot = d;
          g();
        }
      }
    return way;
  }
  
  
  
  function cycle() {
    var _array_dots = dots_pack[w];


    for(var i = 0; i < _array_dots.length; i++){
      var _dot = _array_dots[i];
      
      if(_dot.x == finish.x && _dot.y == finish.y) { //find
        __way = getway(_dot);
        return;
      }
      var a = [
          [{x: -1, y:  0},[4,5],1],
          [{x:  0, y: -1},[5,6],1],
          [{x:  1, y:  0},[6,7],1],
          [{x:  0, y:  1},[7,4],1],
          [{x: -1, y:  1},[],-2],
          [{x: -1, y: -1},[],-2],
          [{x:  1, y: -1},[],-2],
          [{x:  1, y:  1},[],-2]
         
      ];
      
      for(var j = 0; j < a.length; j++){

        var s = a[j][0];
        
        var x = _dot.x + s.x,
            y = _dot.y + s.y;
        
        if((map[x] != undefined) && (map[x][y] != undefined) && ((_sub.indexOf(map[x][y])) == -1) && (a[j][2] >= 0)) {
          
         for(var h = 0; h < a[j][1].length; h++)
          a[a[j][1][h]][2]++;

          map[x][y] = undefined;
          if(dots_pack[(w+1)] == undefined) dots_pack[(w+1)] = []; //add _array_dots
          dots_pack[(w+1)].push({
            f: _dot,
            x: x,
            y: y
          });
      }
        
      }
    }
    if(dots_pack[++w] != undefined) cycle();
  }

}
//============================================================================================       
    
    
    

 
function giveMap() {
  var str = "[";
  for(var i = 0; i < window.map.structure.length; i++){
    str += "\n\t[";
    for(var j = 0; j < window.map.structure[i].length; j++){
      str += '"' + window.map.structure[i][j] + '"' + ((j < (window.map.structure[i].length - 1)) ? "," : "");
    }
    str += ((i < (window.map.structure[i].length - 1)) ? "]," : "]");
  }
  str += "\n]";
return str;
}
 
 
 
 
 
 function generate(k = 0.1,x = 0.15) {
  for (var i = 0; i < 40; i++) {
    if(window.map.structure[i] == undefined ) window.map.structure[i] = [];
    for (var j = 0; j < 40; j++) {
      var value = Math.abs(noise.perlin2(i / x, j / x));
      if(value > k) {
        window.map.structure[i][j] = "gr";
      }else{
        window.map.structure[i][j] = "w";
      };
    }
  }
 }
 
 
 




(function() {




window.block = {
  size: 100,
  width: 64,
  height: 32
}




window.objects = (function() {
  var objects = {};
  objects["g"] = {
  	"img": {
			"0": {
				"render": "pattern",
				"src": "img/forest.png",
				"_x": 0,
				"_y": 0,
				"_w": 50,
				"_h": 50,
				"x": 0,
				"y": 0,
				"w": 50,
				"h": 50,
				"sw": 50,
				"sh": 50
			}
		}
  }
  return objects;
})();













window.map = (function() {
  var map = {};
  map.structure = [
    [1,0,1,1,1],
    [1,0,1,0,0],
    [1,1,1,1,1],
    [0,0,1,0,1],
    [1,1,1,0,1]
  ];
  return map;
})();








})();
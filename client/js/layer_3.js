;(function() {

    var _Layer_3 = function(app) {

        var max = app.size;

        var iso = {
            width: 32,
            height: 16
        };

        var two = {
            width: 25,
            height: 25
        };


        var units = app.config["units"];
        var render_name = "units";
        var print = app.renders[render_name];

        var map = [];
        var list = [];
        var toRad = Math.PI / 180;


        window.a = {};

        function iscrossing(u1, u2) {
            if (
                ((u1 != u2) &&
                    ((u1.pos.x + u1.fiz.x >= u2.pos.x) && (u1.pos.x <= u2.pos.x + u2.fiz.x)) &&
                    ((u1.pos.y + u1.fiz.y >= u2.pos.y) && (u1.pos.y <= u2.pos.y + u2.fiz.y)))
            ) return true
            return false;
        }


        function c() {

            document.getElementById("text").innerHTML = JSON.stringify(list);




            list.forEach(function(obj) {
                //============================================== change angle
                obj.dir = Math.random() < 0.01 ? (obj.dir + (360 + ((Math.random() < 0.5) ? 90 : -90))) % 360 : obj.dir;

                //============================================== [-] vector
                for (let key in obj.vec)
                    obj.vec[key] *= (Math.abs(obj.vec[key]) < 0.1) ? 0 : 0.9;
                //============================================== [+] vector
                var d = ((obj.dir) % 360) * toRad;
                var s = Math.random() < 1 ? obj.speed : 0;

                setVector(
                    obj,
                    obj.vec.x + s * Math.cos(d),
                    obj.vec.y + s * Math.sin(d)
                );
                //============================================== set pos
                var oldPos = {
                    x: obj.pos.x,
                    y: obj.pos.y
                };

                var not_cross_2 = []; // layer 2
                var not_cross_1 = []; // layer 1
                var not_cross_0 = []; // layer 0
                
                
                // layer 1
                    var a = app.layers[1].two;
                      app.layers[1].list.forEach(function(_obj){
                        var _obj1 = {
                          pos: {
                            x: _obj.pos.x * a.width,
                            y: _obj.pos.y * a.height
                          },
                          fiz: {
                            x: _obj.fiz.x * a.width,
                            y: _obj.fiz.y * a.height
                          }
                        }
                        if( !iscrossing(obj,_obj1) ) not_cross_2.push(_obj1);
                      });
                // /layer1
                
                
                list.forEach(function(_obj) {
                    if (!iscrossing(obj, _obj)) not_cross_2.push(_obj);
                });


                setPos(
                    obj,
                    obj.pos.x + Math.ceil(obj.vec.x),
                    obj.pos.y + Math.ceil(obj.vec.y)
                );

                for (var i = 0; i < not_cross_2.length; i++) {
                    _obj = not_cross_2[i];
                    if (iscrossing(obj, _obj)) {
                        setPos(obj, oldPos.x, oldPos.y);
                        setDir(
                            obj,
                            (obj.dir + 360 + (Math.random() < 0.5 ? 90 : -90)) % 360
                        );
                        // _obj.vec.x += obj.vec.x * 0.5;
                        // _obj.vec.y += obj.vec.y * 0.5;

                        obj.vec.x *= -1 * 0.5;
                        obj.vec.y *= -1 * 0.5;
                        return;
                        break;
                    };
                }

            for(var i = 0; i < not_cross_2.length; i++){
                        _obj = not_cross_2[i];
                        if( iscrossing(obj,_obj) ) {
                  setPos(obj, oldPos.x, oldPos.y);
      

                        setDir(
                            obj,
                            (obj.dir + 360 + (Math.random() < 0.5 ? 90 : -90)) % 360
                        );
    
        
        obj.vec.x *= -0.5;
        obj.vec.y *= -0.5;
        return;
        break;
      };
    }


            });
            window.setTimeout(c, 50);
        }

        c();


        function setUnit(x, y, unit) {
            x *= two.width;
            y *= two.height;
            addUnit(x, y, unit);
        }

        function addUnit(x, y, unit, dir) {
            var obj = {};
            obj.__proto__ = units[unit];

            obj.dir = 0;
            obj.vec = {
                x: 0,
                y: 0
            };
            obj.pos = {
                x: 0,
                y: 0
            };

            setDir(
                obj,
                dir || (Math.round((Math.random() * 270) / 90) * 90)
            );
            setPos(
                obj,
                x,
                y
            );

            list.push(obj);
        }


        var a = this;

        function render() {
            bubbleSort(list);
            list.forEach(function(obj) {
                print(obj, a);
            });
        };



        function setPos(unit, x, y) {

            // var _b = getBlock(x,y);

            // if((window.h = ++window.h || 0)<10) console.log(_b);

            // for(var i = _b.x; i < _b.x + unit.fiz.x; i++)
            // for(var j = _b.y; j < _b.y + unit.fiz.y; j++){
            // map[j] = map[j] || [];
            // map[j][i] = unit;
            // }

            //var a = app.layers[3].getBlock(x,y);
            //app.layers[3].set(a.y,a.x,"_")

            app.layers[3].set(10, 0, "_")

            unit.pos.x = x < 0 ? unit.x : x + unit.fiz.x > max[0] ? max[0] - unit.fiz.x : x;
            unit.pos.y = y < 0 ? unit.y : y + unit.fiz.y > max[1] ? max[1] - unit.fiz.y : y;
        };

        function setDir(unit, dir) {
            unit.dir = dir % 360;
        };


        function setVector(unit, x, y) {
            unit.vec.x = Math.ceil(x * 100) / 100;
            unit.vec.y = Math.ceil(y * 100) / 100;
        };



        function getBlock(x, y) {
            return {
                x: x = Math.ceil(y / two.width),
                y: y = Math.ceil(x / two.height)
            };
        };




        function bubbleSort(a) {
            var swapped;
            do {
                swapped = false;
                for (var i = 0; i < a.length - 1; i++) {
                    if (a[i].pos.x > a[i + 1].pos.x) {
                        var temp = a[i];
                        a[i] = a[i + 1];
                        a[i + 1] = temp;
                        swapped = true;
                    }
                }
            } while (swapped);
        }



        this.iso = iso;
        this.two = two;
        this.units = units;
        this.render_name = render_name;
        this.list = list;
        this.render = render;
        this.add = addUnit;
        this.set = setUnit;
    };

    window.Layer_3 = _Layer_3;
})();
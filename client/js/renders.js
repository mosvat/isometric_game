;(function() {

    var _calss = function(app) {

        this.ground = function(x, y, l, t) {

            var _pos = app.twoDToIso({
                x: x * l.iso.width / 2 * app.zoom,
                y: y * l.iso.height * app.zoom
            });

            //var id = ;
            var t = t || l.units[l.map[x][y]];

            if (!(t.img in app.imagesArr)) {
                var o = {};
                o[t.img] = t.img;
                app.loadImages(
                    o,
                    () => {
                        console.log("done: " + t.img)
                    }
                );
            }

            var coef = {
                w: l.iso.width / t.iso.width,
                h: l.iso.height / t.iso.height
            };



            // if(window.show != undefined && window.show == id) {
            // window.show = undefined;
            // console.log([app.imagesArr[t.img],
            // t.x,
            // t.y,
            // t.w,
            // t.h,
            // Math.round(_pos.x - (app.camera.x - (coef.w * t._x)) * app.zoom),
            // Math.round(_pos.y - (app.camera.y - (coef.h * t._y)) * app.zoom),
            // Math.round(coef.w * t._w * app.zoom),
            // Math.round(coef.h * t._h * app.zoom) ]);
            // }



            app.context.drawImage(
                app.imagesArr[t.img],
                t.x,
                t.y,
                t.w,
                t.h,
                Math.round(_pos.x + app.canvas.width/2 - (app.camera.x - (coef.w * t._x)) * app.zoom) -2,
                Math.round(_pos.y + app.canvas.height/2 - (app.camera.y - (coef.h * t._y)) * app.zoom) -2,
                Math.round(coef.w * t._w * app.zoom) +2,
                Math.round(coef.h * t._h * app.zoom) +2
            );



            // app.context.fillText(
            // x + " | " + y, 
            // _pos.x - (app.camera.x - (coef.w * t._x)) * app.zoom,
            // _pos.y - (app.camera.y - (coef.h * t._y)) * app.zoom
            // );  

        };

        this.building = function(obj, l, z) {
            

            var _pos = app.twoDToIso({
                x: obj.pos.x * l.iso.width / 2 * app.zoom,
                y: obj.pos.y * l.iso.height * app.zoom
            });

            var t = obj;

            if (!(t.img in app.imagesArr)) {
                var o = {};
                o[t.img] = t.img;
                app.loadImages(
                    o,
                    () => {
                        console.log("done: " + t.img)
                    }
                );
            }

            var coef = {
                w: l.iso.width / t.iso.width,
                h: l.iso.height / t.iso.height
            };

            ctx = app.context;

            ctx.drawImage(
                app.imagesArr[t.img],
                t.x,
                t.y,
                t.w,
                t.h,
                _pos.x - (app.camera.x - (coef.w * t._x)) * app.zoom + app.canvas.width/2,
                _pos.y - (app.camera.y - (coef.h * t._y)) * app.zoom + app.canvas.height/2,
                coef.w * t._w * app.zoom,
                coef.h * t._h * app.zoom
            );
            //===============================================


            if (!!window.fiz) {
                var _pos = app.twoDToIso({
                    x: obj.pos.x * l.iso.width / 2 * app.zoom,
                    y: obj.pos.y * l.iso.height * app.zoom
                });

                var _x = app.twoDToIso({
                    x: (obj.fiz.x) * l.iso.width / 2 * app.zoom,
                    y: 0
                });

                var _y = app.twoDToIso({
                    x: 0,
                    y: (obj.fiz.y) * l.iso.height * app.zoom
                });

                _pos = {
                    x: _pos.x - (app.camera.x * app.zoom) + app.canvas.width/2,
                    y: _pos.y - (app.camera.y * app.zoom) + app.canvas.height/2
                };


                ctx = app.context;


                ctx.beginPath();

                ctx.moveTo(
                    _pos.x,
                    _pos.y,
                );

                ctx.lineTo(
                    _pos.x + _x.x,
                    _pos.y + _x.y,
                );
                ctx.lineTo(
                    _pos.x + _x.x + _y.x,
                    _pos.y + _x.y + _y.y,
                );
                ctx.lineTo(
                    _pos.x + _y.x,
                    _pos.y + _y.y,
                );
                ctx.lineTo(
                    _pos.x,
                    _pos.y,
                );

                ctx.closePath();
                ctx.fillStyle = "rgba(255,0,0,0.5)";
                ctx.fill();
                ctx.stroke();


                ctx.fillText(
                    z,
                    _pos.x,
                    _pos.y
                );
            };
            // ctx.fillText(
            // x + " | " + y, 
            // _pos.x - (app.camera.x + (coef.w * t._x)) * app.zoom,
            // _pos.y - (app.camera.y + (coef.h * t._y)) * app.zoom
            // );     
        };

        this.units = function(obj, l) {


            var _pos = app.twoDToIso({
                x: ((obj.pos.x / l.two.width / 2) * l.iso.width) * app.zoom,
                y: ((obj.pos.y / l.two.height) * l.iso.height) * app.zoom
            });


            var t = obj;
            var ctx = app.context;

            var i = t.img[t.dir];
            var img = i.img;

            if (!(img in app.imagesArr)) {
                var o = {};
                o[img] = img;
                app.loadImages(
                    o,
                    () => {
                        console.log("done: " + img)
                    }
                );
            }


            ctx.drawImage(
                app.imagesArr[img],
                i.x,
                i.y,
                i.w,
                i.h,
                _pos.x - (app.camera.x + t._x) * app.zoom + app.canvas.width/2,
                _pos.y - (app.camera.y + t._y) * app.zoom + app.canvas.height/2,
                t._w * app.zoom,
                t._h * app.zoom
            );
            //======================
            if (window.fiz != true) return;

            var _pos = app.twoDToIso({
                x: ((obj.pos.x / l.two.width / 2) * l.iso.width) * app.zoom,
                y: ((obj.pos.y / l.two.height) * l.iso.height) * app.zoom
            });

            var _x = app.twoDToIso({
                x: ((obj.fiz.x / l.two.width / 2) * l.iso.width) * app.zoom,
                y: 0
            });

            var _y = app.twoDToIso({
                x: 0,
                y: ((obj.fiz.y / l.two.height) * l.iso.height) * app.zoom
            });

            _pos = {
                x: _pos.x - (app.camera.x * app.zoom) + app.canvas.width/2,
                y: _pos.y - (app.camera.y * app.zoom) + app.canvas.height/2
            };

            ctx.beginPath();

            ctx.moveTo(
                _pos.x,
                _pos.y,
            );

            ctx.lineTo(
                _pos.x + _x.x,
                _pos.y + _x.y,
            );
            ctx.lineTo(
                _pos.x + _x.x + _y.x,
                _pos.y + _x.y + _y.y,
            );
            ctx.lineTo(
                _pos.x + _y.x,
                _pos.y + _y.y,
            );
            ctx.lineTo(
                _pos.x,
                _pos.y,
            );
            ctx.closePath();
            ctx.fillStyle = "rgba(0,0,255,0.9)";
            ctx.fill();

            
            //ctx.stroke();

            // ctx.fillText(
                // obj.dir,
                // _pos.x,
                // _pos.y
            // );

            // ctx.fillText(
                // obj.pos.x + " | " + obj.pos.y,
                // _pos.x,
                // _pos.y + 25
            // );

        };


        this.lines = function(l, s) {



            var sx = app.size[0] / l.two.width;
            var sy = app.size[1] / l.two.height;

            var ctx = app.context;

            var _pos = app.twoDToIso({
                x: 0,
                y: 0
            });

            _pos = {
                x: _pos.x - (app.camera.x * app.zoom) + app.canvas.width/2,
                y: _pos.y - (app.camera.y * app.zoom) + app.canvas.height/2
            };

            var _x = app.twoDToIso({
                x: (l.iso.width / 2) * app.zoom,
                y: 0
            });

            var _y = app.twoDToIso({
                x: 0,
                y: (l.iso.height) * app.zoom
            });


            ctx.strokeStyle = "rgba(0,0,0,0.5)";

            for (var i = 0; i < sx + 1; i++) {
                ctx.beginPath();
                ctx.moveTo(
                    _pos.x + _x.x * i,
                    _pos.y + _x.y * i
                );
                ctx.lineTo(
                    _pos.x + _x.x * i + _y.x * sy,
                    _pos.y + _x.y * i + _y.y * sy
                );
                ctx.stroke();
            };

            for (var i = 0; i < sy + 1; i++) {
                ctx.beginPath();
                ctx.moveTo(
                    _pos.x + _y.x * i,
                    _pos.y + _y.y * i
                );
                ctx.lineTo(
                    _pos.x + _y.x * i + _x.x * sx,
                    _pos.y + _y.y * i + _x.y * sx
                );
                ctx.stroke();
            };
        };


    };

    window.Renders = _calss;
})();
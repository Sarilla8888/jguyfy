(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Sonidosdegranja_atlas_1", frames: [[0,0,1570,1024]]},
		{name:"Sonidosdegranja_atlas_2", frames: [[0,0,1200,1200]]},
		{name:"Sonidosdegranja_atlas_3", frames: [[0,0,1084,1033]]},
		{name:"Sonidosdegranja_atlas_4", frames: [[642,1026,524,930],[1026,0,494,866],[1522,0,518,690],[1168,868,546,704],[0,0,1024,1024],[0,1026,640,1008]]},
		{name:"Sonidosdegranja_atlas_5", frames: [[0,1433,459,585],[461,1433,459,585],[1349,976,422,448],[0,0,392,789],[916,0,328,725],[394,0,454,626],[484,628,430,584],[484,1214,130,166],[1349,454,366,520],[0,791,482,640],[916,727,431,450],[922,1179,422,448],[1349,0,426,452]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.btn = function() {
	this.initialize(ss["Sonidosdegranja_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.btn_1 = function() {
	this.initialize(ss["Sonidosdegranja_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.btnatras = function() {
	this.initialize(ss["Sonidosdegranja_atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.burroborde = function() {
	this.initialize(ss["Sonidosdegranja_atlas_5"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.burro = function() {
	this.initialize(ss["Sonidosdegranja_atlas_5"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.caballoborde = function() {
	this.initialize(ss["Sonidosdegranja_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.caballo = function() {
	this.initialize(ss["Sonidosdegranja_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cerdoborde = function() {
	this.initialize(ss["Sonidosdegranja_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.cerdo = function() {
	this.initialize(ss["Sonidosdegranja_atlas_5"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.fotoFondo = function() {
	this.initialize(img.fotoFondo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3662,2048);


(lib.gallinaborde = function() {
	this.initialize(ss["Sonidosdegranja_atlas_5"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.gallinaextra = function() {
	this.initialize(ss["Sonidosdegranja_atlas_5"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.gallina = function() {
	this.initialize(ss["Sonidosdegranja_atlas_5"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Menufondo = function() {
	this.initialize(ss["Sonidosdegranja_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ovejaborde = function() {
	this.initialize(ss["Sonidosdegranja_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.oveja = function() {
	this.initialize(ss["Sonidosdegranja_atlas_5"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.play = function() {
	this.initialize(ss["Sonidosdegranja_atlas_5"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.pngwingcom2 = function() {
	this.initialize(ss["Sonidosdegranja_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.siguiente = function() {
	this.initialize(ss["Sonidosdegranja_atlas_5"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.stop = function() {
	this.initialize(ss["Sonidosdegranja_atlas_5"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.titulo2 = function() {
	this.initialize(img.titulo2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3300,2550);


(lib.titulogranja = function() {
	this.initialize(ss["Sonidosdegranja_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.vacaborde = function() {
	this.initialize(ss["Sonidosdegranja_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.vaca = function() {
	this.initialize(ss["Sonidosdegranja_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.titulo1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.titulogranja();
	this.instance.setTransform(0,0,0.4204,0.4204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,430.5,430.5);


(lib.btnstopgrafico = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.stop();
	this.instance.setTransform(0,0,0.1413,0.1413);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.2,63.9);


(lib.btnsiguientegrafico = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.siguiente();
	this.instance.setTransform(0,0,0.1895,0.1895);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,84.9);


(lib.btnplaygrafico = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.play();
	this.instance.setTransform(0,0,0.1442,0.1442);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.2,64.9);


(lib.btnmenosgrafico = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.btn_1();
	this.instance.setTransform(0,0,0.1431,0.1431);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65.7,83.7);


(lib.btnmasgrafico = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.btn();
	this.instance.setTransform(0,0,0.1417,0.1417);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65.1,82.9);


(lib.btncerdografico = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.cerdo();
	this.instance.setTransform(0,0,0.3154,0.3154);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,143.2,197.5);


(lib.btncaballografico = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.caballo();
	this.instance.setTransform(0,0,0.319,0.319);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,157.6,276.3);


(lib.btnburrograficp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.burro();
	this.instance.setTransform(0,0,0.3197,0.3197);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104.9,231.8);


(lib.btnatrasgrafico = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.btnatras();
	this.instance.setTransform(0,0,0.1887,0.1887);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79.7,84.6);


(lib.btnvacasimbolo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.vaca();
	this.instance.setTransform(0,0,0.3253,0.3253);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,352.7,336.1);


(lib.btnovejagrafico = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.oveja();
	this.instance.setTransform(0,0,0.3266,0.3266);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,157.5,209.1);


(lib.btngallinagrafico = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.gallina();
	this.instance.setTransform(0,0,0.318,0.318);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116.4,165.4);


(lib.titulogranja_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.titulo1("synched",0);
	this.instance.setTransform(215.25,215.25,0.7078,0.7078,0,0,0,215.2,215.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:215.1,scaleX:1.3274,scaleY:1.3274,x:215.15,y:266},23).to({regX:215.3,regY:215.3,scaleX:0.6843,scaleY:0.6843,x:215.3,y:215.3},25).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.5,-19.5,571.5,571.4);


(lib.btnvaca = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("vacamp3");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib.vaca();
	this.instance.setTransform(0,0,0.3253,0.3253);

	this.instance_1 = new lib.vacaborde();
	this.instance_1.setTransform(149,-36,0.3604,0.3604);

	this.instance_2 = new lib.btnvacasimbolo("synched",0);
	this.instance_2.setTransform(176.3,168.1,1,1,0,0,0,176.3,168.1);
	var instance_2Filter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_2.filters = [instance_2Filter_1];
	this.instance_2.cache(-2,-2,357,340);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_1).wait(2).to(new cjs.ColorFilter(0.6,0.6,0.6,1,25.6,17.2,68,0), 0).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_2, startFrame:2, endFrame:2, x:-2, y:-2, w:357, h:340});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-36,379.7,372.1);


(lib.btnstop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.stop();
	this.instance.setTransform(0,0,0.1413,0.1413);

	this.instance_1 = new lib.btnstopgrafico("synched",0);
	this.instance_1.setTransform(30.1,31.9,1,1,0,0,0,30.1,31.9);
	var instance_1Filter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_1];
	this.instance_1.cache(-2,-2,64,68);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.1413,scaleY:0.1413,x:0,y:0}}]}).to({state:[{t:this.instance,p:{scaleX:0.1794,scaleY:0.1794,x:-8,y:-9}}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_1).wait(2).to(new cjs.ColorFilter(0.6,0.6,0.6,1,25.6,17.2,68,0), 0).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_1, startFrame:2, endFrame:2, x:-2, y:-2, w:64, h:68});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-9,76.4,81.1);


(lib.btnSiguiente1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2
	this.instance = new lib.siguiente();
	this.instance.setTransform(-66,-72,0.1895,0.1895);

	this.instance_1 = new lib.btnsiguientegrafico("synched",0);
	this.instance_1.setTransform(-26,-29.5,1,1,0,0,0,40,42.5);
	var instance_1Filter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_1];
	this.instance_1.cache(-2,-2,84,89);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.1895,scaleY:0.1895,x:-66,y:-72}}]}).to({state:[{t:this.instance,p:{scaleX:0.2428,scaleY:0.2428,x:-77,y:-84}}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_1).wait(2).to(new cjs.ColorFilter(0.6,0.6,0.6,1,25.6,17.2,68,0), 0).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_1, startFrame:2, endFrame:2, x:-2, y:-2, w:84, h:89});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77,-84,102.5,108.8);


(lib.btnplay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.play();
	this.instance.setTransform(0,0,0.1442,0.1442);

	this.instance_1 = new lib.btnplaygrafico("synched",0);
	this.instance_1.setTransform(31.1,32.4,1,1,0,0,0,31.1,32.4);
	var instance_1Filter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_1];
	this.instance_1.cache(-2,-2,66,69);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.1442,scaleY:0.1442,x:0,y:0}}]}).to({state:[{t:this.instance,p:{scaleX:0.1795,scaleY:0.1795,x:-8,y:-8}}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_1).wait(2).to(new cjs.ColorFilter(0.6,0.6,0.6,1,25.6,17.2,68,0), 0).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_1, startFrame:2, endFrame:2, x:-2, y:-2, w:66, h:69});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-8,77.4,80.8);


(lib.btnoveja = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("ovejamp3");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_2
	this.instance = new lib.ovejaborde();
	this.instance.setTransform(-22,-30,0.3698,0.3698);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Capa_1
	this.instance_1 = new lib.oveja();
	this.instance_1.setTransform(0,0,0.3266,0.3266);

	this.instance_2 = new lib.btnovejagrafico("synched",0);
	this.instance_2.setTransform(78.7,104.5,1,1,0,0,0,78.7,104.5);
	var instance_2Filter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_2.filters = [instance_2Filter_1];
	this.instance_2.cache(-2,-2,162,213);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_1).wait(2).to(new cjs.ColorFilter(0.6,0.6,0.6,1,25.6,17.2,68,0), 0).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_2, startFrame:2, endFrame:2, x:-2, y:-2, w:162, h:213});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-30,202,260.4);


(lib.btnmenos = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.btn_1();
	this.instance.setTransform(0,0,0.1431,0.1431);

	this.instance_1 = new lib.btnmenosgrafico("synched",0);
	this.instance_1.setTransform(32.9,41.9,1,1,0,0,0,32.9,41.9);
	var instance_1Filter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_1];
	this.instance_1.cache(-2,-2,70,88);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.1431,scaleY:0.1431,x:0,y:0}}]}).to({state:[{t:this.instance,p:{scaleX:0.1907,scaleY:0.1907,x:-11,y:-14}}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_1).wait(2).to(new cjs.ColorFilter(0.6,0.6,0.6,1,25.6,17.2,68,0), 0).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_1, startFrame:2, endFrame:2, x:-2, y:-2, w:70, h:88});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-14,87.5,111.6);


(lib.btnmas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.btn();
	this.instance.setTransform(0,0,0.1417,0.1417);

	this.instance_1 = new lib.btnmasgrafico("synched",0);
	this.instance_1.setTransform(32.5,41.5,1,1,0,0,0,32.5,41.5);
	var instance_1Filter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_1];
	this.instance_1.cache(-2,-2,69,87);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.1417,scaleY:0.1417,x:0,y:0}}]}).to({state:[{t:this.instance,p:{scaleX:0.187,scaleY:0.187,x:-10,y:-13}}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_1).wait(2).to(new cjs.ColorFilter(0.6,0.6,0.6,1,25.6,17.2,68,0), 0).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_1, startFrame:2, endFrame:2, x:-2, y:-2, w:69, h:87});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-13,85.9,109.4);


(lib.btngallina = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("pollomp3");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_2
	this.instance = new lib.gallinaborde();
	this.instance.setTransform(-26,-45,0.3935,0.3935);

	this.instance_1 = new lib.gallina();
	this.instance_1.setTransform(0,0,0.318,0.318);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[]},1).wait(1));

	// Capa_1
	this.instance_2 = new lib.gallina();
	this.instance_2.setTransform(0,0,0.318,0.318);

	this.instance_3 = new lib.btngallinagrafico("synched",0);
	this.instance_3.setTransform(58.2,82.7,1,1,0,0,0,58.2,82.7);
	var instance_3Filter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_3.filters = [instance_3Filter_1];
	this.instance_3.cache(-2,-2,120,169);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[]},1).to({state:[{t:this.instance_3}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_3Filter_1).wait(2).to(new cjs.ColorFilter(0.6,0.6,0.6,1,25.6,17.2,68,0), 0).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_3, startFrame:2, endFrame:2, x:-2, y:-2, w:120, h:169});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-45,169.2,229.8);


(lib.btncerdo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("cerdomp3");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_2
	this.instance = new lib.cerdoborde();
	this.instance.setTransform(-21,-24,0.3558,0.3558);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Capa_1
	this.instance_1 = new lib.cerdo();
	this.instance_1.setTransform(0,0,0.3154,0.3154);

	this.instance_2 = new lib.btncerdografico("synched",0);
	this.instance_2.setTransform(71.6,98.7,1,1,0,0,0,71.6,98.7);
	var instance_2Filter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_2.filters = [instance_2Filter_1];
	this.instance_2.cache(-2,-2,147,202);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_1).wait(2).to(new cjs.ColorFilter(0.6,0.6,0.6,1,25.6,17.2,68,0), 0).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_2, startFrame:2, endFrame:2, x:-2, y:-2, w:147, h:202});
	this.filterCacheList.push({instance: this.instance_2, startFrame:0, endFrame:0, x:-2, y:-2, w:147, h:202});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-24,184.3,245.5);


(lib.botoncanballo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("caballomp3");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_2
	this.instance = new lib.caballoborde();
	this.instance.setTransform(-6,-41,0.3743,0.3743);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Capa_1
	this.instance_1 = new lib.caballo();
	this.instance_1.setTransform(0,0,0.319,0.319);

	this.instance_2 = new lib.btncaballografico("synched",0);
	this.instance_2.setTransform(78.8,138.1,1,1,0,0,0,78.8,138.1);
	var instance_2Filter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_2.filters = [instance_2Filter_1];
	this.instance_2.cache(-2,-2,162,280);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_1).wait(2).to(new cjs.ColorFilter(0.6,0.6,0.6,1,25.6,17.2,68,0), 0).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_2, startFrame:2, endFrame:2, x:-2, y:-2, w:162, h:280});
	this.filterCacheList.push({instance: this.instance_2, startFrame:0, endFrame:0, x:-2, y:-2, w:162, h:280});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-41,196.1,348.1);


(lib.btnburro = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("burromp3");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_2
	this.instance = new lib.burroborde();
	this.instance.setTransform(-22,-28,0.3642,0.3642);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Capa_1
	this.instance_1 = new lib.burro();
	this.instance_1.setTransform(0,0,0.3197,0.3197);

	this.instance_2 = new lib.btnburrograficp("synched",0);
	this.instance_2.setTransform(52.4,115.9,1,1,0,0,0,52.4,115.9);
	var instance_2Filter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_2.filters = [instance_2Filter_1];
	this.instance_2.cache(-2,-2,109,236);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_1).wait(2).to(new cjs.ColorFilter(0.6,0.6,0.6,1,25.6,17.2,68,0), 0).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_2, startFrame:2, endFrame:2, x:-2, y:-2, w:109, h:236});
	this.filterCacheList.push({instance: this.instance_2, startFrame:0, endFrame:0, x:-2, y:-2, w:109, h:236});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-28,142.8,287.4);


(lib.btnatras_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.btnatras();
	this.instance.setTransform(0,0,0.1887,0.1887);

	this.instance_1 = new lib.btnatrasgrafico("synched",0);
	this.instance_1.setTransform(39.8,42.2,1,1,0,0,0,39.8,42.2);
	var instance_1Filter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_1];
	this.instance_1.cache(-2,-2,84,89);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.1887,scaleY:0.1887,x:0,y:0}}]}).to({state:[{t:this.instance,p:{scaleX:0.2297,scaleY:0.2297,x:-9,y:-9}}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_1).wait(2).to(new cjs.ColorFilter(0.6,0.6,0.6,1,25.6,17.2,68,0), 0).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_1, startFrame:2, endFrame:2, x:-2, y:-2, w:84, h:89});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-9,96.9,102.9);


(lib.cpEscenario2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var sonido = new createjs.Sound.play("audiomp3", {loop: -1});
		
		sonido.volume = 0.5;
		
		function detenerSonido (){
			sonido.stop();
		}
		
		function iniciarSonido (){
			sonido.play();
		}
		
		this.btnstop.addEventListener("click", detenerSonido);
		this.btnplay.addEventListener("click", iniciarSonido);
		
		this.btnmas.addEventListener("click", function(){
			if (sonido.volume < 1){
				sonido.volume += 0.1;
			}
		});
		
		this.btnmenos.addEventListener ("click", function(){
			if (sonido.volume > 0){
				sonido.volume -= 0.1;
			}
		});
		
		this.btnatras.on("click",irA1.bind(this));
		
		function irA1(e){
		this.parent.cambiarEscenario (new lib.cpEscenario1());	
			}
		
		this.btnatras.addEventListener("click", detenerSonido);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// titulo
	this.instance = new lib.titulo2();
	this.instance.setTransform(273,-25,0.1345,0.1345);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Capa_2
	this.instance_1 = new lib.pngwingcom2();
	this.instance_1.setTransform(-100,270,1,0.9908,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// btnatras
	this.btnatras = new lib.btnatras_1();
	this.btnatras.name = "btnatras";
	this.btnatras.setTransform(795.8,562.2,1,1,0,0,0,39.8,42.2);
	new cjs.ButtonHelper(this.btnatras, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnatras).wait(1));
	this.btnatras.addEventListener("tick", AdobeAn.handleFilterCache);

	// btnes
	this.btnmenos = new lib.btnmenos();
	this.btnmenos.name = "btnmenos";
	this.btnmenos.setTransform(66.05,369.3,1,1,0,0,0,32.9,41.9);
	new cjs.ButtonHelper(this.btnmenos, 0, 1, 2);

	this.btnmas = new lib.btnmas();
	this.btnmas.name = "btnmas";
	this.btnmas.setTransform(65.65,437.95,1,1,0,0,0,32.5,41.5);
	new cjs.ButtonHelper(this.btnmas, 0, 1, 2);

	this.btnstop = new lib.btnstop();
	this.btnstop.name = "btnstop";
	this.btnstop.setTransform(68.1,504,1,1,0,0,0,30.1,31.9);
	new cjs.ButtonHelper(this.btnstop, 0, 1, 2);

	this.btnplay = new lib.btnplay();
	this.btnplay.name = "btnplay";
	this.btnplay.setTransform(69.1,572.4,1,1,0,0,0,31.1,32.4);
	new cjs.ButtonHelper(this.btnplay, 0, 1, 2);

	this.btncaballo = new lib.botoncanballo();
	this.btncaballo.name = "btncaballo";
	this.btncaballo.setTransform(474.8,229.1,1,1,0,0,0,78.8,138.1);
	new cjs.ButtonHelper(this.btncaballo, 0, 1, 2);

	this.instance_2 = new lib.gallinaextra();
	this.instance_2.setTransform(347,307,0.3429,0.3429);

	this.btnburro = new lib.btnburro();
	this.btnburro.name = "btnburro";
	this.btnburro.setTransform(349.4,231.9,1,1,0,0,0,52.4,115.9);
	new cjs.ButtonHelper(this.btnburro, 0, 1, 2);

	this.btngallina = new lib.btngallina();
	this.btngallina.name = "btngallina";
	this.btngallina.setTransform(306.2,549.7,1,1,0,0,0,58.2,82.7);
	new cjs.ButtonHelper(this.btngallina, 0, 1, 2);

	this.btncerdo = new lib.btncerdo();
	this.btncerdo.name = "btncerdo";
	this.btncerdo.setTransform(235.6,475.7,1,1,0,0,0,71.6,98.7);
	new cjs.ButtonHelper(this.btncerdo, 0, 1, 2);

	this.instance_3 = new lib.btnoveja();
	this.instance_3.setTransform(448.7,475.5,1,1,0,0,0,78.7,104.5);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2);

	this.btnvaca = new lib.btnvaca();
	this.btnvaca.name = "btnvaca";
	this.btnvaca.setTransform(578.3,486.1,1,1,0,0,0,176.3,168.1);
	new cjs.ButtonHelper(this.btnvaca, 0, 1, 2);

	this.instance_4 = new lib.fotoFondo();
	this.instance_4.setTransform(-82,0,0.3158,0.3158);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.btnvaca},{t:this.instance_3},{t:this.btncerdo},{t:this.btngallina},{t:this.btnburro},{t:this.instance_2},{t:this.btncaballo},{t:this.btnplay},{t:this.btnstop},{t:this.btnmas},{t:this.btnmenos}]}).wait(1));
	this.btnmenos.addEventListener("tick", AdobeAn.handleFilterCache);
	this.btnmas.addEventListener("tick", AdobeAn.handleFilterCache);
	this.btnstop.addEventListener("tick", AdobeAn.handleFilterCache);
	this.btnplay.addEventListener("tick", AdobeAn.handleFilterCache);
	this.btncaballo.addEventListener("tick", AdobeAn.handleFilterCache);
	this.btnburro.addEventListener("tick", AdobeAn.handleFilterCache);
	this.btngallina.addEventListener("tick", AdobeAn.handleFilterCache);
	this.btncerdo.addEventListener("tick", AdobeAn.handleFilterCache);
	this.instance_3.addEventListener("tick", AdobeAn.handleFilterCache);
	this.btnvaca.addEventListener("tick", AdobeAn.handleFilterCache);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("EhK/AyAMAAAhj/MCV/AAAMAAABj/g");
	this.shape.setTransform(479,320.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cpEscenario2, new cjs.Rectangle(-100,-930,1188.9,1584.1), null);


(lib.cpEscenario1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.btnSiguiente1.on("click",irA2.bind(this));
		
		function irA2(e){
		this.parent.cambiarEscenario (new lib.cpEscenario2());	
			}
		
		var sonido = new createjs.Sound.play("audiomp3", {loop: -1});
		
		sonido.volume = 0.5;
		
		function detenerSonido (){
			sonido.stop();
		}
		
		function iniciarSonido (){
			sonido.play();
		}
		
		this.btnstop.addEventListener("click", detenerSonido);
		this.btnplay.addEventListener("click", iniciarSonido);
		
		this.btnmas.addEventListener("click", function(){
			if (sonido.volume < 1){
				sonido.volume += 0.1;
			}
		});
		
		this.btnmenos.addEventListener ("click", function(){
			if (sonido.volume > 0){
				sonido.volume -= 0.1;
			}
		});
		
		this.btnSiguiente1.addEventListener("click", detenerSonido);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btnmenos
	this.btnmenos = new lib.btnmenos();
	this.btnmenos.name = "btnmenos";
	this.btnmenos.setTransform(281.9,577.9,1,1,0,0,0,32.9,41.9);
	new cjs.ButtonHelper(this.btnmenos, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnmenos).wait(1));
	this.btnmenos.addEventListener("tick", AdobeAn.handleFilterCache);

	// btnmas
	this.btnmas = new lib.btnmas();
	this.btnmas.name = "btnmas";
	this.btnmas.setTransform(210.5,577.5,1,1,0,0,0,32.5,41.5);
	new cjs.ButtonHelper(this.btnmas, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnmas).wait(1));
	this.btnmas.addEventListener("tick", AdobeAn.handleFilterCache);

	// btnstop
	this.btnstop = new lib.btnstop();
	this.btnstop.name = "btnstop";
	this.btnstop.setTransform(143.1,572.9,1,1,0,0,0,30.1,31.9);
	new cjs.ButtonHelper(this.btnstop, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnstop).wait(1));
	this.btnstop.addEventListener("tick", AdobeAn.handleFilterCache);

	// btnplay
	this.btnplay = new lib.btnplay();
	this.btnplay.name = "btnplay";
	this.btnplay.setTransform(69.1,572.4,1,1,0,0,0,31.1,32.4);
	new cjs.ButtonHelper(this.btnplay, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnplay).wait(1));
	this.btnplay.addEventListener("tick", AdobeAn.handleFilterCache);

	// Siguiente
	this.btnSiguiente1 = new lib.btnSiguiente1();
	this.btnSiguiente1.name = "btnSiguiente1";
	this.btnSiguiente1.setTransform(821.8,591.6);
	new cjs.ButtonHelper(this.btnSiguiente1, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnSiguiente1).wait(1));
	this.btnSiguiente1.addEventListener("tick", AdobeAn.handleFilterCache);

	// Titulo
	this.instance = new lib.titulogranja_1();
	this.instance.setTransform(471.2,137.2,1,1,0,0,0,215.2,215.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fondo
	this.instance_1 = new lib.pngwingcom2();
	this.instance_1.setTransform(-245,505,1,1.1967,-90);

	this.instance_2 = new lib.Menufondo();
	this.instance_2.setTransform(-213,-38,0.8944,0.8944);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("EhK/AyAMAAAhj/MCV/AAAMAAABj/g");
	this.shape.setTransform(479,320.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cpEscenario1, new cjs.Rectangle(-245,-695,1436.3,1572.9), null);


// stage content:
(lib.Sonidosdegranja = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var escenario = new lib.cpEscenario1();
		this.addChild(escenario);
		
		this.cambiarEscenario = function (nuevoEscenario){
			this.addChild(nuevoEscenario);
			this.removeChild(escenario);
			escenario=nuevoEscenario;
			
			}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);
// library properties:
lib.properties = {
	id: '4FFC2E210D1C92499F631AD529AB9D68',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/fotoFondo.png", id:"fotoFondo"},
		{src:"images/titulo2.png", id:"titulo2"},
		{src:"images/Sonidosdegranja_atlas_1.png", id:"Sonidosdegranja_atlas_1"},
		{src:"images/Sonidosdegranja_atlas_2.png", id:"Sonidosdegranja_atlas_2"},
		{src:"images/Sonidosdegranja_atlas_3.png", id:"Sonidosdegranja_atlas_3"},
		{src:"images/Sonidosdegranja_atlas_4.png", id:"Sonidosdegranja_atlas_4"},
		{src:"images/Sonidosdegranja_atlas_5.png", id:"Sonidosdegranja_atlas_5"},
		{src:"sounds/audiomp3.mp3", id:"audiomp3"},
		{src:"sounds/burromp3.mp3", id:"burromp3"},
		{src:"sounds/caballomp3.mp3", id:"caballomp3"},
		{src:"sounds/cerdomp3.mp3", id:"cerdomp3"},
		{src:"sounds/ovejamp3.mp3", id:"ovejamp3"},
		{src:"sounds/pollomp3.mp3", id:"pollomp3"},
		{src:"sounds/vacamp3.mp3", id:"vacamp3"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4FFC2E210D1C92499F631AD529AB9D68'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
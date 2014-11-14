// Creates canvas 320 ¡Á 200 at 10, 50
var paper = Raphael(10, 50, 800, 200);
var rect = paper.rect(0, 0, 800, 200);
rect.attr("fill", "#333");
rect.attr("stroke", "#333");

// Creates circle at x = 50, y = 40, with radius 10
var circle = paper.circle(10, 100, 10);
// Sets the fill attribute of the circle to red (#f00)
circle.attr("fill", "#f00");

// Sets the stroke attribute of the circle to white
circle.attr("stroke", "#fff");

var circle2 = paper.circle(700, 100, 40);
circle2.attr("fill", "#fff");
circle2.attr("stroke", "#fff");

//var testpath = paper.path('M100 100L190 190');
//var _transformedPath = Raphael.transformPath('M100 100L190 190', 'T400,0');
//testpath.animate({path: _transformedPath}, 1000);

var line = paper.path(["M", 20, 100, "L", 700, 100 ]);
line.attr("opacity", 0);

circle.data("mypath", line);
paper.customAttributes.progress = function (v) {
	if(this.g != null){
		var gg = this.g;
		setTimeout(function(){
			gg.remove();
		},100);
	} 
	this.g = this.glow({color: "#FFF"});
    var path = this.data("mypath");
    if (!path) {
        return {
            cx: 10
        };
    }    
    var len = path.getTotalLength();
    var point = path.getPointAtLength(v * len);
    return {
        cx: point.x
    };
};
circle.attr("progress", 0);
circle.animate({progress: 1}, 5000, function(){this.g.remove();this.remove();circle2.attr("fill", "#f00");});
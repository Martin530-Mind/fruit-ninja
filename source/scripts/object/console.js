var layer = require( "../layer" );

var x = 16, y = 0;
var texts = [];

exports.set = function(){
	
};

exports.clear = function(){
    for(var i = 0, l = texts.length; i < l; i ++)
    	texts[i].remove();
    texts.length = y = 0;
};

exports.log = function(text){
	y += 20;
    texts.push( layer.createText( "default", text, x, y ) );//push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
};
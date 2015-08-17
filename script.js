window.onload = function(){
	createBoard();
	document.body.style.margin = "0";
};

var div = document.getElementsByTagName("div");
var cssR = "padding-bottom: 11.1%; width: 11.1%; float: left;";

function createBoard(){
	for (var i = 0; i < 99; i++) {
		var divNew = document.createElement("div");
		document.body.appendChild(divNew);
		div[i].style.cssText = cssR;
		div[i].style.backgroundColor= getRandomColor();
	}
}

function getRandomColor() {
    var hex = '0123456789ABCDEF'.split("");
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color = color + hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
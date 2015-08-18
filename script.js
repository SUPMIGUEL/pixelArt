window.onload = function(){
	createBoard();
	clicklistener();
	document.body.style.margin = "0";
};

var div = document.getElementsByTagName("div");
var cssR = "padding-bottom: 2%; width: 2%; float: left;border:1px solid black; margin: 1px;";
var list = document.getElementsByTagName("div"); 
var table = document.getElementsByTagName("td");
var colorSelected = "white";
var colors = ["#000000","#303030","#505050","#808080","#C8C8C8","#FFFFFF","#FF0000","#FFA500","#FFFF00","#0000FF","#339900","#990066","#A52A2A","#FF69B4","#00FFFF","#66FF00","#D0D0D0","#9370DB","#20B2AA","#006400","#556B2F","#191970","#FFA07A","#CD5C5C","#DC143C","#FFC0CB","#BDB76B","#4B0082","#FF00FF","#ADFF2F","#00FA9A","#4169E1"];

function createBoard(){
	for (var i = 0; i < 1040; i++) {
		var divNew = document.createElement("div");
		document.body.appendChild(divNew);
		div[i].style.cssText = cssR;
		div[i].style.backgroundColor= "white";
		if (i<colors.length) {
			div[i].style.backgroundColor=colors[i];
		}
	}
}

function clicklistener(){
	for (var i = colors.length; i < list.length; i++){
		list[i].addEventListener("click",clicked);
	}	
	for (var j = 0; j < list.length; j++){
		list[j].addEventListener("click",clickt);
	}	
}

function clicked(){
	this.style.backgroundColor = colorSelected;
}

function clickt(){
	for (var i = 0; i < colors.length; i++) {
		if (this===div[i]){
			colorSelected = colors[i];
		}
	}
}
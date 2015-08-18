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

function createBoard(){
	for (var i = 0; i < 1040; i++) {
		var divNew = document.createElement("div");
		document.body.appendChild(divNew);
		div[i].style.cssText = cssR;
		div[i].style.backgroundColor= "white";
	if (div[i]===div[0]) {div[i].style.backgroundColor= "white";}
	if (div[i]===div[1]) {div[i].style.backgroundColor = "black";}
	if (div[i]===div[2]) {div[i].style.backgroundColor = "yellow";}
	if (div[i]===div[3]) {div[i].style.backgroundColor = "red";}
	if (div[i]===div[4]) {div[i].style.backgroundColor = "blue";}
	if (div[i]===div[5]) {div[i].style.backgroundColor = "green";}
	if (div[i]===div[6]) {div[i].style.backgroundColor = "purple";}
	if (div[i]===div[7]) {div[i].style.backgroundColor = "grey";}
	if (div[i]===div[8]) {div[i].style.backgroundColor = "brown";}
	if (div[i]===div[9]) {div[i].style.backgroundColor = "orange";}
	if (div[i]===div[10]) {div[i].style.backgroundColor = "pink";}
	if (div[i]===div[11]) {div[i].style.backgroundColor = "#00FFFF";}
	if (div[i]===div[12]) {div[i].style.backgroundColor = "#66FF00";}	
	if (div[i]===div[13]) {div[i].style.backgroundColor = "#D0D0D0";}
	
	}
}

function clicklistener(){
	for (var i = 14; i < list.length; i++){
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
	if (this===div[0]) {colorSelected = "white";}
	if (this===div[1]) {colorSelected = "black";}
	if (this===div[2]) {colorSelected = "yellow";}
	if (this === div[3]) {colorSelected = "red";}
	if (this === div[4]) {colorSelected = "blue";}
	if (this === div[5]) {colorSelected = "green";}
	if (this === div[6]) {colorSelected = "purple";}
	if (this === div[7]) {colorSelected = "grey";}
	if (this === div[8]) {colorSelected = "brown";}
	if (this === div[9]) {colorSelected = "orange";}
	if (this === div[10]) {colorSelected = "pink";}
	if (this === div[11]) {colorSelected = "#00FFFF";}
	if (this === div[12]) {colorSelected = "#66FF00";}	
	if (this === div[13]) {colorSelected = "#D0D0D0";}
}

/*function getRandomColor() {
    var hex = '0123456789ABCDEF'.split("");
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color = color + hex[Math.floor(Math.random() * 16)];
    }
    return color;
}*/
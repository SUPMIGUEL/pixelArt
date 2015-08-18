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
	}
}

function clicklistener(){
	for (var i = 0; i < list.length; i++){
		list[i].addEventListener("click",clicked);
	}	
	for (var j = 0; j < table.length; j++){
		table[j].addEventListener("click",clickt);
	}	
}

function clicked(){
	this.style.backgroundColor = colorSelected;
}

function clickt(){
	if (this.innerText === "1") {
		colorSelected = "white";
	}
	if (this.innerText === "2") {
		colorSelected = "black";
	}
	if (this.innerText === "3") {
		colorSelected = "yellow";
	}
	if (this.innerText === "4") {
		colorSelected = "red";
	}
	if (this.innerText === "5") {
		colorSelected = "blue";
	}
	if (this.innerText === "6") {
		colorSelected = "green";
	}
	if (this.innerText === "7") {
		colorSelected = "purple";
	}
	if (this.innerText === "8") {
		colorSelected = "grey";
	}
	if (this.innerText === "9") {
		colorSelected = "brown";
	}
	if (this.innerText === "10") {
		colorSelected = "orange";
	}

}

/*function getRandomColor() {
    var hex = '0123456789ABCDEF'.split("");
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color = color + hex[Math.floor(Math.random() * 16)];
    }
    return color;
}*/
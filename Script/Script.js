 //				Special Keys:			  //
 //*************			 *************//
 /*-************			 ************-*\
  ** BACKSPACE, DELETE, ENTER, RETURN, ****
  ** TAB, ESCAPE, SHIFT, CONTROL, ******
  ** OPTION, ALT, UP_ARROW, **************
  ** DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW **
 \*-*************************************-*/

//For anyone reading this, having done this 
//in high school, my code was VERY unoptimized
//however, having come back to it years later,
//I have done a small amount of refactoring
//and improved on it slightly

var bites = [];

var keyMap = {};

function setup() {
	createCanvas(500, 500);
	frameRate(60);
	moveBox = new movingBox();
	bites[0] = new bite(255,0,0,"DECREASE BOX SPEED" );
	bites[1] = new bite(0,255,0,"INCREASE BOX SPEED" );
	bites[2] = new bite(0,0,255,"INCREASE BOX SIZE"  );
	bites[3] = new bite(255, 255, 0, "DECREASE BOX SIZE");
	console.log(bites);
}

function draw(){
	background(0, 0, 0);
	moveBox.visible();
	for (bite in bites) {
		bites[bite].show();
    }
}
onkeydown = onkeyup = function (e) {
	e = e || event;
	keyMap[e.key] = e.type == 'keydown';
}
function updateSpeed() {document.getElementById("speed").innerHTML = "<strong>Current Speed</strong>: " + moveBox.Speed}
function updateWidth() {document.getElementById("boxw").innerHTML = "<strong>Box Width</strong>: " + moveBox.Width;}
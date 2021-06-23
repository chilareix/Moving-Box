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

var keyMap = {};
function setup() {
	createCanvas(500, 500);
	frameRate(60);
	moveBox = new movingBox();
	bbite = new blueBite();
	rbite = new redBite();
	gbite = new greenBite();
	ybite = new yellowBite();
}

onkeydown = onkeyup = function (e) {
	e = e || event;
	keyMap[e.key] = e.type == 'keydown';
}

function draw(){
	background(0, 0, 0);
	moveBox.visible();
	rbite.visible();
	bbite.visible();
	gbite.visible();
	ybite.visible();
	rbite.whenEaten();
	bbite.whenEaten();
	gbite.whenEaten();
	ybite.whenEaten();
}

eor = function(){

}
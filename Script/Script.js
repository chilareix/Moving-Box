//TODO: make moving square

 //				Special Keys:			  //
 //*************			 *************//
 /*-************			 ************-*\
  ** BACKSPACE, DELETE, ENTER, RETURN, ****
  ** TAB, ESCAPE, SHIFT, CONTROL, ******
  ** OPTION, ALT, UP_ARROW, **************
  ** DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW **
 \*-*************************************-*/
 
function setup(){
	createCanvas(500, 500);
	frameRate(60);
	moveBox = new movingBox();
	bbite = new blueBite();
	rbite = new redBite();
	gbite = new greenBite();
	ybite = new yellowBite();
}



function draw(){
	background(0, 0, 0);
	moveBox.visible();
	moveBox.move();
	rbite.visible();
	bbite.visible();
	gbite.visible();
	ybite.visible();
	rbite.whenEaten();
	bbite.whenEaten();
	gbite.whenEaten();
	ybite.whenEaten();
}
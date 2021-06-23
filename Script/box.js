function movingBox() {
	moveAction = {
		"w": async function (obj) { //w
			obj.posY = constrain(obj.posY - obj.Speed, obj.Width/2, height - obj.Width/2);
		},
		"a": async function (obj) { //a
			obj.posX = constrain(obj.posX - obj.Speed, obj.Width/2, width - obj.Width/2);
		},
		"s": async function (obj) { //s
			obj.posY = constrain(obj.posY + obj.Speed, obj.Width/2, height - obj.Width/2);
		},
		"d": async function (obj) { //d
			obj.posX = constrain(obj.Speed + obj.posX, obj.Width/2, width - obj.Width/2);
		},
		"r": async function (obj) { //r
			obj.Width = obj.defW;
			obj.posX = obj.defX;
			obj.posY = obj.defY;
			obj.Speed = obj.defXS;
			currentX(obj.Speed);
		}
	};
	

	this.red = 255;
	this.green = 0;
	this.blue = 0;

	this.defX = width/2;
	this.defY = height/2;

	this.defW = 20;

	this.defXS = 10;
	this.defYS = 10;

	this.posX = width/2;
	this.posY = height/2;

	this.Width = 20;

	this.Speed = 10;
	
	this.visible = function () {
		this.move();
		this.rainbow();
		stroke(this.red, this.green, this.blue);
		fill(this.red, this.green, this.blue);
		rectMode(CENTER);
		rect(this.posX, this.posY, this.Width, this.Width);
	}
	
	this.Grow = function(){
		this.Width += 5;
	}
	this.move = function () {
		this.moveLeft();
		this.moveRight();
		this.moveUp();
		this.moveDown();
		this.reset();
    }
	this.moveUp = async function(){

		if (keyMap['w']) {
			moveAction['w'](this);
		}
	}
	this.moveDown = async function () {
		if (keyMap['s']) {
			moveAction['s'](this);
        }
	}
	this.moveLeft = async function () {
		if (keyMap['a']) {
			moveAction['a'](this);
        }
	}
	this.moveRight = async function () {
		if (keyMap['d']) {
			moveAction['d'](this);
        }
	}
	this.reset = async function () {
		if (keyMap['r']) {
			moveAction['r'](this);
        }
    }
	this.rainbow = function(){
		if(this.red == 255 && this.green < 255 && this.blue == 0){
			this.green++;
		}else if(this.red > 0 && this.green == 255 && this.blue == 0){
			this.red--;
		}else if(this.red == 0 && this.green == 255 && this.blue < 255){
			this.blue++;
		}else if(this.red == 0 && this.green > 0 && this.blue == 255){
			this.green--;
		}else if(this.red < 255 && this.green == 0 && this.blue == 255){
			this.red++;
		}else if(this.red == 255 && this.green == 0 && this.blue > 0){
			this.blue--;
		}
		
		
		
	}
}
function currentX(){
	document.getElementById("xspeed").innerHTML = "<strong>Current Speed</strong>: " + moveBox.Speed;
}
function currentW(){
	document.getElementById("boxw").innerHTML = "<strong>Box Width</strong>: " + moveBox.Width;
}

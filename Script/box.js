function movingBox() {
	moveAction = {
		"w": async function (obj) { //w
			obj.pos.y = constrain(obj.pos.y - obj.Speed, obj.Width/2, height - obj.Width/2);
		},
		"a": async function (obj) { //a
			obj.pos.x = constrain(obj.pos.x - obj.Speed, obj.Width/2, width - obj.Width/2);
		},
		"s": async function (obj) { //s
			obj.pos.y = constrain(obj.pos.y + obj.Speed, obj.Width/2, height - obj.Width/2);
		},
		"d": async function (obj) { //d
			obj.pos.x = constrain(obj.Speed + obj.pos.x, obj.Width/2, width - obj.Width/2);
		},
		"r": async function (obj) { //r
			obj.Width = obj.defW;
			obj.pos = obj.defPos;
			obj.Speed = obj.defSpeed;
			updateSpeed(obj.Speed);
			updateWidth(obj.Width);
		}
	};
	//color values
	this.red = 255;
	this.green = 0;
	this.blue = 0;
	//default values
	this.defPos = createVector(width / 2, height / 2);
	this.defW = 20;
	this.defSpeed = 5;
	//dynamic values
	this.pos = createVector(width / 2, height / 2);
	this.Width = 20;
	this.Speed = 5;
	
	this.visible = function () {
		this.move();
		this.rainbow();
		stroke(this.red, this.green, this.blue);
		fill(this.red, this.green, this.blue);
		rectMode(CENTER);
		rect(this.pos.x, this.pos.y, this.Width, this.Width);
	}
	this.move = function () {
		this.moveLeft();
		this.moveRight();
		this.moveUp();
		this.moveDown();
		this.reset();
		for (let i = 0; i < bites.length; i++) {
			pos = bites[i].pos;
			if (dist(this.pos.x, this.pos.y, pos.x, pos.y) < this.Width/2 + bites[i].r) bites[i].act();
        }
	}

	this.moveUp    = async function () {if (keyMap['w']) moveAction['w'](this);}
	this.moveDown  = async function () {if (keyMap['s']) moveAction['s'](this);}
	this.moveLeft  = async function () {if (keyMap['a']) moveAction['a'](this);}
	this.moveRight = async function () {if (keyMap['d']) moveAction['d'](this);}
	this.reset     = async function () {if (keyMap['r']) moveAction['r'](this);}

	this.rainbow = function(){
			  if(this.red == 255 && this.green <  255 && this.blue == 0  ){ this.green++;
		}else if(this.red >  0   && this.green == 255 && this.blue == 0  ){ this.red--;
		}else if(this.red == 0   && this.green == 255 && this.blue <  255){ this.blue++;
		}else if(this.red == 0   && this.green >  0   && this.blue == 255){ this.green--;
		}else if(this.red <  255 && this.green == 0   && this.blue == 255){ this.red++;
		}else if(this.red == 255 && this.green == 0   && this.blue >  0  ){ this.blue--;}
	}
}

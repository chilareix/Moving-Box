function movingBox(){
	//integers
	this.red = 255;
	this.green = 0;
	this.blue = 0;
	//Default
		//Pos
	this.defX = width/2;
	this.defY = height/2;
		//Size
	this.defW = 20;
	this.defH = 20;
		//Speed
	this.defXS = 10;
	this.defYS = 10;
	//Current
		//Pos
	this.posX = width/2;
	this.posY = height/2;
		//Size
	this.Width = 20;
	this.Height = 20;
		//Speed
	this.ySpeed = 10;
	this.xSpeed = 10;
	
	this.visible = function(){
		this.rainbow();
		stroke(this.red, this.green, this.blue);
		fill(this.red, this.green, this.blue);
		rectMode(CENTER);
		rect(this.posX, this.posY, this.Width, this.Height);
	}
	
	this.Grow = function(){
		this.Width += 5;
		this.Height += 5;
	}	
	this.move = function(){
		
		this.posX = constrain(this.posX, 0, width);
		this.posY = constrain(this.posY, 0, height);
		
		if(keyIsPressed){
			if(key == 'w'){
				this.posY -= this.ySpeed;
			}else if(key == 'a'){
				this.posX -= this.xSpeed;
			}else if(key == 's'){
				this.posY += this.ySpeed;
			}else if(key == 'd'){
				this.posX += this.xSpeed;
			}else if(key == 'r'){
				this.Width = this.defW;
				this.Height = this.defH;
				this.posX = this.defX;
				this.posY = this.defY;
				this.xSpeed = this.defXS;
				this.ySpeed = this.defYS;
				currentX(this.xSpeed);
			}
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
	document.getElementById("xspeed").innerHTML = "<strong>X Speed</strong>: " + moveBox.xSpeed;
}
function currentW(){
	document.getElementById("boxw").innerHTML = "<strong>Box Width</strong>: " + moveBox.Width;
}
function currentH(){
	document.getElementById("boxh").innerHTML = "<strong>Box Height</strong>: " + moveBox.Height;
}

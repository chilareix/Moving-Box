function blueBite(){
	this.posX = random(width);
	this.posY = random(height);
	this.r = 20;
	
	this.visible = function(){
		ellipseMode(CENTER);
		fill(0, 0, 255);
		ellipse(this.posX, this.posY, this.r, this.r);
	}
	this.whenEaten = function(){
		if(dist(this.posX, this.posY, moveBox.posX, moveBox.posY) < (moveBox.Width / 2 + this.r/2)){
			this.posX = random(width);
			this.posY = random(height);
			moveBox.Width += 5;
			moveBox.Height += 5;
			currentW();
			currentH();
		}
	}
}
function redBite(){
	this.posX = random(width);
	this.posY = random(height);
	this.r = 20;
	
	this.visible = function(){
		ellipseMode(CENTER);
		fill(255, 0, 0);
		ellipse(this.posX, this.posY, this.r, this.r);
	}
	this.whenEaten = function(){
		if(dist(this.posX, this.posY, moveBox.posX, moveBox.posY) < (moveBox.Width / 2 + this.r/2)){
			this.posX = random(width);
			this.posY = random(height);
			if(moveBox.xSpeed > 10){
				moveBox.xSpeed -= 5;
				moveBox.ySpeed -= 5;
				currentX();
			}
		}
	}
}

function greenBite(){
	this.posX = random(width);
	this.posY = random(height);
	this.r = 20;
	
	
	this.visible = function(){
		ellipseMode(CENTER);
		fill(0, 255, 0);
		ellipse(this.posX, this.posY, this.r, this.r);
	}
	this.whenEaten = function(){
		if(dist(this.posX, this.posY, moveBox.posX, moveBox.posY) < (moveBox.Width / 2 + this.r/2)){
			this.posX = random(width);
			this.posY = random(height);
			moveBox.xSpeed += 5;
			moveBox.ySpeed += 5;
			currentX();
		}
	}
}

function yellowBite(){
	this.posX = random(width);
	this.posY = random(height);
	this.r = 20;
	
	
	this.visible = function(){
		ellipseMode(CENTER);
		fill(255, 255, 0);
		ellipse(this.posX, this.posY, this.r, this.r);
	}
	
	this.whenEaten = function(){
		if(dist(this.posX, this.posY, moveBox.posX, moveBox.posY) < (moveBox.Width / 2 + this.r/2)){
			this.posX = random(width);
			this.posY = random(height);
			if(moveBox.Width > 10){
				moveBox.Width -= 5;
				moveBox.Height -= 5;
				currentW();
				currentH();
			}
		}
		
	}
}
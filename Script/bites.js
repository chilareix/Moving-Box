BEHAVIORS = {
	"INCREASE BOX SIZE": function () {
		moveBox.Width += 3;
		updateWidth();
	},
	"DECREASE BOX SIZE": function () {
		moveBox.Width -= 3;
		updateWidth();
	},
	"INCREASE BOX SPEED": function () {
		moveBox.Speed += 0.5;
		updateSpeed();
	},
	"DECREASE BOX SPEED": function () {
		moveBox.Speed -= 0.5;
		updateSpeed();
	},

};
class bite {
	pos;
	r;
	red;
	green;
	blue;
	behavior;
	/**
	 * @param {any} red
	 * @param {any} green
	 * @param {any} blue
	 * @param {any} behaviorAsString Options are INCREASE | DECREASE, BOX, SIZE | SPEED as a string (e.g. "DECREASE BOX SIZE" or "INCREASE BOX SIZE")
	 *Not case sensitive*
	 */
	constructor(red, green, blue, behaviorAsString) {
		this.r = 20;
		this.pos = createVector(random(width), random(height));
		this.red = red;
		this.green = green;
		this.blue = blue;
		this.behavior = behaviorAsString;
	}
	show() {
		ellipseMode(CENTER);+
		fill(this.red, this.green, this.blue);
		ellipse(this.pos.x, this.pos.y, this.r, this.r);
	}
	act() {
		if (this.behavior.toUpperCase() in BEHAVIORS) {
			BEHAVIORS[this.behavior.toUpperCase()]();
		} else {
			console.log("BEHAVIOR DOES NOT EXIST");
		}
		this.pos = createVector(random(width), random(height));
    }
}


var mycolorList = [
    "#e8d300",
    "#ee7654",
    "#eb5d3e",
    "#42a6ac",
    "#a43e90",
    "#add8d5",
];

var balls=[];

function setup() {
	
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
	
	//la dimensione dell'ellisse varia in proporzione alla dimensione dello schermo.
	var c = 0;
	if (height>width){
		c=width;
	} else {
		c=height;
	}
	var d=c/8;
	
	var newBall = new Ball(d);
	balls.push(newBall);
}

function draw() {
	background("#e8d300");
	
	var ball=balls[0];

	ball.move(rotationX,rotationY);
	ball.display();
	
}

function Ball(diameter){
	
	this.radius = diameter/2;

	this.x = width/2;
	this.y = height/2;
	
	this.display = function() {
		noStroke();
		fill("#ee7654");
		ellipse(this.x, this.y, this.radius*2);
		
	}
	
	this.move = function(incrementY,incrementX) {
		
		this.incrementX = incrementX;
		this.incrementY = incrementY;
		
		if (this.x < width - this.radius && this.x > this.radius) {
			if (this.x  > width - this.radius - this.incrementX){
				this.x = width - this.radius;
			}
			else if (this.x< this.radius - this.incrementX ){
				this.x = this.radius;
			}
			else {
				this.x += this.incrementX;				
			}
		}
		else if (this.x >= width - this.radius && this.incrementX < 0) {
			this.x += this.incrementX;
		}
		else if (this.x <= this.radius && this.incrementX > 0) {
			this.x += this.incrementX;
		}

		if (this.y < height - this.radius && this.y > this.radius) {
			if (this.y  > height - this.radius - this.incrementY){
				this.y = height - this.radius;
			}
			else if (this.y< this.radius - this.incrementY ){
				this.y = this.radius;
			}
			else {
				this.y += this.incrementY;				
			}
		}
		else if (this.y >= height - this.radius && this.incrementY < 0) {
			this.y += this.incrementY;
		}
		else if (this.y <= this.radius && this.incrementY > 0) {
			this.y += this.incrementY;
		}
		
	}
}


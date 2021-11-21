class paper {
    constructor(x,y,radiusX) {
        var options = {
           'density':1.2,
           'friction': 0,
           'restitution':0.3, 
            isStatic: false
        }
        this.radiusX = radiusX
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x, this.y, (this.radiusX-20)/2, options)
        this.image = loadImage("paper.png");
        World.add(world, this.body);
      }
  display() {
     var pos = this.body.position;
     var angle = this.body.angle;
     push();
     translate(pos.x, pos.y);
		rectMode(CENTER)
		strokeWeight(4);
		fill(255,0,255)
		imageMode(CENTER);
		image(this.image, 0,0,this.radiusX, this.radiusX)
		//ellipse(0,0,this.radiusX, this.radiusX);
     pop();
  }
}
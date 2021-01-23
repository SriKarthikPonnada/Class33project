class Plinko{
    constructor(x,y) {
      var options = {
          isStatic:true
      }
      this.x = x;
      this.y = y;
      this.body = Bodies.circle(this.x, this.y, 10, options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      stroke("black");
      strokeWeight(1.5)
      fill(5, 211, 252);
      ellipseMode(CENTER);
	    ellipse(0, 0, 20, 20)
      pop();
    }
}
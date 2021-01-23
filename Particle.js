class Particle{
    constructor(x,y) {
      var options = {
          'restitution':0.5,
          isStatic:false
      }
      this.x = x;
      this.y = y;
      this.body = Bodies.circle(this.x, this.y, 10, options);
      this.color = color(random(0, 255), random(0, 255), random(0, 255))
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle
      push();
      translate(pos.x,pos.y);
      rotate(angle)
      noStroke();
      fill(this.color);
      ellipseMode(CENTER);
      ellipse(0, 0, 22, 22)
      pop();
    }
}
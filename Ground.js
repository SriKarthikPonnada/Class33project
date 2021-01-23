class Ground{
  constructor(x,y,width,height) {
    var options = {
        isStatic: true
    }
    this.groundObject = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image= loadImage("wood2.png")
    
    World.add(world,this.groundObject);
  }
  display(){
    var pos =this.groundObject.position;
    translate(pos.x, pos.y)
    fill("brown")
    imageMode(CENTER);
    image(this.image,0, 0, this.width, this.height);
  }
}

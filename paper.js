class Paper {
  constructor(x,y,radius) {
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,radius,options);
    this.radius = radius;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    ellipseMode(RADIUS);
    
    push();

    fill("white");
    ellipse(pos.x, pos.y, this.radius,this.radius);
    pop();
  }
};
//creating a paper class
class Paper {
  constructor(x, y,radius) {
    var options= {
       'restitution':0.3,
       'friction':0.5,
       'density':1.3
      }

    this.body = Bodies.circle(x, y,radius,options);
    this.radius = radius;
    
    //adding this.body to the world
    World.add(world, this.body);

  }
  display(){

    //creating a pos variable to represent this.body.position
    var pos = this.body.position;

    //setting ellipse mode
    ellipseMode(RADIUS);

    //giving color
    fill("green");

    //creating a ellipse 
    ellipse(pos.x, pos.y,this.radius);
  }
  };
   
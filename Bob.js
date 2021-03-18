class Bob{
    constructor(x,y,radius){
var options={
    isStatic:false,
    'restitution':1.3,
    'friction':0.1,
    'density':0.8
}
this.body=Matter.Bodies.circle(x,y,radius,options);
this.x=x;
this.y=y;
this.radius=radius;
World.add(world,this.body);
    }

display(){
var pos=this.body.position;
push();
translate(pos.x,pos.y);
ellipseMode(RADIUS);
strokeWeight(1);
stroke("white");
fill("silver");
ellipse(0,0,this.radius);
pop();

  }
}
class Umbrella {
    constructor(x,y,r){
       var options = {
            isStatic : true,
            friction : 0.01
        }
    
        this.body = Bodies.circle(x,y,r,options)
        World.add(world, this.body);
    }

    display(){
        ellipseMode(CENTER);
        fill("grey");
        ellipse(this.body.position.x,this.body.position.y,100);
    }

}
class Drops {
    constructor(x, y, r){
        var options = {
            isStatic : false,
            restitution : 0.1,
            friction : 0.01,
        }
        
        this.thing = Bodies.circle(x,y,5,options);
        World.add(world, this.thing);
    }

    UpdateY(){

        if (this.thing.position.y > height){
            Matter.Body.setPosition(this.thing, {x : random(0,400), y : random(0,500)} )
        }

    }

    display(){
        ellipseMode(CENTER);
        fill("blue");
        ellipse(this.thing.position.x,this.thing.position.y,5);

    }
}
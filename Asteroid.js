class Asteroid{
    constructor(x,y,width,height,asteroidPosition){
        this.speed=0.1;
        this.body=Bodies.rectangle(x,y,width,height)
        this.width = width
        this.height=height

        this.asteroidPosition=asteroidPos;
        this.isBroken=false;
        
        World.add(world,this.body)
    }
    display(){
        var angle=this.body.angle
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        pop();
    }


}
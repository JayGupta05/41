class Drop{
    constructor(x,y){
        var option = {
            friction : 0.1
        }
        this.body = Bodies.circle(x,y,10,options);
        World.add(world,this.body);
    }

    display(){
        ellipse(x,y,10,10);
    }
    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body,{x : random(0,400),y : random(0,10)})
        }
    }
}
class Umbrella{
    constructor(x,y){
        this.body = Bodies.circle(x,y,20,20);
        World.add(world,this.body);
    }
    display(){
        image(boyUmbImg,x,y,20,20);
    }
}
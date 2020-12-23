class Pig{

    constructor(x,y){

var options = {
    isStatic:true
}
this.pig=Bodies.rectangle(x,y,40,40,options);
this.width=40;
this.height=40;
World.add(world,this.pig)

    }

    display(){
        var pos = this.pig.position
        rectMode(CENTER);
        fill(0,200,0);
        rect(pos.x,pos.y,this.width,this.height)
    }



}
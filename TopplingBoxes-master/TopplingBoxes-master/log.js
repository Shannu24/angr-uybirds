class Log{

    constructor(x,y,height,angle){
        var options={
            isStatic:true

        }
    this.log=Bodies.rectangle(x,y,20,height,options)   
    this.width=20;
    this.height=height;
    Matter.Body.setAngle(this.log,angle);
    World.add(world,this.log);
    
    }
        display(){
            var pos=this.log.position
            var angle = this.body.angle;
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            rect(0,0,this.width,this.height);
            pop();
        }

    }


















class  LauncherObj {
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.launcher = Constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.launcher);
    }

    fly(){
        this.launcher.bodyA=null;
    }

 
    display() {
        if(this.launcher.bodyA){
        strokeWeight(3);
        line(this.launcher.bodyA.position.x,this.launcher.bodyA.position.y,this.pointB.x,this.pointB.y) 
        }
    }

}
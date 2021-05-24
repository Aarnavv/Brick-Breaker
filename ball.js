class Ball {
    constructor() {
        var options = {
            mass: 1,
            gravity: 0, 
            // friction: 0,
            // linearDamping: 0,
            // linearVelocity: 2
        }
        this.body = Bodies.circle(400, 550, 20, options);
        this.radius = 20;
        // this.image = loadImage("images/ball.png");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        // push()
        // clear()
        Matter.Body.setVelocity(this.body, {x:5, y:5})
        // translate(pos.x, pos.y);
        imageMode(CENTER);
        // pop()
        // image(this.image, pos.x, pos.y, 40, 40);
        
        ellipseMode(CENTER)
        // fill("YELLOW")
        ellipse(pos.x, pos.y, 20, 20)
    }
}
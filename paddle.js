class Paddle{
    constructor(){
        var options={
            isStatic: true,
            inertia: Infinity,
        }
        this.paddle = Bodies.rectangle(400, 600, 200, 50, options);
        this.image = loadImage("images/paddle.png")
        World.add(world, this.paddle);
    }
    display(){
        var pos = this.paddle.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 200, 50);       
        this.paddle.position.x = mouseX;
        this.paddle.position.y = 600;
    }

    // move(){
    //     if(this.paddle.position.x >= 5 && this.paddle.position.x <= 1350){
    //         if(keyCode == RIGHT_ARROW){
    //             // clear();
    //             this.paddle.position.x += 5;
    //         }
    //         if(keyCode == LEFT_ARROW){
    //             // clear();
    //             this.paddle.position.x -= 5;
    //         }
    //     }
    //     else if(this.paddle.position.x < 5){
    //         this.paddle.position.x = 10
    //     }
    //     else if(this.paddle.position.x > 1350){
    //         this.paddle.position.x = 1300
    //     }
    // }
    
}
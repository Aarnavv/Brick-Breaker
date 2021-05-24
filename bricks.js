class Bricks{
    constructor(x, y){
        var options={
            isStatic: true,
        }
        this.brick = Bodies.rectangle(x, y, 60, 20, options);

        this.image1 = loadImage("images/blue.jpeg")
        this.image2 = loadImage("images/green.jpeg")
        this.image3 = loadImage("images/orange.jpeg")
        this.image4 = loadImage("images/red.jpeg")
        this.image5 = loadImage("images/yellow.jpeg")

        this.imgs = [this.image1, this.image2, this.image3, this.image4, this.image5]

        this.imageToUse = random(this.imgs);

        World.add(world, this.brick);
    }
    display(){
        var pos = this.brick.position;
        imageMode(CENTER);
        image(this.imageToUse, pos.x, pos.y, 60, 20);
        stroke("black")
        strokeWeight(30);
    }
}
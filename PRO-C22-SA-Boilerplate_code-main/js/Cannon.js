class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
  this.canhao=loadImage("./assets/canon.png");
  this.canhao1=loadImage("./assets/cannonBase.png");
  }
  display(){
  push ();
    imageMode(CENTER);
   image(this.canhao,this.x,this.y,this.width,this.height);
   pop ();
image(this.canhao1,70,20,200,200);
noFill();
  }
  
}

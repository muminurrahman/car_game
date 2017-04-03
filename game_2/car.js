
function car(x,y){
  this.x = x;//play x and y
  this.y = y;
  this.angle = 0;

  this.create = function(d) {
    var backRightSkid = {
      x:0-d/2,
      y:0+d/2
    }
    var backLeftSkid = {
      x:0-d/2,
      y:0-d/2
    }
    fill(col,0,0);//colour picker changer
    push();
    if(breaking){
      backRightSkid.x -= 20
      backLeftSkid.x -= 20
      line(backRightSkid.x,backRightSkid.y,0-d/2,0+d/2)
    }
    translate(this.x, this.y)
    rotate(this.angle)
    rectMode(CENTER)
    // //wheels
    fill(0)
    rect(0-d/2,0+d/2,d/5,d/10)//back right

    rect(backRightSkid.x,backRightSkid.y,d/5,d/10)//back right skid

    rect(0+d/2,0+d/2,d/5,d/10)//front right
    rect(0-d/2,0-d/2-1,d/5,d/10)//back left

    rect(backLeftSkid.x,backLeftSkid.y,d/5,d/10)//back left skid
    rect(0+d/2,0-d/2-1,d/5,d/10)//front left

    noStroke()
    fill(255)
    rect(0,0,d*1.6,d)
    ellipse(-d/2-7,0,10,d)
    triangle(d/2+7,0,25,8,d/2+7,12.5)
    triangle(d/2+7,0,25,-8,d/2+7,-12.5)
    triangle(d/2+7,0,25,8,25,-8)
    //ellipse(d/2+7,0,10,d)


    stroke('rgba(0,0,0,0.25)')
    noFill()
    rect(-2.5,-0.5,d*0.5,d-10)//roof
    fill(0)
    rect(-13,-0.5,d*0.3,d-10)//engine
    noStroke()
    fill(0)
    ellipse(-16,0,d*0.3,d-11)
    fill(200,0,0)
    rect(-14,0,d*0.42,2.5)//engine
    fill(0)
    rect(6.5,-0.5,d*0.2,d-16)//window
    triangle(4,4,4,8,9.3,4)
    triangle(4,-3.5,4,-7.5,9.3,-4)



    if(flash){
        noStroke()
        fill(255)
        ellipse(20,10,3,3)
        ellipse(20,-10,3,3)
        fill('rgba(100%,100%,100%,0.7)')
        triangle(20,10,80,30,80,-20)
        triangle(20,-10,80,10,80,-30)
        ////////
        fill('rgba(100%,0%,0%,0.7)')
        ellipse(-20,10,3,3)
        ellipse(-20,-10,3,3)
        fill('rgba(100%,0%,0%,0.7)')
        triangle(-20,-10,-60,-30,-60,10)
        triangle(-20,10,-60,-20,-60,30)
    }

    if(leftFlash && counter == 0){
        counter ++
        fill(255,255,0)
        ellipse(20,10,5,5)
    }

    pop();
  }
  this.touchingColour = function(col, _x,_y){
    var c = get(_x,_y)
    if(c[1] == col){
      console.log('touchingColour!')
      return true
    }
  }
  this.collision = function(posX,posY,posWidth){
    var dis = dist(this.x,this.y,posX,posY)
    if(dis < posWidth){
      return true
    }else{
      return false
    }
  }
  this.edges = function(){
      if(this.x > width){
          this.x = 0;
      }
      if(this.x < 0){
          this.x = width;
      }
      if(this.y < 0 ){
          this.y = height;
      }
      if(this.y > height){
          this.y = 0;
      }
  }
  // this.attractionPoint = function(magnitude, pointX, pointY) {
  //   this.angle = atan2(pointY-this.y, pointX-this.x);
  //   this.x += cos(this.angle) * magnitude;
  //   this.y += sin(this.angle) * magnitude;
  //   d = dist(this.x,this.y,mouseX,mouseY)
  // }
  this.btn = function(mag){
      if(keyIsDown(RIGHT_ARROW)){
          this.angle += 0.05
      }
      if(keyIsDown(LEFT_ARROW)){
          this.angle -= 0.05
      }
      if(keyCode === 65){
          leftFlash = !leftFlash
      }
      this.x += cos(this.angle) * mag;
      this.y += sin(this.angle) * mag;
  }
}

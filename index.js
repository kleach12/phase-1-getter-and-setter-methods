class Circle{
  //#diameter;
  //#circumfrence;
  //#area;
    
  constructor(radius){
    this.radius = radius;
  }

  get diameter(){
    return this.radius * 2
  }

  get circumference(){
    return this.diameter * Math.PI;
  }

  get area(){
    return (this.radius * this.radius) * Math.PI;
  }

 set diameter(diameter) {
    return this.radius  = diameter / 2
  }

  set circumference(circumference){
    return this.radius  = (circumference/ Math.PI)/2;
  }

  set area(area){
    return this.radius = Math.sqrt(area/ Math.PI);
  }
}
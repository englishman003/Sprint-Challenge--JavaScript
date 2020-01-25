// 1. Copy and paste your prototype in here and refactor into class syntax.

class cuboidMaker {
    constructor(length, width, height){
        this.Length = length;
        this.Width = width;
        this.Height = height;
    }
    volume(){
        return (this.Length * this.Width) * this.Height;
    }
    surfaceArea(){
        return 2 *((this.Length * this.Width) + (this.Length * this.Height) + (this.Width * this.Height));
    }
}
// function CuboidMaker(length, width, height){
//     this.Length = length;
//     this.Width = width;
//     this.Height = height;
//   }

//   CuboidMaker.prototype.volume = function(){
//     return (this.Length * this.Width) * this.Height;
//   }

//   CuboidMaker.prototype.surfaceArea = function(){
//     return 2 * ((this.Length * this.Width) + (this.Length * this.Height) + (this.Width * this.Height));
//   }

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class cubeMaker extends cuboidMaker{
    constructor(length, width, height){
        super(length, width, height);
    }
    volume(){
        return (this.Length * this.Width) * this.Height;
    }
    surfaceArea(){
        return 6 * (this.Length * this.Width);
    }
}
const cube = new cubeMaker(4, 5, 5);
console.log(cube.volume());
console.log(cube.surfaceArea());
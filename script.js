//defining the car function and parameters
function Car (make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

// defining the getDescription method for the Car prototype
Car.prototype.getDescription = function() {
    return "This car is a " + `${this.year}` + ' ' + `${this.make}` + ' ' + `${this.model}` + " "
}

// defining the ElectricCar subclass
class ElectricCar extends Car {
    constructor(make,model,year, range) {
        super(make, model, year, range);
        this.range = range;
    }
    
    getDescription() {
        return super.getDescription() +  "It can travel to up to " + `${this.range}` + " miles on a single charge. "
    }
}
//Create an instance of ElectricCar with the make "Tesla", model "Model S", year 2019, and range 300, and call the getDescription method on the instance
const myElectricCar = new ElectricCar("Tesla", "Model S", 2019, 300);
console.log(myElectricCar.getDescription());

const myCar = new Car('Toyota', '4Runner', 2024);
console.log(myCar.getDescription());
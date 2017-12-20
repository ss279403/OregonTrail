(function () {
    /*
    * Interfaces
    */
    /*
    * Classes
    */
    //The traveler class that implements the ITraveler interface
    //This is currently in violation of its contract with the interface. 
    //Create the code required to satisfy the contract with the interface
    var Traveler = /** @class */ (function () {
        function Traveler(food, name, isHealthy) {
            this.food = food;
            this.name = name;
            this.isHealthy = isHealthy;
        }
        //when implemented, There should be 50% chance to increase the traveler's food by 100.
        //return the travelers new food value
        Traveler.prototype.hunt = function () {
            if (Math.random() >= .5) {
                this.food = this.food + 100;
                return this.food;
            }
            else {
                return this.food;
            }
        };
        //when implemented, we should check to see if the traveler has a food supply of 20
        //If they do then we should consume 20 of the available food supply
        //If they don't have 20 food then we should change isHealthy to false
        //return the travelers health after attempting to eat
        Traveler.prototype.eat = function () {
            if (this.food >= 20) {
                this.food = this.food - 20;
            }
            else {
                this.isHealthy = false;
            }
            return this.isHealthy;
        };
        return Traveler;
    }());
    //The wagon class that implements the IWagon interface
    //This is currently in violation of its contract with the interface.
    //Create the code required to satisfy the contract with the interface 
    var Wagon = /** @class */ (function () {
        function Wagon(capacity, passengerArray) {
            this.capacity = capacity;
            this.passengerArray = passengerArray;
        }
        //when implemented, we should add the traveler to the wagon if the capacity permits
        //this function should return the string "added" on success and "sorry" on failure
        Wagon.prototype.addPassenger = function (traveler) {
            if (this.passengerArray.length < this.capacity) {
                this.passengerArray.push(traveler);
                return "added";
            }
            else {
                return "sorry";
            }
        };
        //this should return true if there is at least one unhealthy person in the wagon
        //if everyone is healthy false should be returned
        Wagon.prototype.isQuarantined = function () {
            for (var i = 0; i < this.passengerArray.length; i += 1) {
                if (this.passengerArray[i].isHealthy === false) {
                    return true;
                }
                else {
                    return false;
                }
            }
        };
        //Return the total amount of food among all passengers of the wagon.
        Wagon.prototype.getFood = function () {
            var meals = 0;
            for (var i = 0; i < this.passengerArray.length; i += 1) {
                meals = meals + this.passengerArray[i].food;
            }
            return meals;
        };
        return Wagon;
    }());
    //Create 5 healthy travelers object with a random amount of food between 0 and 100 (inclusive)
    var passengerOne = new Traveler(Math.floor(Math.random() * 100), "Mark", true);
    var passengerTwo = new Traveler(Math.floor(Math.random() * 100), "Craig", true);
    var passengerThree = new Traveler(Math.floor(Math.random() * 100), "Larry", true);
    var passengerFour = new Traveler(Math.floor(Math.random() * 100), "John", true);
    var passengerFive = new Traveler(Math.floor(Math.random() * 100), "Brad", true);
    console.log(passengerOne.name + ", " + passengerTwo.name + ", " + passengerThree.name + ", " + passengerFour.name + ", and " + passengerFive.name + " are looking for a wagon to go West.");
    console.log(' ');
    console.log(passengerOne.name + " has " + passengerOne.food + " meals. Is he healthy? " + passengerOne.isHealthy);
    console.log(passengerTwo.name + " has " + passengerTwo.food + " meals. Is he healthy? " + passengerTwo.isHealthy);
    console.log(passengerThree.name + " has " + passengerThree.food + " meals. Is he healthy? " + passengerThree.isHealthy);
    console.log(passengerFour.name + " has " + passengerFour.food + " meals. Is he healthy? " + passengerFour.isHealthy);
    console.log(passengerFive.name + " has " + passengerFive.food + " meals. Is he healthy? " + passengerFive.isHealthy);
    console.log(' ');
    //Create wagon with an empty passenger list and a capacity of 4.
    var wagonOne = new Wagon(4, []);
    //Make 3 of 5 the travelers eat by calling their eat methods
    console.log("It's " + passengerOne.eat() + " that " + passengerOne.name + " had enough to eat. Is he still healthy? " + passengerOne.isHealthy);
    console.log("It's " + passengerTwo.eat() + " that " + passengerTwo.name + " had enough to eat. Is he still healthy? " + passengerTwo.isHealthy);
    console.log("It's " + passengerThree.eat() + " that " + passengerThree.name + " had enough to eat. Is he still healthy? " + passengerThree.isHealthy);
    console.log(' ');
    //Make the remaining 2 travelers hunt
    passengerFour.hunt();
    console.log(passengerFour.name + " tried to hunt and now has " + passengerFour.food + " meals.");
    passengerFive.hunt();
    console.log(passengerFive.name + " tried to hunt and now has " + passengerFive.food + " meals.");
    console.log(' ');
    //Create an array of your travelers, loop over the array of travelers and give each traveler a 50% chance
    //of attempting to be being added to the wagon using the wagons addPassenger method.
    var wagonArray = [passengerOne, passengerTwo, passengerThree, passengerFour, passengerFive];
    for (var i = 0; i < wagonArray.length; i += 1) {
        if (Math.random() >= .5) {
            console.log("Was " + wagonArray[i].name + " added to the wagon?..." + wagonOne.addPassenger(wagonArray[i]));
        }
        else {
            console.log("Was " + wagonArray[i].name + " added to the wagon?..." + wagonOne.addPassenger(wagonArray[i]));
        }
    }
    console.log(' ');
    //Run the isQuarantined method for the wagon
    console.log("The wagon is Quarantiend, " + wagonOne.isQuarantined());
    console.log(' ');
    //Run the getFood method for the wagon
    console.log("The total number of meals left is " + wagonOne.getFood());
    /*
    * Play the game
    * the return values of all the methods should be displayed in the console using console.log()
    * the console.log statements should not live inside any methods on the objects
    */
})();

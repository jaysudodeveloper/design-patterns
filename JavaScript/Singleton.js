/**
 * Created by Jay on 23/02/2016.
 */


/**Singleton*/
let Router = (function () {
    "use strict";
    let instance; //prevent modification of "instance" variable by specifying it within the IIFE scope.
    function Singleton() {
        if (instance) { //Self explanatory but if an instance already exists we return that instance and exit out.
            return instance;
        }
        this.users = [];
        this.addUser = function(user){
            this.users.push(user);
        };
        instance = this;
        //Singleton initialization code
    }
    //This is the same as specifying this.getInstance = function(){} and can be used as an alternative.
    Singleton.getInstance = function () {
        return instance || new Singleton();
    };
    return Singleton; //after initialization is complete we return the singleton.
})();

let a = new Router(); //Try and create two instances
let b = Router();

a.addUser("James"); //Try and modify the instances separately and notice that they hold the same data
b.addUser("Sarah");
console.log(a.users + " " + b.users);

/**
 * Created by Jay on 22/02/2016.
 */

/**Prototype ColorChanger with pre initialized attributes*/
let ColorChanger1 = function(){
    this.colors = ["red", "blue", "green"];
    this.color = "Null";
};

//Add functionality to the ColorChanger prototype using ColorChanger.prototype.property_to_add = define property.
ColorChanger1.prototype.getColors = function(){
    console.log(this.colors);
};

ColorChanger.prototype.changeColor = function(col_index){
    this.color = this.colors[col_index];
    console.log("New color is: " + this.color);
};

//we can create instance objects of the prototype and keep the initialized state.
let color1 = new ColorChanger1();
let color2 = new ColorChanger1();

//We can change state of each instance separately using the methods we define for the prototype.
color1.changeColor(2);
color2.changeColor(1);


/**Revealing Prototype ColorChanger*/
let ColorChanger2 = function(){
    this.colors = ["red", "blue", "green"];
    this.color = "Null";
};

//Similar to modules, we can create a revealing prototype to simulate private and public scopes.
ColorChanger2.prototype = function(){
    let getColors = function(){
        console.log(this.colors);
    };

    let changeColor = function(col_index){
    this.color = this.colors[col_index];
    console.log("New color is: " + this.color);
    };

    return {
        revealColors: getColors,
        revealChangeColor: changeColor
    }
}();

//Using ColorChanger2 we can demonstrate private methods not accessible.
let color = new ColorChanger2();

color.revealChangeColor(1); //Outputs: 'New color is: blue'.
color.changeColor(0); //Outputs: changeColor() is not a function.

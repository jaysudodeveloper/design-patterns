/**
 * Created by Jay on 22/02/2016.
 */

(function() {
    //Declare private variables and functions
    return {
        //return public variables and functions
    }

})();

/**Module ColorChanger*/
let ColorChanger1 = (function() {
    //Declare private variables and functions
    let _colors = ["red", "blue", "green"];
    let _color = "";

    let _changeColor = function(col_index){
        _color = _colors[col_index];
        console.log("color changed");
    };

    //return public variables and functions
    return {
        callChangeColor: function(col_index){
            _changeColor(col_index);
            console.log("color changed to:" + _colors[col_index]);
        }
    };
})();

/**Revealing Module ColorChanger*/
let ColorChanger2 = (function(){
    //Declare private variables and functions
    let _colors = [];
    let _color = "";

    let _changeColor = function(col_index){
        _color = _colors[col_index];
        console.log("Im a private method, My parameter is: " + col_index)
    };

    let exposeColor = function(col_index){
        _changeColor(col_index);
        console.log("I called a private method with parameter: " + col_index)
    };

    //return public variables and functions
    //This is much cleaner than returning a function expression to expose a private method
    return {
        changeColor: exposeColor,
        privateChangeColor: _changeColor
    };
})();

//ColorChanger1
ColorChanger1.callChangeColor(2); //Outputs: 'color changed' and 'color changed to: green'
console.log(ColorChanger1._color); //Undefined because _color is private

//ColorChanger2
ColorChanger2.changeColor(1); //Outputs: 'Im a private method, My parameter is: 1' and 'I called a private method with parameter: 1'
ColorChanger2.privateChangeColor(2); //Outputs: 'Im a private method, My parameter is: 2'
console.log(ColorChanger2._color);
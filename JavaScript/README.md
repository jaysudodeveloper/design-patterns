#Modules
JavaScript Modules are the most commonly used patterns for keeping particular pieces of code independent. Its ensures
loose coupling to support structured code. In OOP JavaScript modules are "classes".

Modules should be IIFE to keep name spaces clean and allow for a "private scope".

#Prototype
The Prototypical design pattern relies on JavaScripts prototypical inheritance. Each object has a link to another object
called its Prototype.

Similar to modules, we can simulate private and public scopes using Object.prototype = function(){}();, where the return
value is an object literal containing the functions or variables you wish to expose as public.
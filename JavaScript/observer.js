/**
 * Created by Jay on 23/02/2016.
 */

/**Subject*/
let Subject = function() {
    let self = this; //We bind this to self to use our observer list in the scope of our returning object
    this.observers = [];

    return {
        subscribeObserver: function (observer) {
            self.observers.push(observer); //Notice we use self.observer to access the observer list
        },

        unsubscribeObserver: function(observer){
            let index = self.observers.indexOf(observer);
            if(index > -1){
                self.observers.splice(index, 1);
            }
        },

        notifyObserver: function(observer){
            let index = self.observers.indexOf(observer);
            if(index > -1){
                self.observers[index].notify(index);
            }
        },

        notifyAllObservers: function(){
            for(let i = 0; i < self.observers.length; i++){
                self.observers[i].notify(i);
        }
        }
    };
};

/**Observer */
let Observer = function(){
    return {
        notify: function(index){ //for simplicity sake we use observers index in the subscriber list
            console.log("Observer " + index + " is notified");
        }
    }
};


//Create a subject instance to add observers to
let subject = new Subject();

//Create some observers to subscribe to the subject
let observer1 = new Observer();
let observer2 = new Observer();
let observer3 = new Observer();

//We can add observers to the subject
subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);
subject.subscribeObserver(observer3);

//Notify a single observer
subject.notifyObserver(observer1);

//Notify all observers subscribed to the subject
subject.notifyAllObservers();

//Easily remove a single observer
subject.unsubscribeObserver(observer3);
// The Observer pattern offers a subscription model in which objects subscribe to an event and get notified when the event occurs.
// This pattern is the cornerstone of event driven programming, including JavaScript.
// The Observer pattern facilitates good object-oriented design and promotes loose coupling.

function Subject() {
  this.observers = [];
}

Subject.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
  },
  unsubscribe: function (removeFn) {
    this.observers = this.observers.filter((fn) => {
      if (fn != removeFn) return fn;
    });
  },
  fire: function () {
    this.observers.forEach((fn) => {
      fn.call();
    });
  },
};

const subject = new Subject();

function Observer1() {
  console.log("Observer 1 consoled");
}

function Observer2() {
  console.log("Observer 2");
}

subject.subscribe(Observer1);
subject.subscribe(Observer2);
subject.unsubscribe(Observer1);

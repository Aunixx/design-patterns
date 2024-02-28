// The Iterator pattern allows clients to effectively loop over a collection of objects.

const items = [1, "Sahil", true, 1.24];

function Iterator(items) {
  this.items = items;
  this.index = 0;
}

Iterator.prototype = {
  hasNext: function () {
    return this.index < this.items.length;
  },
  next: function () {
    return this.items[this.index++];
  },
};

const iter = new Iterator(items);

console.log(iter.hasNext());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

const items = [1, "Sahil", true, 1.24];
const newArray = ["something", 1, 2, 3];

function Iterator(items) {
  this.items = items;
  this.index = items.length - 1;
}

Iterator.prototype = {
  hasPrev: function () {
    return this.index >= 0;
  },
  prev: function () {
    return this.items[this.index--];
  },
};

const iter = new Iterator(items);

while (iter.hasPrev()) {
  console.log(iter.prev());
}

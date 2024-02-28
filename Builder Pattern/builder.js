// The builder design pattern is a creational pattern that enables you to construct complex objects simply and more declaratively.

function Person(name, weight, height, gender) {
  this.name = name;
  this.weight = weight;
  this.height = height;
  this.gender = gender;
}

function PersonBuilder(name, gender) {
  this.name = name;
  this.gender = gender;
  this.setWeight = function (weight) {
    this.weight = weight;
    return this;
  };
  this.setHeight = function (height) {
    this.height = height;
    return this;
  };

  this.build = function () {
    return new Person(this.name, this.weight, this.height, this.gender);
  };
}

const patrick = new Person("Patrick", 80, 2, "male");
console.log(patrick);
const sahil = new PersonBuilder("Sahil", "male")
  .setHeight(2)
  .setWeight(67)
  .build();
console.log(sahil);

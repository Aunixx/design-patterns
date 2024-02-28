// A Factory Method creates new objects as instructed by the client.
// One way to create objects in JavaScript is by invoking a constructor function with the new operator.
// There are situations however, where the client does not, or should not, know which one of several candidate objects to instantiate.
// The Factory Method allows the client to delegate object creation while still retaining control over which type to instantiate

function Developer(name) {
  this.name = name;
  this.type = "Developer";
}

function Tester(name) {
  this.name = name;
  this.type = "Tester";
}

function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name);
      case 2:
        return new Tester(name);
    }
  };
}

function say() {
  console.log("Hi, I am " + this.name + " and I am a " + this.type);
}

const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(employeeFactory.create("Sahil", 1));
employees.push(employeeFactory.create("Shaoor", 1));
employees.push(employeeFactory.create("Noraiz", 2));
employees.push(employeeFactory.create("Hanan", 2));

console.log(employees);

employees.forEach((emp) => say.call(emp));
// employees.forEach((emp) => say.apply(emp));

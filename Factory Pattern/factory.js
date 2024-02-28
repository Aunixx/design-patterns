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
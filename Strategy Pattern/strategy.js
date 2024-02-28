// The Strategy pattern encapsulates alternative algorithms (or strategies) for a particular task.
// It allows a method to be swapped out at runtime by any other method (strategy) without the client realizing it.
// Essentially, Strategy is a group of algorithms that are interchangeable.

function Fedex(pkg) {
  this.calculate = (pkg) => {
    // Fedex calculations ...
    const costPerKg = 2.45 * pkg.weight;
    return costPerKg.toFixed(2);
  };
}

function UPS(pkg) {
  this.calculate = (pkg) => {
    // UPS calculations ...
    const costPerKg = 1.56 * pkg.weight;
    return costPerKg.toFixed(2);
  };
}

function USPS(pkg) {
  this.calculate = (pkg) => {
    // USPS calculations ...
    const costPerKg = 4.5 * pkg.weight;
    return costPerKg.toFixed(2);
  };
}

function Shipping() {
  this.company = "";
  this.setStrategy = (company) => {
    this.company = company;
  };
  this.calculate = (pkg) => {
    return this.company.calculate(pkg);
  };
}

const fedex = new Fedex();
const ups = new UPS();
const usps = new USPS();
const shipping = new Shipping();
const pkg = { from: "Alabama", to: "Georgia", weight: 12 }; // Dummy package

shipping.setStrategy(fedex);
console.log("Fedex: " + shipping.calculate(pkg));

shipping.setStrategy(ups);
console.log("UPS: " + shipping.calculate(pkg));

shipping.setStrategy(usps);
console.log("USPS: " + shipping.calculate(pkg));

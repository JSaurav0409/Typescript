// Function in TS

// Defining the return type of functions argument
function makeChai(type: string, cups: number) {
  console.log(`Making ${cups} cups of ${type} chai.`);
}

makeChai("Masala", 25);

// Defining the return type of the functions output
function getChaiPrice(): number {
  return 25;
}

//

function makeOrder(order: string) {
  if (!order) return null;
  return order;
}

// logger function

// :void = this function does not return any value

function logChai(): void {
  console.log("Chai is ready!");
}

// Optional Parameter and Default Parameter

// Passing Parameter optionally in function
function orderChai(type?: string) {}

// Passing the default value of the function
function passingParamsWithDefaultValue(type: string = "Default Value") {}

// Adding multiple custom params in functions

function createChai(order: {
  type: string;
  sugar: number;
  size: "small" | "large";
}): number {
  return 25;
}

// typenarrowing: narrow down the method of the data based on narrowing

function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai...`; // gives method according to string
  }
  // gives method according to number
  return `Chai order ${kind}`;
}

// We can check truthiness as well

function serveChai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return `Serving default Masala Chai`;
}

// We can do exostive check in TS as well

function orderChai(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return `small Chai is is here`;
  }
  if (size === "medium" || size === "large") {
    return `make extra chai`;
  }

  return `chai order #${size}`;
}

// Best Practice of writing code. If we use same method at two different class.

class KulhadChai {
  serve() {
    return `Serving Kulhad Chai`;
  }
}

class CuttingChai {
  serve() {
    return `Serving Cutting Chai`;
  }
}

// The below part gurantee that the instance return in this snippet are from KulhadChai
function serve(chai: KulhadChai | CuttingChai) {
  if (chai instanceof KulhadChai) {
    return chai.serve();
  }
}

// We can create our own custom type in TS using type keyword

type ChaiOrder = {
  type: string;
  sugar: number;
};

// Method which check type of ChaiOrder
function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.type === "number"
  );
}

function serveOrder(item: ChaiOrder | string) {
  if (isChaiOrder(item)) {
    // for string and number
    return `Serving ${item.type} chai with ${item.sugar} sugar`;
  }
  return `Serving custom chai: ${item}`;
}

// type(keyword) typeName = {
//   type(val): string (can be custom);
//   sugar: number;
// };

// Type Guarding

type MasalaChai = { type: "Masala"; spicelevel: number };
type GingerChai = { type: "Ginger"; amount: number };
type ElaichiChai = { type: "Elaichi"; aroma: number };

type Chai = MasalaChai | GingerChai | ElaichiChai;

// Type narrowing code for above custom data type

function MakeChai(order: Chai) {
  switch (order.type) {
    case "Elaichi":
      return `Elaichi Chai`;
      break;
    case "Ginger":
      return `Ginger Chai`;
      break;
    case "Masala":
      return `Masala Chai`;
      break;
  }
}

function brew(order: MasalaChai | GingerChai) {
  if ("spicelevel" in order) {
    //
  }
}


// Unknown datatype: It expect that we will provide it datatype before using it.

function isStringArray(arr:unknown): arr is string[] {
    
}
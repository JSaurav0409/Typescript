function makeChai(order: { type: string; sugar: number; strong: boolean }) {
  console.log(order);
}
function serveChai(order: { type: string; sugar: number; strong: boolean }) {
  console.log(order);
}

// In TS while writing the code sometime we don't know how many time the signature will repeat if it appears only once than we can write in only their on the go,
// if it repeat more than we define type at beginning to maintain readibility

type ChaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeChai1(order: ChaiOrder) {
  console.log(order);
}
function serveChai2(order: ChaiOrder) {
  console.log(order);
}

// For class where it fails, TS allows this in built-in types where it allows to do this but when you do this for custom type the TS will not allow this
// implements:
type TeaReceipe = {
  water: number;
  milk: number;
};

class MasalaChai implements TeaReceipe {
  water: number;
  milk: number;
}

// But for customize type
// A class can only implement an object type or intersection of object types with statically known members.
type CupSize1 = "small" | "large";

class Chai implements CupSize1 {
  small;
}

// So to fix this we will use "interface"
// To use implement: class className implement interfaceName{ method }

interface CupSize2 {
  size: "small" | "large";
}

class Chai implements CupSize2 {
  size: "small" | "large" = "large";
}

// We mostly use interface in class and type in function

// Union ( | ):
// We can select from given option only

type TeaType = "masala" | "Ginger" | "Lemon"; // <- This is called literal types

function orderChai(t: TeaType) {
  console.log(t);
}

// Intersection (&): Mix

type BaseChai = { teaLeaves: number };
type Extra = { masala: number };

type masalaChai = BaseChai & Extra;

const cup: masalaChai = {
  teaLeaves: 2,
  masala: 1,
};

// For Optional value

type User = {
  username: string;
  bio?: string;
};

const u1: User = { username: "Saurav" };
const u2: User = { username: "Saurav", bio: "Jobless" };

// ReadOnly value: It cannot be change after setting once

type config = {
  readonly appName: string;
  versiom: number;
};

const cfg: config = {
  appName: "Chai",
  versiom: 2,
};

cfg.appName=""
// Cannot assign to 'appName' because it is a read-only property.
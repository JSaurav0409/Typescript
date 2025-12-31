// Objects in TS

const chai = {
  name: "Masala Chai",
  price: 20,
  isHot: true,
};
// const chai = {
//     name: String,
//     price: number,
//     isHot: boolean
// Typescript automatically inferred the types and sometime we expilicitly mention the types
// }

// Declaring object type
let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "Masala Chai",
  price: 34,
  isHot: true,
};

// Aliast object

type Tea = {
  name: string;
  price: number;
  ingredients: string[]; // Defining the aliast object
};

const adrakChai: Tea = {
  name: "Adrak Chai",
  price: 23,
  ingredients: ["Ginger", "Tea Leaves", "Sugar"],
};

// Duck Typeing
// In the TS the structural typing works on look-like.

// Example 1
type Cup = { size: string };
let smallCup: Cup = { size: "200ml" };
let bigCup = { size: "500ml", material: "steel" };
smallCup = bigCup;

// Example 2
type Brew = { brewTime: number };
const coffee = { brewTime: 5, beans: "Arabica" };
const chaiBrew: Brew = coffee;

// In TS if the bare minimum requirement is satisfied it won't show any warning and error, TS is prone to this

// But it will show the warning if you miss the provided properties it will show warning.

type User = {
  username: string;
  password: string;
};

const u: User = {
  username: "Saurav Jha",
  password: "123", // But if you missed this part it will show the warning: // ~ Property 'password' is missing in type '{ username: string; }' but required in type 'User'.
};

//~ Spliting out the datatype.

type Item = { name: string; quantity: number };
type Address = { street: string; pin: number };

type Order = {
  id: number;
  items: Item;
  address: Address;
};

type Chai = {
  name: string;
  price: number;
  isHot: boolean;
};

//~ Partial : The Partial keyword make all properties in T optional.
const updateChai = (updates: Partial<Chai>) => {
  console.log("Updating chai with", updates);
};

updateChai({ price: 25 });
updateChai({ isHot: false });

// But it comes with a problem, so a dev can pass an empty object here as well so make sure to avoid this
updateChai({});

// Passing the datatype optionally using (?)

type ChaiOrder = {
  name?: string;
  quantity?: number;
};

//~ Required : The Required keyword make all properties in T required.
const placeOrder = (order: Required<ChaiOrder>) => {
  console.log(order);
};

placeOrder({
  name: "Masala Chai",
  quantity: 2,
});

//~ Pick : From T, pick a set of properties whose keys are in the union K

type BasicChaiInfo = Pick<Chai, "name" | "isHot">;

const chaiInfo: BasicChaiInfo = {
  name: "Lemon Tea",
  isHot: true,
};

//~ Omit : Construct a type with the properties of T except for those in type K.

type ChaiNew = {
  name: string;
  price: number;
  isHot: boolean;
  secretIngredients: string;
};

type PublicChai = Omit<ChaiNew, "secretIngredients">;

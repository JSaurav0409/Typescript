// Array, Tuples, Enum

// Defining Array of different data type using different method

// Method 1

// String
const chaiFlavours: string[] = ["Masala", "Adrak", "Elaichi"];
// Numbers
const chaiPrice: number[] = [10, 20];

// Method 2

const rating: Array<number> = [4.5, 3.5, 1.1];
const TeaFlavour: Array<string> = ["Masala", "Adrak", "Elaichi"];

// Method 3

type Chai = {
  name: string;
  price: number;
};

const menu: Chai[] = [
  { name: "Masala", price: 15 },
  { name: "Adarak", price: 25 },
];

// menu.push( { name: "Elaichi", price: 25 })

// Method 4: Readonly array - It cannot be modified once created

const cities: readonly string[] = ["Delhi", "Mumbai"];
// cities.push()

// Method 5: Multi Dimensional Array

const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// Tuples in Typescript specify the type of each element in the array:
// We have to pass the element in order in which we passed the datatype
let chaiTuple: [string, number];
chaiTuple = ["Masala", 20];

// Optional datatype value in string

let userInfo: [string, number, boolean?];

userInfo = ["Saurav", 25, true];
userInfo = ["Saurav", 25];

// Readonly Tuples

const location: readonly [number, number] = [29.09, 33.45];

// Named Tuples -> Use mostly

const chaiItems: [name: string, price: number] = ["Masala", 25];

// Define In TypeScript, an enum (short for enumeration) is a feature that allows developers to define a set of named constants, which can be either numeric or string-based.
// How to define in code, standard practice to write enum values in caps

enum CupSize {
  SMALL,
  MEDIUM,
  LARGE,
}

const size = CupSize.LARGE; // this dot notation will give only option that we gave

// Gotcha behaviour of enum

enum Status {
  PENDING = 101,
  SERVED, // Enum automatically give 102 to this
  CANCELLED, // Enum automatically give 103 to this
}

enum ChaiType {
  MASALA = "Masala",
  GINGER = "Ginger"
}

function makeChai(type: ChaiType) {
  console.log(`Making ${type}`);
}

makeChai(ChaiType.GINGER)
makeChai(ChaiType.MASALA) // Now it will give option from allowed named constant

// makeChai("Masala") //& But if you want to use the direct value rathar than provided one it will give error: Argument of type '"Masala"' is not assignable to parameter of type 'ChaiType'.

// Heterogenous value : not a good practice

enum RandomEnum {
  ID = 1,
  NAME = "chai"
}

// enum as constant : Very rare

const enum Sugars {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}

const s = Sugars.LOW 

// Unexpected Behaviour: At the end of the day its an array

let t: [string, number] = ["chai", 25]
t.push("extra")
// Type Assertion is a mechanism that allows developers to forcefully override the compiler's inferred type, informing it of the specific type of a value.
// SYNTAX : let response: any = "42";
//          let numericLength: number = (response as dataType).method  // forcefully overriding the data type.

// Defining the customise type
type Book = {
  name: string;
};

//
let bookString = '{"name":"Steve Jobs"}';

// forcefully overriding the data type of bookString as Book
let bookObject = JSON.parse(bookString) as Book;

// Because of type assertion TS providing us the (.name) method of book that we defined earlier.
console.log(bookObject.name);

// Asserting the HTMLInputElement as datatype.
const inputElement = document.getElementById("username") as HTMLInputElement;

// Unknown and any

let value: any;

value = "Hello World!";
value = [1, 2, 4, 5];
value = 2.5;
value.toUpperCase(); // Despite of assigning different datatype in (any) it stills error (swingly line in IDE) altough it ultimately going to throw error on executing the code.

let newValue: unknown;

newValue = "Hello World!";
newValue = [1, 2, 4, 5];
newValue = 2.5; // But in unknown datatype it shows swingly line indicating an error

// Typescript run this only if we declare the types before calling it
if (typeof newValue === "string") {
  newValue.toUpperCase();
}

// How to handle error using type assertion using try-catch block.

try {
} catch (error) {
  // we will handle error by checking instanceof so if it will access the (.message) method only if it is instance of Error.
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log("Error", error);
}

const data: unknown = "Hello World!";

const strData: string = data as string; // forcefully asserting the (string) datatype to its previous (unknown) datatype

// never datatype

// Defining the type of role

type Role = "admin" | "user";

function redirectBasedOnRole(role: Role) {
  if (role === "admin") {
    console.log("Redirecting to admin dashboard");
    return;
  }
  if (role === "user") {
    console.log("Redirecting to user dashboard");
    return;
  }
  role; // Here the data type of role is never or it show any edge cased which we missed
}

// Their are also some functions which never return anything, its an infinite loop

function neverReturn(): never {
  while (true) {}
}

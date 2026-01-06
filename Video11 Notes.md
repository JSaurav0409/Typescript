# Arrays, Tuples & Enums in TypeScript

TypeScript extends JavaScript arrays with strong typing, and introduces Tuples and Enums for stricter data modeling.

---

## 1. Arrays in TypeScript

Arrays can be defined in multiple ways depending on use case.

---

### Method 1: Basic Typed Arrays

```ts
const chaiFlavours: string[] = ["Masala", "Adrak", "Elaichi"];
const chaiPrice: number[] = [10, 20];
```

**Key Points**

- Simple and most commonly used
- Array can contain only one specific type
- Prevents pushing invalid values

---

### Method 2. Generic Array Syntax

```ts
const rating: Array<number> = [4.5, 3.5, 1.1];
const TeaFlavour: Array<string> = ["Masala", "Adrak", "Elaichi"];
```

**Key Points**

- Use **Array<T>** generic
- Preferred in complex types and framework-level code
- Functionally same as **string[]**

---

### Method 3. Array of Objects Using Type

```ts
type Chai = {
  name: string;
  price: number;
};

const menu: Chai[] = [
  { name: "Masala", price: 20 },
  { name: "Elaichi", price: 25 },
];
```

**Key Points**

- Best for structured data
- Ensures every objects follows the same shape
- Scales well in real applications

---

### Method 4. Readonly Arrays

```ts
const cities: readonly string[] = ["Delhi", "Mumbai"];
```

**Key Points**

- Readonly array cannot be modified after creation
- Methods like **push**, **pop**, **slice** are blocked

---

### Method 5. Multi-Dimensional Arrays

```ts
const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];
```

**Key Points**

- Each inner array must follow the defined type
- Used in **matrices**, **grids**, **tables**

---

## 2. Tuples in TypeScript

Tuples allows **fixed-length arrays with specific types at specific positions**.

---

### 1. Basic Tuple

```ts
let chaiTuple: [string, number];
chaiTuple: ["Masala", 25];
```

**Key Points**

- Order matters
- Length is fixed logically
- Each index has a defined type

---

### 2. Optional Tuple Element

```ts
let userInfo: [string, number, boolean?];

userInfo = ["Saurav", 25, true];
userInfo = ["Saurav", 25];
```

**Key Points**

- Optional values must come at the end
- Useful for partial data scenarios

---

### 3. Readonly Tuples

```ts
const location: readonly [number, number] = [29.5, 33.45];
```

**Key Points**

- Tuples values cannot be changed
- Ideal for cordinates, fixed pair

---

### 4. Named Tuples (Best Practice)

```ts
const chaiItems: [name: string, price: number] = ["Masala", 25];
```

**Key Points**

- Improves Readibility
- Makes tuples usage self-documenting
- Preferred in production code

---

### 5. Tuple Gotcha (Importance)

```ts
let t: [string, number] = ["chai", 25];
t.push("extra");
```

**Why this happens?**

- Tuples are implemented as arrays at runtime
- TypeScript allows `push()` due to JS behavior
- This is known limitation

**👉 Use readonly tuple to avoid this**

---

## 3. Enums in TypeScript

Enums defne a set of name constants.

---

### 1. Enum (Default)

```ts
enum CupSize {
  SMALL,
  MEDIUM,
  LARGE,

  const size = CupSize.LARGE; // this dot notation will give only option that we gave

}
```

**Key Points**

- enums values define in **capital** its a not compulsary
  but a standard practice.
- Dot notation gives only allowed values

---

### 2. Custom Numeric Enum

```ts
enum Status {
  PENDING = 101,
  SERVED, // 102
  CANCELLED, // 103
}
```

**Key Points**

- First value is manually assigned
- Next value auto-increment
- Useful for status codes.

---

### 3. String Enum (Recommended)

```ts
enum ChaiType {
  MASALA = "Masala",
  GINGER = "Ginger",
}

function makeChai(type: ChaiType) {
  console.log(`Making ${type}`);
}
```

**Key Points**

- Safer than numeric enums
- Prevents invalid string usage
- Improves debugging and readibility

### Enum Safety Example

```ts
makeChai(ChaiType.GINGER); // ✅
makeChai("Masala"); // ❌ Error
```

**Why?**

- Directs strings are not allowed
- Only enum members are accepted

---

### 4. Heterogeneous Enum (Not Recommended)

```ts
enum RandomEnum {
  ID = 1,
  NAME = "chai",
}
```

**Why avoid**

- Mixing numbers and string types
- Cause confusion and bugs
- Rearely used in real projects

---

### 5. Const Enum (Rare Usage)

```ts
const enum Sugars {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}

const s = Sugars.LOW;
```

**Key Points**

- Removed during compilation
- Improves performance slightly
- Used only in performance-critical code

---

## Interview-Ready Summary

- Arrays enforce consistent data types
- **readonly** prevents mutation
- Tuples define fixed-position data
- Named Tuples improves clarity
- Enums restrict values to known constants
- String enums are safer than numeric enums
- Tuples still behave like arrays at runtime (important gotcha)

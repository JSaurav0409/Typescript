# Objects & Object Types in TypeScript

**“You can use objects freely, but you must clearly define what properties they can have.”**

---

## 1️⃣ Objects & Type Inference

```ts
const chai = {
  name: "Masala Chai",
  price: 20,
  isHot: true,
};
```

**What's happening ?**
👉 TypeScript automatically understands:

- **name** → string
- **price** → number
- **isHot** → boolean

This is called **type inference**.
You don't always need to write types explicitly

---

## 2️⃣ Explicit Object Type Declaration

```ts
let tea: {
  name: string;
  price: number;
  isHot: boolean;
};
```

**Now TypeScript forces this shape.**

- ✅ Good for safety
- ❌ Repeating this everywhere is messy

---

## 3️⃣ Type Alias (Reusable & Clean)

```ts
type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};
```

Think of type as: **“A blueprint for objects”**

```ts
const adrakChai: Tea = { ... };

```

- ✔ Reusable
- ✔ Clean
- ✔ Industry Standard

---

## 4️⃣ Duck Typing (Structural Typing)

If it looks like the required type, TypeScript accepts it.
**“If it looks like a duck, TypeScript accepts it as a duck.”**

```ts
// Example 1

type Cup = { size: string };

let smallCup: Cup = { size: "200ml" };
let bigCup = { size: "500ml", material: "steel" };

smallCup = bigCup; // ✅ allowed

// Example 2

type Brew = { brewTime: number };

const coffee = { brewTime: 5, beans: "Arabica" };
const chaiBrew: Brew = coffee; // ✅
```

**👉 This is called Structural Typing.**
Why allowed ?

- **bigCup** has at least **size**
- Extra properties don’t matter.

---

## 5️⃣ Missing Properties = Error 🚨

```ts
type User = {
  username: string;
  password: string;
};
```

If you skip **password**, TS will warn you.

- ✔ TS is strict when required fields are missing
- ❌ TS is relaxed about extra fields

---

## 6️⃣ Splitting Types (Real-World Style)

```ts
type Item = { name: string; quantity: number };
type Address = { street: string; pin: number };

type Order = {
  id: number;
  items: Item;
  address: Address;
};
```

- ✔ Clean
- ✔ Scalable
- ✔ Professional design

---

## 7️⃣ Partial<T> – Make Everything Optional

```ts
const updateChai = (updates: Partial<Chai>) => {}

// Now you can send

updateChai({ price: 25 });
updateChai({ isHot: false });

// ⚠ Problem
updateChai({}); // ❌ logically bad but TS allows


👉 Use carefully.

```

---

## 8️⃣ Optional Properties ?

```ts
type ChaiOrder = {
  name?: string;
  quantity?: number;
};
```

**Means:**

- Property **may or may not exist**

---

## 9️⃣ Required<T> – Opposite of Partial

```ts
const placeOrder = (order: Required<ChaiOrder>) => {};

placeOrder({ name: "Masala Chai", quantity: 2 }); // ✅
```

Both fields are **mandatory** again

---

## 🔟 Pick<T, K> – Take Only What You Need

```ts
type BasicChaiInfo = Pick<Chai, "name" | "isHot">;

{
  name: string;
  isHot: boolean;
}
```

- ✔ Useful for public data
- ✔ Common in APIs

---

## 1️⃣1️⃣ Omit<T, K> – Remove Sensitive Data

```ts
type PublicChai = Omit<ChaiNew, "secretIngredients">;
```

✔ Best for:

- Public responses
- Security
- Clean APIs

---

## 🧠 One-Line Memory Cheat Sheet

| Concept       | Meaning                |
| ------------- | ---------------------- |
| `type`        | Object blueprint       |
| Duck Typing   | Looks right → accepted |
| `Partial<T>`  | Everything optional    |
| `Required<T>` | Everything mandatory   |
| `Pick<T>`     | Select fields          |
| `Omit<T>`     | Remove fields          |

# Video 8: Type, Interface, Union, Intersection & Modifiers

## 1️⃣ Repeating Object Structure → Use type

- When the same object shape is used multiple times, define it once.
- ❌ Without type (hard to maintain)

```ts
function makeChai(order: { type: string; sugar: number; strong: boolean }) {
  console.log(order);
}

function serveChai(order: { type: string; sugar: number; strong: boolean }) {
  console.log(order);
}
```

- ✅ With type (clean & readable)

```ts
type ChaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeChai(order: ChaiOrder) {
  console.log(order);
}

function serveChai(order: ChaiOrder) {
  console.log(order);
}
```

- **📌 Rule of thumb**
  - Used once → inline type is OK
  - Used multiple times → define a `type`

---

## 2️⃣ `type` vs `interface` with Classes

- `type` works for functions & objects
- But classes cannot implement union types.

- ❌ This will fail

```ts
type CupSize1 = "small" | "large";

class Chai implements CupSize1 {
  // ❌ Not allowed
}
```

**👉 Reason:**
Classes can only implement object-like structures, not unions

---

## 3️⃣ Use interface for Classes

✅ Correct approach

```ts
interface CupSize {
  size: "small" | "large";
}

class Chai implements CupSize {
  size: "small" | "large" = "large";
}
```

**📌 Best Practice**

- `interface` → classes
- `type` → functions, objects, unions

---

## 4️⃣ Union Types (|) – Choose One Option

Union means one value from given options.

```ts
type TeaType = "Masala" | "Ginger" | "Lemon"; // 📌 These are called Literal Types

function orderChai(t: TeaType) {
  console.log(t);
}
```

**✅ Allowed:**

```ts
orderChai("Masala");
```

**❌ Not allowed:**

```ts
orderChai("Coffee");
```

---

## 5️⃣ Intersection Types (&) – Mix Types

Intersection combines multiplr types into one

```ts
// Declaring
type BaseChai = { teaLeaves: number };
type Extra = { masala: number };

type MasalaChai = BaseChai & Extra;

// Usage
const cup: MasalaChai = {
  teaLeaves: 2,
  masala: 1,
};
```

**📌 Think of & as mixing ingredients**

---

## 6️⃣ Optional Properties (?)

Use **?** when a property is not mandotary

```ts
type User = {
  username: string;
  bio?: string;
};

const u1: User = { username: "Saurav" };
const u2: User = { username: "Saurav", bio: "Jobless" };
```

- **📌 Optional means:**
  - Can exist
  - Can be missing
  - Never forced

---

## 7️⃣ Readonly Properties

**`readonly` means cannot be changed after assignment.**

```ts
type Config = {
  readonly appName: string;
  version: number;
};

const cfg: Config = {
  appName: "Chai",
  version: 2,
};
```

**❌ Not allowed:**

```ts
cfg.appName = "Tea";
```

- **📌 Useful for:**
  - App config
  - Constants
  - Environmental values

---

## 🔑 Final Easy Summary

| Concept            | Use When                   | Meaning                              |
| ------------------ | -------------------------- | ------------------------------------ |
| `type`             | Functions, objects, unions | Create custom data shapes            |
| `interface`        | Classes                    | Define structure a class must follow |
| `\|` (Union)       | Multiple choices           | **One of many values**               |
| `&` (Intersection) | Combining types            | **Mix multiple types**               |
| `?`                | Optional data              | Property may or may not exist        |
| `readonly`         | Fixed values               | Prevent reassignment after creation  |

**🧠 Simple Explanations (One-Liners)**

- **type** → Flexible, works everywhere (functions, unions, objects)
- **interface** → Best for classes and implements
- **Union (|)** → Choose one option only
- **Intersection (&)** → Combine all properties
- **Optional (?)** → Property is not mandatory
- **readonly** → Value cannot be changed once set

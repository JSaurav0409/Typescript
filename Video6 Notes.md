## Video 6: Type Narrowing and Type Guards

- Type narrowing allows TypeScript to reduce a union type to a more specific type based on runtime checks.
- This helps safely access properties and methods without losing type safety.

---

### 1️⃣ Type Narrowing using `typeof`

- Used for primitive types such as **string**, **number**, **boolean**, etc.

```ts
function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai...`;
  }
  return `Chai order ${kind}`;
}
```

- **📌 Key Point**
  - Inside the **if** block, **kind** is treated as a **string**.
  - Outside, TypeScript narrows it to **number**.
  - **typeof** works only with primitive types, not objects or arrays.

---

### 2️⃣ Truthiness Narrowing

- Used when checking **optional** or **nullable** values

```ts
function serveChai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return `Serving default Masala Chai`;
}
```

- **📌 Key Point**
  - msg is `string` | `undefined`
  - Truthy check ensures `msg` is a **string**

---

### 3️⃣ Literal Type Narrowing (Exhaustive Checks)

```ts
function orderChai(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return `small chai is here`;
  }
  if (size === "medium" || size === "large") {
    return `make extra chai`;
  }
  return `chai order #${size}`;
}
```

- **📌 Used for**
  - UI states.
  - Fixed configuration values
  - Preventing invalid points

---

### 4️⃣ `instanceof` Narrowing (Class-based)

Used when working with class instances.

```ts
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

function serve(chai: KulhadChai | CuttingChai) {
  if (chai instanceof KulhadChai) {
    return chai.serve();
  }
}
```

- **📌 Guarantees**
  - The object is an instance of **KulhadChai**
  - Safe access to class-specific methods.

---

### 5️⃣ Custom Types using `type`

```ts
type ChaiOrder = {
  type: string;
  sugar: number;
};
```

- Defines a reusable object structure.
- Improves consistency across codebase.

---

### 6️⃣ User-Defined Type Guards (`obj is Type`)

- Type guards allow you to teach TypeScript how to identify a type.

```ts
function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

// usage

function serveOrder(item: ChaiOrder | string) {
  if (isChaiOrder(item)) {
    return `Serving ${item.type} chai with ${item.sugar} sugar`;
  }
  return `Serving custom chai: ${item}`;
}
```

- **📌 This enables**
  - Safe property access
  - Clean runtime validation

---

### 7️⃣ Discriminated Unions (Best Practice)

```ts
type MasalaChai = { type: "Masala"; spicelevel: number };
type GingerChai = { type: "Ginger"; amount: number };
type ElaichiChai = { type: "Elaichi"; aroma: number };

type Chai = MasalaChai | GingerChai | ElaichiChai;
```

- Each type has:
  - A common property(`type`).
  - A unique literal value.

---

### 8️⃣ Type Narrowing using `switch` (Exhaustive Pattern)

```ts
function makeChai(order: Chai) {
  switch (order.type) {
    case "Elaichi":
      return `Elaichi Chai`;
    case "Ginger":
      return `Ginger Chai`;
    case "Masala":
      return `Masala Chai`;
  }
}
```

- **📌 Why this is powerful**
  - TypeScript knows exactly which type is active.
  - Prevents missing cases in unions.

---

### 9️⃣ `in` Operator Narrowing

- Used to check property existence.

```ts
function brew(order: MasalaChai | GingerChai) {
  if ("spicelevel" in order) {
    // order is MasalaChai
  } else {
    // order is GingerChai
  }
}
```

---

### 🔟 `unknown` Type & Narrowing

- `unknown` forces you to validate before use (safer than `any`).
- unknown is a type that can hold any value, but you cannot use it until you first check or narrow its type.

```ts
function isStringArray(arr: unknown): arr is string[] {
  return Array.isArray(arr) && arr.every((item) => typeof item === "string");
}
```

- **📌 Best practice**
  - Prefer `unknown` over `any`
  - Always narrow before usage

---

### 🔑 Key Takeaways

- Type narrowing improves safety and readability

- typeof, instanceof, in, and switch are core tools

- Custom type guards unlock powerful runtime validation

- Discriminated unions are the cleanest pattern

- unknown > any

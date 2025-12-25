# Type Assertion, `unknown`, `any`, and `never` in TypeScript

### 1️⃣ Type Assertion

- **Type Assertion** allows developers to tell TypeScript what the type is, even if the compiler cannot infer it correctly.
- Type Assertion tells TypeScript: “I know the actual type better than you — trust me.”
- ⚠️ It does not perform runtime validation — it only affects the compiler.
- **Syntax :** `value as Type`

---

- **Example: Asserting JSON Data**

```ts
type Book = {
  name: string;
};

let bookString = '{"name":"Steve Jobs"}';

// Type assertion
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject.name);
```

- **📌 Why needed?**
  - `JSON.parse()` returns `any`
  - Type assertion informs TS about the expected structure.

---

- **Example: DOM Type Assertion**

```ts
const inputElement = document.getElementById("username") as HTMLInputElement;

inputElement.value = "Saurav";
```

- 📌 DOM APIs return generic types like **HTMLElement | null**
  Type assertion gives access to element-specific properties.

---

### 2️⃣ any Type

**any** turns off TypeScript's type checking.

```ts
let value: any;

value = "Hello World!";
value = [1, 2, 4, 5];
value = 2.5;

value.toUpperCase(); // ❌ No compile-time error
```

- **⚠️ Problem with `any`**
  - No-compile time safety.
  - Errors occur at runtime.
  - IDE warning may appears, but TS allows it.
- **`any` makes TypeScript behave like JavaScript**

---

### 3️⃣ `unknown` Type (Safer Alternative)

- `unknown` means : **“I don’t know the type yet, but you must check before using it.”**

```ts
let newValue: unknown;

newValue = "Hello World!";
newValue = [1, 2, 4, 5];
newValue = 2.5;

// ❌ Error
// newValue.toUpperCase();
```

- **Narrowing `unknown`**

```ts
if (typeof newValue === "string") {
  newValue.toUpperCase(); // ✅ Safe
}
```

- 📌 Difference between `any` and `unknown`

| Feature         | `any`    | `unknown` |
| --------------- | -------- | --------- |
| Type safety     | ❌ No    | ✅ Yes    |
| Requires checks | ❌ No    | ✅ Yes    |
| Recommended     | ❌ Avoid | ✅ Prefer |

---

### 4️⃣ Type Assertion with `unknown`

- Sometimes you know the types but TS doesn't

```ts
const data: unknown = "Hello World!";

const strData: string = data as string;
```

- ⚠️ Use assertions only when you are confident.

---

### 5️⃣ Error Handling & Type Narrowing

- In `catch`, the error type is `unknown` by default.

```ts
try {
  // risky code
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log("Error", error);
}
```

- **📌 Best practice:**
  - Always narrow error before accessing properties.

---

### 6️⃣ never Type

- The **never** type represents values that never occur.

```ts
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

  role; // role is `never` here
}
```

- 📌 If a new role is added later, TS will warn you.

---

- **Example 2: Function That Never Returns**

```ts
function neverReturn(): never {
  while (true) {}
}
```

- **Used in:**
  - Infinite loops
  - Throwing errors
  - Exhaustive checks

---

### 🔑 Key Takeaways

- **Type Assertion** overrides the compiler - no runtime safety.
- Prefer `unknown` over `any`.
- Always narrow `unknown` before use.
- `never` ensures no cases are missed.
- Strong typing prevents runtime crashes.

---

### ✅ Best Practices Summary

- ❌ Avoid any
- ✅ Use unknown + narrowing
- ✅ Use type assertions sparingly
- ✅ Use never for exhaustive checks
- ✅ Let TypeScript protect you

### Video 5: Understanding Unions and Any

- TypeScript provides different ways to handle variables that may hold more than one type. Two important concepts are **Union Types** and **any**.

---

- **1. Union Types :** Allow a variable to accept multiple specific types.
  - A **union type** lets a variable hold one of several predefined types.
  - It is defined using the pipe **(|)** symbol.
  - Helps maintain **type safety** while allowing flexibility.
- Example:

```ts
// Basic Union

let subs: number | string = "1M";

subs = 1000000; // ✅
subs = "1M"; // ✅
subs = true; // ❌ Error

// Union of Literal Types (Very Important)
let apiRequestStatus: "pending" | "success" | "error" = "pending";

apiRequestStatus = "success"; // ✅
apiRequestStatus = "loading"; // ❌ Error
```

- Only these exact values are allowed.
- Prevent accidental bugs caused by invalid strings.
- **📌 Real-world usage:** API states, form statuses, role permissions, feature flags.

---

#### What Union Types Matter in Team Projects

- Clearly communicates allowed values to all developers.
- Preventions invalid assignments at compile time.
- Improve IDE auto-suggestions and documentation.
- Reduces runtime bugs significantly.

---

**2.any Type :** Disable type checking **(use with caution)**

- **any** allows a variable to hold **any type**
- TypeScript stops performing checks on that variable.
- Example:

```ts
let data: any;

data = 10;
data = "text";
data = true;
data(); // ❌ No error at compile time
```

---

#### ⚠️ Why any is dangerous

- Loses all TypeScript benefits.
- Errors appear only at runtime.
- Makes code harder to maintain and debug.

---

### Union vs any (Key Comparison)

| Feature              | Union Type | `any`    |
| -------------------- | ---------- | -------- |
| Type safety          | ✅ Yes     | ❌ No    |
| Autocomplete support | ✅ Yes     | ❌ No    |
| Compile-time errors  | ✅ Yes     | ❌ No    |
| Recommended          | ✅ Always  | ❌ Avoid |

---

### Key Takeaways

- Union types provide **controlled flexibility**.
- Literal unions act like **enum without extra code**.
- **any** remove all type safety.
- TypeScript helps teams scale safety by **enforcing constraints**.

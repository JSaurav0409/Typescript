## Video 4: Type Annotations and Inference in TypeScript

**1. Type Interference (automatic)**
**2. Type Annotation (explicit)**

**1. Type Inference**

- TypeScript automatically infers the data type based on the assigned value.
- This works for most JavaScript values and reduces unnecessary code.
- Example

```ts
let drink = "chai";

// TypeScript infers:
let drink: string;

// Reassigning another string is allowed:
drink = "coffee"; // ✅

// Assigning a different type is not allowed:
drink = 10; // ❌ Error
```

**📌 Best Practice:** Rely on inference whenever the type is obvious.

**2. Type Annotation**

- When we explicitly specify the type.
- Used when:
  - Declaring a variable without immediate initialization.
  - Function parameters and return types.
  - Complex data structures.
- Example

```ts
let chaiFlavour: string = "Masala Chai";

// Valid reassignment:
chaiFlavour = "Ginger Tea"; // ✅

// Invalid reassignment:
chaiFlavour = 2; // ❌ Error: Type 'number' is not assignable to type 'string'

// For Boolean
let isHot: boolean;
```

### Key Takeaways (Interview-Focused)

- Type inference makes TS concise and readable
- Type annotations give control and clarity
- Prefer **string**, **number**, **boolean** over **String**, **Number**, **Boolean**.
- Over-annotation is unecessary- let TS work for you.

---

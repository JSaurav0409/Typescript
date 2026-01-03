# Video 10: Functions in TypeScript

TypeScript enhances JavaScript functions by allowing **type safety** for parameters and return values.

---

## 1. Function Parameters with Types

```ts
function makeChai(type: string, cups: number) {
  console.log(`Making ${cups} cups of ${type} chai.`);
}
```

**Key Points**

- **type: string** → only string values allowed
- **cups: number** → only numbers allowed
- TypeScript prevents invalid arguments at compile time
- Return type is inferred as `void` because nothing is returned

---

## 2. Explicit Return Type

```ts
function getChaiPrice(): number {
  return 25;
}
```

**Key Points**

- `:number` explicitly defines the return type
- Function must return a number, otherwise TS throws an error
- Best practice for **business logic functions**

---

## 3. Function Returning Multiple Possible Types

```ts
function makeOrder(order: string) {
  if (!order) return null;
  return order;
}
```

**Key Points**

- Function can return `string | null`
- TypeScript infers a **union type**
- Useful when handling validations or optional data

---

## 4. Void Return Type

```ts
function logChai(): void {
  console.log("Chai is ready!");
}
```

**Key Points**

- `void` means the function does not return anything
- Mostly used for:
  - logging
  - side effects
  - UI actions

---

## 5. Optional Parameters

```ts
function orderChai(type?: string) {}
```

**Key Points**

- **type?: string** means parameter is optional
- Function can be called with or without argument
- Optional parameters must come after **required parameters**

---

## 6. Default Parameters

```ts
function passingParamsWithDefaultValue(type: string = "Default Value") {}
```

**Key Points**

- Default value is used if no argument is passed
- Parameter automatically becomes optional
- Cleaner alternative to manual checks

---

## 7. Function with Object Parameter & Custom Types

```ts
function createChai(order: {
  type: string;
  sugar: number;
  size: "small" | "large";
}): number {
  return 25;
}
```

**Key Points**

- Function accepts an object with a strict structure
- `size` uses string **literal union type**
- Prevents invalid values like `"medium"`
- Return type explicitly set to `number`

---

## Quick Interview Summary

- TypeScript enforces **parameter types**
- Functions can have **explicit return types**
- `void` is used when nothing is returned
- `?` makes parameters optional
- Default parameters provide fallback values
- Object parameters improve readibility and safety
- Union types handle multiple return possibilities

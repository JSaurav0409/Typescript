# TypeScript

## Video 1: Introduction

**TypeScript (TS)** is a **superset of JavaScript** that adds **static typing** and advanced tooling on top of standard JavaScript.  
It is designed to help developers build **large-scale, maintainable, and reliable applications** without sacrificing JavaScript’s flexibility.

### Why TypeScript Exists

As JavaScript applications grow, several challenges naturally appear:

- **Too much freedom**  
  JavaScript allows many patterns, which often leads to inconsistent code styles across teams.

- **Missing or weak documentation**  
  In JavaScript, data types are implicit, making it harder to understand how values flow through the code.

- **Limited tooling at scale**  
  Refactoring, navigation, and error detection become difficult in large codebases.

- **Lower accuracy with AI-assisted tools**  
  Without type information, AI tools can misinterpret intent. TypeScript provides richer context through types, improving accuracy.

### How TypeScript Solves These Problems

TypeScript introduces:

- **Explicit types** → Clear contracts between functions and modules
- **Static type checking** → Errors caught at compile time, not runtime
- **Powerful IDE support** → Autocomplete, refactoring, navigation
- **Self-documenting code** → Types act as living documentation

Despite these additions, TypeScript **compiles down to plain JavaScript**, so it runs anywhere JavaScript runs.

---

## Video 2: How TypeScript Works Internally

TypeScript follows a structured compilation pipeline before producing JavaScript output.

**TypeScript Code
↓
Lexer
↓
Parser
↓
Binder
↓
Checker
↓
Emitter / Generator
↓
JavaScript (.js) + Type Declarations (.d.ts) + Source Maps (.map)**

### 1. Lexer (Tokenization)

- Breaks the source code into **tokens**
- Examples: keywords, identifiers, operators, literals
- This phase does **not** understand meaning, only structure

### 2. Parser

- Converts tokens into an **Abstract Syntax Tree (AST)**
- The AST represents the grammatical structure of the code
- Syntax errors are detected here

### 3. Binder

- Walks the AST and creates **symbol tables**
- Establishes:
  - Variable and function scopes
  - Parent–child relationships
  - Control flow references
- Prepares metadata needed for type checking

### 4. Checker (Type Checker)

- Performs **static type analysis**
- Validates:
  - Variable assignments
  - Function arguments and return types
  - Interface and type compatibility
- Reports type errors and warnings

### 5. Emitter (Generator)

- Transforms TypeScript into **plain JavaScript**
- Generates:
  - `.js` files → Executable JavaScript
  - `.d.ts` files → Type declarations for consumers
  - `.map` files → Source maps for debugging

---

## Key Takeaway

TypeScript does **not** change how JavaScript runs.  
It changes **how developers write, understand, and maintain JavaScript** — by adding structure, safety, and clarity before the code ever reaches production.

---

### Video 3: How to setup TypeScript

- TypeScript can be installed in two common ways:
  - **1. Globally (-g) (system-wide)**
  - **2. Project wise**
  - **Best Practice :** Install TypeScript **project-wise** to avoid version conflicts
- Installation of TS project:
  - `npm init -y ` for installing node modules
  - `npm i -D typescript` for installing typescript
  - Initializing TypeScript Compiler `tsc --init` if TS is insall Globally **OR** `npx tsc --init` if it is install project-wise.
  - After initiallizing it will give **tsconfig.json** file.
  - In **tsconfig.json** file:
    - `"rootDir": "./src"` - the source file.
    - `"outDir":"./src"` - the distribution file.
  - Compiling the code : **npx tsc**.
    - It gives **sourceMappingURL** in **index.d.ts**, **index.js.map** and **index.d.ts.map** in `dist`.
  - We can execute the code using **node .\dist\index.js**, OR
  - In **package.json** in scripts we can add in **"start":node .\dist\index.js** and **"dev": "npx tsc"**

---

### Video 4: Type Annotations and Inference in TypeScript

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

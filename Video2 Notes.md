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

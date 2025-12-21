## Video 3: How to setup TypeScript

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
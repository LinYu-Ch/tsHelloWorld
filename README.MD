# TypeScript Project: tsHelloWorld

## Summary
This Activity is meant to be a small exploration of the typescript features before utilizing it in a full project.

## Focus
The main testing goals and features I hope to develop are:
    - Learning what makes Typescript more appealing than plain Javascript
    - Understanding of the Typescript fundamentals
    - Gaining experience with setting up Typescript projects
    - Explore some of the more advanced features that Typescript provides

## Installation
1. Install [Node.js](https://nodejs.org/) (which includes `npm`).
2. Install TypeScript globally by running:
    ```bash
    npm install -g typescript
    ```

### 1. Compile the TypeScript Files
Use the TypeScript compiler (`tsc`) to compile the `.ts` files into JavaScript:
```bash
tsc advanced.ts
tsc fundamentals.ts
tsc twofer.ts
tsc resistor-values.ts
tsc resistor-values-two.ts
```

This will generate `advanced.js` and `fundamentals.js` in the same directory.

### 2. Run the Compiled JavaScript Files
Use Node.js to execute the compiled JavaScript files:
```bash
node advanced.js
node fundamentals.js
node twofer.ts
node resistor-values.ts
node resistor-values-two.ts
```

## Notes
- Ensure you are in the project directory before running the commands.
- If you encounter any issues, verify that TypeScript is installed correctly by running:
  ```bash
  tsc --version
  ```
- You can also use a TypeScript configuration file (`tsconfig.json`) for more advanced setups.

## GPT AI usage Disclaimer
While the main content of this repository is written by myself, and the objectives are to be fulfilled without AI assistance, the scaffolding and high level research for this project were done with the assistance of an AI assitant.
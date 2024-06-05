# React Component Library

## Step 1

- Create a component inside a folder like `lib/Modal`.
- Inside `lib`, create an index.js file that import and export all the components, in out example it is `Modal.jsx`.

## Step 2

- Copy the lib file into a root folder like `dist`, you can create a script to copy the files automatically.

## Step 3

- Inside `package.json` file in the root folder, and add the following lines:

```json
{
  "name": "react-component-library", // the name of your library, be sure it is unique
  "private": false, //change to false if you want to publish it
  "version": "1.0.0", //change to the version of the library on every update to publish
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "files": ["dist"],
  "peerDependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

## Step 4

- Create an account on [https://www.npmjs.com/](https://www.npmjs.com/).
- Run:

```bash
npm login
```

- Enter your credentials.

- Run:

```bash
npm publish
```

- You will receive an update on your npmjs profile and on your email.

## Step 5

- You can now use the library in any project by running:

```bash
npm install react-component-library
```

- You can, also, find the files inside `node_modules` folder.

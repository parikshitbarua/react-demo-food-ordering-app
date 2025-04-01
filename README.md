# Restaurants App - A React Project

This project is a simple React app to browse cool restaurants, built without a scaffold.

## Steps to Create the Skeleton of the React Project

### 1. Initialize the Project
Run the following command to create a `package.json` file:

```bash
npm init -y
```

### 2. Install Dependencies
Install the necessary dependencies for the project:

```bash
npm install parcel react react-dom
```

### 3. Create `index.html`
In the root of your project, create an `index.html` file with the following content:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cool Restaurants App</title>
    <link rel="stylesheet" href="./index.css">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./App.js"></script>
  </body>
</html>
```

### 4. Create `index.css`
Create an `index.css` file in the root of your project. You can add your custom styles here.

### 5. Create `App.js`
Create an `App.js` file in the root of your project with the following content:

```javascript
import React from "react";
import ReactDOM from "react-dom/client";

const AppLayout = () => {
  return (
    <div className="app">
      Hello React!
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
```

### 6. Add Scripts to `package.json`
Update your `package.json` file to include the following scripts:

```json
"scripts": {
  "start": "parcel index.html",
  "build": "parcel build index.html"
}
```

### 7. Start the Development Server
Now you can start the dev server by running:

```bash
npm start
```
### 8. Build your project
Build your project using Parcel

```bash
npm run build
```

The development server will now be running and you can view your app in the browser.

---

Happy coding! Enjoy building your React app to browse cool restaurants! 🍽️
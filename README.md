## React Theme Toggle App using Context API
This project demonstrates how to use React Context API to manage global state and avoid prop drilling, using a simple Light/Dark Theme Toggle example.

# 🚀 Project Overview
In this application:
- The theme (light / dark) is stored globally using Context API
- Multiple components (Navbar and Card) access the same theme
- Theme can be toggled from one component and reflected everywhere
- No props are passed through intermediate components

# 🧠 Why Context API?
In a normal React app, passing data through many nested components causes prop drilling.
Example problem:
App → Dashboard → RightComponent → Card
Only Card needs the data, but every parent has to pass it.
👉 Context API solves this by storing data in a global place so any component can access it directly.

# 🧱 Component Structure
src/
 ┣ context/
 ┃ ┗ ThemeContext.jsx
 ┣ components/
 ┃ ┣ Navbar.jsx
 ┃ ┗ Card.jsx
 ┣ App.jsx
 ┣ main.jsx

#  🛠 Technologies Used
React
React Hooks (useState, useContext)
Context API
Vite 

# Step-by-Step Implementation
1️⃣ Create Context
📁 context/ThemeContext.jsx
```Javascript
import { createContext } from "react";
export const ThemeContext = createContext();
```
This creates a global container where shared data will live.

2️⃣ Create Context Provider
The Provider stores the global state and makes it available to all child components.
```javascript
import { createContext, useState } from "react";
export const ThemeContext = createContext();
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```
- theme is global state
- setTheme updates the state
- children allows nested components to render

3️⃣ Wrap the App with Provider

📁 App.jsx
```javascript
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Card />
    </ThemeProvider>
  );
}
export default App;
```
- This ensures all components inside <ThemeProvider> can access the theme.

4️⃣ Consume Context in Navbar (Toggle Theme)
📁 components/Navbar.jsx
```javascript
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <nav>
      <p>Current Theme: {theme}</p>
      <button
        onClick={() =>
          setTheme(theme === "light" ? "dark" : "light")
        }
      >
        Toggle Theme
      </button>
    </nav>
  );
}

export default Navbar
```
- reads global theme
- updates global theme
- no props required

5️⃣ Consume Context in Card (Read Theme)

📁 components/Card.jsx
```javascript
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Card() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`card ${theme}`}>
      <h2>Card using {theme} theme</h2>
    </div>
  );
}

export default Card;
```
- Card automatically re-renders when the theme changes.

# 🎯 When to Use Context API
Use Context API when:
- data is needed by many components
- data is global (theme, auth, language, cart)
- prop drilling becomes messy

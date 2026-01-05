import { useContext ,useState } from "react"
import { ThemeContext } from "../context/ThemeContext"
import React from 'react'

function Navbar() {
    const { theme, setTheme } = useContext(ThemeContext);
    
  return (
   <nav className={`nav ${theme}`}>
    <p>Current Theme  {theme}</p>
    <button onClick={()=>setTheme(theme==="light" ? "dark" : "light")}>ToggleTheme</button>
   </nav>
  )
}

export default Navbar

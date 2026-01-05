import Card from "./Components/Card"
import Navbar from "./Components/Navbar"
import { ThemeProvider } from "./context/ThemeContext"


function App() {
 

  return (
    // <><h1>App is rendering</h1></>
  <ThemeProvider>
    <Navbar />
   <Card />
  </ThemeProvider>
  )
}

export default App

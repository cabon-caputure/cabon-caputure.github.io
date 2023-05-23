import Navbar from "./Navbar"
import './App.css'
import HomePage from "./pages/HomePage"
import { FC } from "react"

function App() {
  let Component:FC = HomePage

  switch(window.location.pathname) {

    case "/":
      Component = HomePage;
      break;
    default:
      Component = HomePage;
      break;

  }

  return (
    <>
      <Component />
      <Navbar />
    </>
  )
}

export default App

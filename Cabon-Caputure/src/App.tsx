import Navbar from "./Navbar"
import './App.css'
import HomePage from "./pages/HomePage"
import Animation from "./pages/Animation"
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/animation" element={<Animation />} />
      </Routes>
      <Navbar />
    </>
  )
}

export default App

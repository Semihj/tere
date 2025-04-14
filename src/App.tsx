import About from "./components/About"
import Apply from "./components/Apply"
import Benefits from "./components/Benefits"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"

function App() {

  return (
   <div className="h-full flex flex-col bg-[#F9F9F9] ">
      <Navbar/>
      <Home/>
      <Apply/>
      <About/>
      <Benefits/>
      <Footer/>
   </div>
  )
}

export default App

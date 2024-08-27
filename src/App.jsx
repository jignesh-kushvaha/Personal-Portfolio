import { ToastContainer } from 'react-toastify'
import './App.css'
import AboutMe from './Components/AboutMe'
import ContactMe from './Components/ContactMe'
import Heading from './Components/Heading'
import Hero from './Components/Hero'

function App() {
  return (
      <div>
        <Heading/>
        <Hero/>
        <AboutMe/>
        <ContactMe/>
        <ToastContainer theme='dark' />
      </div>
  )
}

export default App

import { ToastContainer } from "react-toastify";
import "./App.css";
import AboutMe from "./Components/AboutMe";
import ContactMe from "./Components/ContactMe";
import Heading from "./Components/Heading";
import Hero from "./Components/Hero";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";

function App() {
  return (
      <div>
        <Heading/>
        <Hero/>
        <Projects/>
        <AboutMe/>
        <ContactMe/>
        {/* <Footer/> */}
        <ToastContainer theme='dark' />
      </div>
  )
}

export default App;

import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from'./components/About';
import Projects from'./components/Projects';
import Client from './components/Client';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
// Add this before creating your app

const App = () => {
  return(
  <div className="bg-black/85">
    <Navbar></Navbar>
    <Hero />
    <About/>
    <Projects/>
    <Client/>
    <Experience/>
    <Contact/>
    <Footer/>
  </div>
  );
};

export default App;

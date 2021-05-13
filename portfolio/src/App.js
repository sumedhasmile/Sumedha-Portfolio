import Navbar from './components/Navbar';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from"./components/Header";
import Particles from 'react-particles-js';
import About from './components/AboutMe';
import Fade from 'react-reveal';
import Project from './components/Project';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ParticleOptions from '../src/ParticleOptions';
function App() {
  return (
    <>
    <Navbar/>
    <Particles
    className="particles particles-box"
    params={ParticleOptions}/>
    
     
     <Header/>
    <Fade left>
      <About/>
    </Fade>
    <Fade top>
      <Skills/>
    </Fade>
    <Project/>
   
        <Fade duration={500}>
         <hr/>
          <Contact />
          <Footer /> 
        </Fade>
        
   </>
  );
}

export default App;


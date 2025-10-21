import About from './components/About';
import BioHighlight from './components/BioHighlight';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Process from './components/Process';
import Publications from './components/Publications';
import Resume from './components/Resume';
import Services from './components/Services';
import Specialties from './components/Specialties';
import './styles/main.css';

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <BioHighlight />
      <Gallery />
      <Services />
      <Specialties />
      <About />
      <Process />
      <Experience />
      <Publications />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

export default App;



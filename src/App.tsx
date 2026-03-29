import './styles/globals.css';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Explore } from './components/Explore';
import { Footer } from './components/Footer';
import Hero from './components/Hero';
import { Navbar } from './components/Navbar';
import { ParticleBackground } from './components/ParticleBackground';
import { Projects } from './components/Projects';

function App() {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Explore />
      </main>
      <Footer />
    </>
  );
}

export default App;

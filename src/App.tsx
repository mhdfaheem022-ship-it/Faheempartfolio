import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedWork from './components/FeaturedWork';
import Services from './components/Services';
import WhyChooseMe from './components/WhyChooseMe';
import About from './components/About';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedWork />
        <Services />
        <WhyChooseMe />
        <About />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

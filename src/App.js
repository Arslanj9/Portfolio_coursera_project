import './App.css';
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header />
      <LandingSection  />
      <Projects id="portfolio" />
      <Contact id="contact" />
      <Footer />
    </>
  );
}


export default App;

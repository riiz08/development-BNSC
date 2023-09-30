import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Services from "../sections/Services/Services";
import About from "../sections/About/About";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact/>
      <Footer />
    </>
  );
};

export default Home;

import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Services from "../sections/Services/Services";
import About from "../sections/About/About";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop"
import {useState, useEffect} from "react"

const Home = () => {
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 400) {
        setScrollTop(false);
      } else {
        
      setScrollTop(true);
      }
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      {scrollTop ? <ScrollTop/> : ""}
      <Footer />
    </>
  );
};

export default Home;

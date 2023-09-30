import footerL from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <aside>
        <img
          src={footerL}
          alt="pt bintang nusantara sejahtera corp"
          className="w-20"
        />
        <p className="font-semibold">
          PT. Bintang Nusantara Sejahtera Corp
          <br />
        </p>
      </aside>
      <nav>
        <header className="footer-title">Services</header>
        <a className="link link-hover">Outsourcing</a>
        <a className="link link-hover">E-Channel Loan</a>
        <a className="link link-hover">Jasa Servis AC</a>
      </nav>
      <nav>
        <header className="footer-title">COMPANY</header>
        <a href="#about" className="link link-hover">
          About us
        </a>
        <a href="#contact" className="link link-hover">
          Contact Us
        </a>
        <a href="#services" className="link link-hover">
          Our Services
        </a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a
          href="https://www.privacypolicyonline.com/live.php?token=IV93HaCPw1udZXkJ142vrMUY1GswujD4"
          className="link link-hover"
        >
          Terms of use
        </a>
        <a
          href="https://www.privacypolicyonline.com/live.php?token=3wbtqyNODd4mDhyskG9UeoBFxscAs9eR"
          className="link link-hover"
        >
          Privacy policy
        </a>
      </nav>
    </footer>
  );
};

export default Footer;

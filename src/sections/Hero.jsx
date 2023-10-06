import brand from "../assets/outsourcing.png";
import heroBg from "../assets/heroBg.svg";

const Hero = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
        className="hero min-h-screen w-full overflow-hidden"
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={brand}
            className="max-w-xs md:max-w-md mt-16 md:mt-0 rounded-lg"
          />
          <div className="1/2">
            <h1 className="text-4xl font-bold">
              Inspirasi Kesuksesan Bersama{" "}
              <span className="text-blue-700">
                PT. Cakra Bima Nusantara
              </span>
            </h1>
            <p className="py-6 text-white max-w-xs lg:max-w-lg">
              Solusi Melampaui Harapan : Alih Daya Pekerja, Corporate Loan, dan
              Servis AC untuk Transformasi Bisnis Anda
            </p>
            <a href="#about">
              <button
                className="bg-blue-600 hover:bg-blue-400 text-white btn-sm font-semibold
              rounded-md"
              >
                Tentang Kami
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

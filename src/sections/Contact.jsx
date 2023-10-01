import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      offset: 300,
    });
  }, []);

  return (
    <section
      id="contact"
      className="my-10 overflow-hidden"
      data-aos="fade-up-left"
      data-aos-once="true"
    >
      <h1 className="lg:text-5xl text-center text-4xl font-bold">
        Hubungi Kami:{" "}
        <span className="text-blue-700">
          Jalin Komunikasi, Wujudkan Kolaborasi!
        </span>
      </h1>
      <p className="py-4 text-gray-500 text-center max-w-lg mx-auto">
        Temukan Jalur Komunikasi Terbaik dengan Kami: Hubungi PT. Bintang
        Nusantara Sejahtera Corp untuk Mengatasi Kebutuhan Bisnis Anda.
      </p>
      <div
        className="my-6 flex justify-center items-center flex-wrap
      md:flex-nowrap gap-4 px-10"
      >
        <div className="card mx-auto mt-6 w-80 bg-base-100 px-6 h-60 rounded-xl shadow-xl">
          <figure className="px-10 pt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 text-blue-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title mt-[-20px] mb-2">Phone</h2>
            <p className="mb-2 text-gray-500 text-sm">(021) 28681546</p>
            <p className="mb-2 text-gray-500 text-sm">0821-7088-8810</p>
          </div>
        </div>

        <div className="card h-60 mx-auto mt-6 w-80 bg-base-100 px-6 rounded-xl shadow-xl">
          <figure className="px-10 pt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 text-blue-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
              />
            </svg>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title mt-[-20px] mb-2">Email</h2>
            <p className="mb-2 text-gray-500 text-sm">
              admin@bintangnusantarasejahtera.com
            </p>
          </div>
        </div>

        <div className="card h-60 mx-auto mt-6 w-80 bg-base-100 px-6 rounded-xl shadow-xl">
          <figure className="px-10 pt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 text-blue-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title mt-[-20px] mb-2">Location</h2>
            <p className="mb-2 text-gray-500 text-sm">
              PONDOK SUKAHATI INDAH BLOK C NO.31 CIBINONG – BOGOR
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

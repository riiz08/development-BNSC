import Card from "./Card";
import visiImg from "../../assets/visi.png";
import misiImg from "../../assets/misi.png";
import strukturImg from "../../assets/struktur.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      offset: 300,
    });
  }, []);
  return (
    <section id="about" className="overflow-hidden my-10">
      <div
        className="flex justify-center items-center px-6 py-4 flex-col lg:flex-row
      flex-wrap "
      >
        <h1
          className="lg:text-5xl text-center mx-auto lg:text-left lg:mx-0
        text-4xl lg:max-w-md font-bold"
          data-aos="fade-rigth"
          data-aos-once="true"
        >
          Membangun Masa Depan Bersama{" "}
          <span className="text-blue-700">
            PT. Bintang Nusantara Sejahtera Corp
          </span>
        </h1>
        <p
          className="py-4 lg:py-0 text-center text-gray-500 lg:text-left w-full
        lg:leading-relaxed lg:w-1/2"
          data-aos="fade-left"
          data-aos-once="true"
        >
          Perusahaan jasa terpercaya: Alih Daya Pekerja, Channeling Corporate
          Loan, dan Jasa Servis AC berkualitas. Dilengkapi sertifikasi BNSP dan
          izin operasional DISNAKER untuk kepastian hukum. Kami memahami
          kebutuhan perbaikan terus-menerus dalam era bisnis, fokus pada
          pengembangan kompetensi inti untuk produktivitas dan efisiensi. PT.
          Bintang Nusantara Sejahtera Corp, solusi terbaik untuk organisasi yang
          ingin fokus pada kompetensi inti dengan sistem manajemen kontrol
          terukur dan tenaga ber-ASK unggul.
        </p>
      </div>

      <div
        className="flex justify-center items-center flex-wrap md:flex-nowrap
      gap-4 py-10 px-4 mb-8"
        data-aos="fade-down"
        data-aos-once="true"
      >
        <div
          className="card mx-auto lg:w-1/2 bg-base-100 transition-all
        hover:bg-base-300 hover:-translate-y-8 h-96 rounded-xl shadow-2xl"
        >
          <figure className="px-10 pt-10">
            <img src={visiImg} alt="visi bnsc" className="w-56" />
          </figure>
          <div className="card-body items-center">
            <h2 className="card-title uppercase mt-[-20px] mb-2">Visi</h2>
            <p className="mb-2">
              Menjadi perusahaan nasional yang terpecaya dan dipilih untuk
              memberikan solusi dalam bidang jasa alih daya pekerja (
              outsourhing ) serta E – Channel Corporate loan
            </p>
          </div>
        </div>
        <div
          className="card lg:w-1/2 mx-auto  bg-base-100 transition-all
        hover:bg-base-300 hover:-translate-y-8 h-max md:h-96 rounded-xl
        shadow-2xl"
        >
          <figure className="px-10 pt-10">
            <img src={misiImg} alt="misi bnsc" className="w-56" />
          </figure>
          <div className="card-body items-center">
            <h2 className="card-title uppercase text-center mt-[-20px] mb-2">
              Misi
            </h2>
            <ul className="mb-2">
              <li className="list-disc my-1">
                Memberikan kepuasan bagi pengguna jasa dalam hal effisiensi dan
                produktivitas
              </li>
              <li className="list-disc my-1">
                Menjadi tempat pilihan bagi karyawan untuk berkarir dengan
                menjadikan karyawan sebagai sebuah aset.
              </li>
              <li className="list-disc my-1">
                Selalu mengembangkan sistem manajemen kontrol yang terintegrasi
                untuk mengevaluasi kinerja
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div data-aos="fade-down-left"
          data-aos-once="true">
        <h3 className="font-bold text-3xl text-center">Struktur Organisasi</h3>
        <img
          src={strukturImg}
          alt="struktur organisasi bnsc"
          className="mx-auto w-[90%] shadow-xl my-6 rounded-xl"
        />
      </div>
    </section>
  );
};

export default About;

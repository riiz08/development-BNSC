import Card from "./Card";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      offset: 300,
    });
  }, []);
  return (
    <section id="services" className="py-16 px-4">
      <div className="w-full flex justify-center items-center flex-col">
        <h1
          className="text-5xl text-center font-bold"
          data-aos="fade-down"
          data-aos-once="true"
        >
          Layanan Kami
        </h1>
        <p
          className="py-4 text-gray-500 text-center max-w-lg"
          data-aos="fade-down"
          data-aos-once="true"
        >
          Jelajahi Ragam Layanan Berkualitas dari PT. Bintang Nusantara
          Sejahtera Corp.
        </p>
      </div>
      <div
        className="flex justify-center items-center flex-wrap"
        data-aos="fade-up"
        data-aos-once="true"
      >
        <Card
          svgPath="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0
        004.121-.952 4.125 4.125 0 00-7.533-2.493M15
        19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0
        018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0
        0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75
        0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
          title="Outsourcing"
          desc="PT. Cakra Bima Nusantara membantu Anda
          fokus pada inti bisnis dengan menyediakan solusi alih daya pekerja. Kami memberikan keahlian tenaga kerja
          yang kompeten untuk mendukung efisiensi operasional dan pertumbuhan
          yang berkelanjutan."
        />
        <Card
          svgPath="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
          title="Channeling Corporate Loan"
          desc="Solusi finansial terpercaya dari PT. Cakra Bima Nusantara untuk memudahkan akses perusahaan Anda ke pinjaman korporat. Dengan pendekatan yang terukur, kami mendukung pertumbuhan bisnis Anda melalui layanan yang efisien dan andal."
        />
        <Card
          svgPath="M11.42 15.17L17.25 21A2.652 2.652 0 0021
        17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626
        1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0
        11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5
        4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0
        01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071
        2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25
        3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615
        8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
          title="Jasa
        Servis AC"
          desc="Dapatkan kenyamanan optimal dengan layanan perawatan dan perbaikan AC berkualitas dari PT. Cakra Bima Nusantara. Tim ahli kami memberikan solusi cepat dan handal untuk memastikan udara sejuk dan nyaman di lingkungan Anda."
        />
      </div>
    </section>
  );
};

export default Services;

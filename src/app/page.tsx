import Image from "next/image";
import Hero from "./components/layouts/Hero/Hero";
import Benefit from "./components/layouts/Benefit/Benefit";
import Favorit from "./components/layouts/Favorit/Favorit";
import Rekomendasi from "./components/layouts/Rekomendasi/Rekomendasi";
import Testimonial from "./components/layouts/Testimoni/Testimonial";
import InfoDelivery from "./components/layouts/Voucher/Voucher";
export default function Home() {
  return (
    <>
      <Hero />
      <Benefit />
      <Favorit />
      <InfoDelivery />
      <Rekomendasi />
      <Testimonial />
    </>
  );
}

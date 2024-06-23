import React from "react";
import Image from "next/image";
import Delivery from "../../../../../public/img/Beep Beep - Motorcycle Delivery.png";

export default function InfoDelivery() {
  return (
    <section className="relative w-full max-w-[1240px] h-auto lg:h-[216px] mx-auto flex flex-col lg:flex-row items-center justify-between bg-primary text-white rounded-lg p-5 my-5 overflow-hidden">
      <div className="absolute -top-10 -left-10 w-20 h-20 lg:w-32 lg:h-32 bg-purple-700 rounded-full opacity-70"></div>
      <div className="absolute top-20 -right-5 w-12 h-12 lg:w-20 lg:h-20 bg-purple-500 rounded-full opacity-70"></div>
      <div className="absolute top-32 left-10 w-6 h-6 lg:w-10 lg:h-10 bg-purple-300 rounded-full opacity-70"></div>

      <div className="relative w-full lg:max-w-[60%] mb-5 lg:mb-0">
        <h2 className="text-3xl lg:text-2xl mb-2 font-bold text-secondary">
          Makan Nyaman Tanpa Keluar Rumah
        </h2>
        <h4 className="text-base lg:text-lg mb-2 font-semibold">
          Sajian Berkualitas, Pengantaran Andal
        </h4>
        <p className="text-sm lg:text-base">
          Tidak perlu antri atau keluar rumah, cukup pesan melalui website kami
          dan nikmati makanan favorit Anda dalam sekejap. Dari sarapan hingga
          makan malam, kami siap memenuhi semua kebutuhan kuliner Anda.
        </p>
      </div>
      <div className="relative w-full lg:max-w-[35%]">
        <Image
          src={Delivery}
          alt="Delivery Image"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </section>
  );
}

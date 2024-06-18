import React from "react";
import Image from "next/image";
import Delivery from "../../../../../public/img/Beep Beep - Motorcycle Delivery.png";
import { myFontIntegral } from "@/app/fonts";

const PromoCard = () => {
  return (
    <div className="my-10 mx-7 md:m-14 lg:m-[150px]">
      <div className="bg-primary/40 text-white text-center py-5 px-10 lg:py-10 lg:px-20 rounded-lg shadow-md relative">
        <div className="md:flex md:justify-between items-center">
          <div className="text-primary">
            <h3
              className={`text-2xl font-semibold mb-4 ${myFontIntegral.className}`}
            >
              Pengiriman Gratis untuk Semua Makanan
            </h3>
            <p className="text-lg mb-6">
              Nikmati pengiriman gratis untuk semua pesanan makanan Anda tanpa
              batas jumlah dan jarak!
            </p>
          </div>
          <Image src={Delivery} alt="" />
        </div>
        <div className="w-16 h-16 bg-baseWhite rounded-full absolute top-1/2 transform -translate-y-1/2 left-0 -ml-6"></div>
        <div className="w-16 h-16 bg-baseWhite rounded-full absolute top-1/2 transform -translate-y-1/2 right-0 -mr-6"></div>
      </div>
    </div>
  );
};

export default PromoCard;

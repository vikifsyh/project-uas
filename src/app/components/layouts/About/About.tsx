import Image from "next/image";
import React from "react";
import HeroAbout from "@/public/img/umpbeyondfuture.png";
import Logo from "@/public/img/ump-culinary.png";
import Link from "next/link";
import FastDelivery from "@/public/img/fastdelivery.png";
import Professional from "@/public/img/professional.png";
import Guaranteed from "@/public/img/guaranteed.png";
import Affordable from "@/public/img/affordable.png";
import MotorCycle from "@/public/img/fast.png";
import UMP from "@/public/img/ump.png";
import LogoUMP from "@/public/img/LogoUMP.png";
import Gedung from "@/public/img/gedung.png";

const adventage = [
  {
    id: 1,
    image: FastDelivery,
    title: "Fast Delivery",
  },
  {
    id: 2,
    image: Professional,
    title: "Professional",
  },
  {
    id: 3,
    image: Guaranteed,
    title: "Guaranteed",
  },
  {
    id: 4,
    image: Affordable,
    title: "Affordable",
  },
];

export default function About() {
  return (
    <div className="w-full">
      <Image src={HeroAbout} alt="Hero" width={2000} height={1000} />
      <div className="lg:mx-[100px] m-5 lg:my-10 lg:flex lg:justify-between mt-14 gap-20">
        <div>
          <div className="flex items-center">
            <Image src={Logo} alt="ump-culinary" />
            <h1 className="text-xl md:text-3xl lg:text-5xl text-primary font-bold">
              Enjoy your food now in UMP{" "}
              <span className="text-secondary">Culinary</span>
            </h1>
          </div>
          <p className="text-base lg:text-lg mt-10 text-baseBlack">
            UMP Culinary adalah sebuah platform digital yang menyediakan sistem
            informasi lengkap untuk pengantaran dan pembelian produk-produk UMKM
            di sekitar Universitas Muhammadiyah Purwokerto. Melalui website ini,
            akses dan promosi bagi UMKM lokal dipermudah, sementara konsumen
            dapat menikmati pengalaman berbelanja yang transparan dan
            interaktif.{" "}
          </p>
          <Link href={"/makanan"}>
            <button className="bg-primary p-2 md:p-4 text-white lg:px-6 lg:py-4 rounded-lg lg:rounded-2xl mt-6 hover:bg-primary/50 w-full sm:w-auto">
              Jelajahi Makanan
            </button>
          </Link>
          <div className="mt-8">
            <Image
              src={MotorCycle}
              alt="Fast Delivery"
              width={1000}
              height={1000}
            />
          </div>
          <div className="mt-10 lg:flex lg:gap-6 gap-2 mb-6 grid grid-cols-2">
            {adventage.map((adventage) => (
              <div key={adventage.id} className="w-[150px] h-[210px] relative">
                <div className="text-primary text-xl w-[150px] h-[139px] left-0 top-[71px] absolute bg-secondary/50 bg-opacity-30 rounded-tl-[48px] rounded-tr-[48px] rounded-bl-[20px] rounded-br-[20px]">
                  <p className="text-primary font-semibold text-lg absolute inset-0 flex items-center justify-center">
                    {adventage.title}
                  </p>
                </div>
                <Image
                  className="w-32 h-32 left-[11px] top-0 absolute"
                  src={adventage.image}
                  alt={adventage.title}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="justify-center mt-10 md:mt-0">
          <div className="flex gap-3 items-center justify-end">
            <Image
              src={LogoUMP}
              alt="Logo"
              width={1000}
              height={1000}
              style={{ height: 200, width: 100 }}
            />
            <Image
              src={Gedung}
              alt="Gedung"
              width={1000}
              height={1000}
              style={{ height: 240, width: 240 }}
            />
          </div>
          <div className="flex justify-end">
            <Image
              src={UMP}
              alt="UMP"
              width={500}
              height={500}
              className="mt-4"
            />
          </div>

          <p className="md:text-lg text-base -mt-20 text-justify ml-4 text-baseBlack">
            UMP Culinary adalah sebuah platform digital yang menyediakan sistem
            informasi lengkap untuk pengantaran dan pembelian produk-produk UMKM
            di sekitar Universitas Muhammadiyah Purwokerto. Melalui website ini,
            akses dan promosi bagi UMKM lokal dipermudah, sementara konsumen
            dapat menikmati pengalaman berbelanja yang transparan dan
            interaktif.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

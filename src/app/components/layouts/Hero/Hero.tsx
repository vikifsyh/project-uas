import Image from "next/image";
import React from "react";
import HeroImage from "../../../../../public/img/hero2c.png";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="my-5 mx-5 md:m-10 lg:m-[100px] md:flex md:justify-between items-center">
      <div className="md:max-w-md lg:max-w-3xl">
        <h2 className="font-bold text-base lg:text-[32px] text-baseBlack">
          Selamat Datang di
        </h2>
        <h1 className="text-[40px] lg:text-8xl text-primary font-bold">
          UMP Culinary
        </h1>
        <p className="font-medium text-base md:text-lg text-greyHero mt-2 lg:mt-4">
          Temukan keajaiban lokal di ujung jari Anda! Jelajahi ragam produk
          unggulan dari para pedagang UMKM kami, spesial untuk Anda, mahasiswa
          tercinta. Dukung komunitas lokal dan temukan produk berkualitas di
          sini. Mari mulai petualangan belanja Anda!
        </p>
        <Link href={"/kuliner"}>
          <button className="bg-primary p-2 md:p-4 text-white lg:px-6 lg:py-4 rounded-lg lg:rounded-2xl mt-6 hover:bg-primary/50 w-full sm:w-auto">
            Jelajahi Makanan
          </button>
        </Link>
      </div>
      <div className="max-w-md">
        <Image alt="Hero" src={HeroImage} />
      </div>
    </div>
  );
}

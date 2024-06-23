import React from "react";
import Icon from "../../atom/Icon";

const benefit = [
  {
    id: 1,
    title: "Meningkatkan Ekonomi Lokal",
    desc: "Mendukung UMKM lokal menciptakan lingkaran ekonomi positif dengan meningkatkan pendapatan dan kesejahteraan komunitas setempat.",
    icon: <Icon name="grafik" />,
  },
  {
    id: 2,
    title: "Mendorong Inovasi",
    desc: "Dukungan terhadap UMKM lokal mendorong inovasi dan kreativitas dalam bisnis, mempercepat perkembangan produk dan layanan baru yang inovatif.",
    icon: <Icon name="inovation" />,
  },
  {
    id: 3,
    title: "Menciptakan Lapangan Kerja",
    desc: "UMKM, penyedia lapangan kerja terbesar, tumbuh dengan dukungan kita, menciptakan lebih banyak kesempatan kerja lokal.",
    icon: <Icon name="idea" />,
  },
];

export default function Benefit() {
  return (
    <div className=" bg-secondary/15">
      <div className="p-5 lg:px-[100px] lg:py-[72px] ">
        <h1 className="text-baseBlack text-lg lg:text-2xl font-semibold text-center">
          Keuntungan Membantu UMKM Lokal
        </h1>
        <div className="md:flex md:justify-between">
          {benefit.map((item) => (
            <div className="text-center mt-9" key={item.id}>
              <div className="flex justify-center">{item.icon}</div>
              <h1 className="text-baseBlack font-semibold md:text-xl mt-5">
                {item.title}
              </h1>
              <p className="text-sm md:text-base text-baseBlack mt-3">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

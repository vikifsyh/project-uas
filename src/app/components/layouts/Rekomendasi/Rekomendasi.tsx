import { getData } from "@/services/products";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Icon from "../../atom/Icon";

export default async function Rekomendasi() {
  const products = await getData("http://localhost:3000/api/product");

  const shuffledProducts = products.data.sort(() => 0.5 - Math.random());

  const displayedProducts = shuffledProducts.slice(0, 4);

  return (
    <div className="my-16 lg:mx-[100px] mx-5">
      <div className="text-center">
        <h1 className="font-semibold lg:text-2xl text-lg text-baseBlack">
          Rekomendasi Makanan
        </h1>
        <h2 className="text-gray-600 mt-2">
          Temukan makanan terbaik yang kami rekomendasikan untuk Anda
        </h2>
      </div>
      <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-10 mt-6 lg:mt-10 overflow-x-auto">
        {displayedProducts.length > 0 &&
          displayedProducts.map((product: any) => (
            <div
              key={product.id}
              className="min-w-[250px] md:min-w-[300px] lg:min-w-[250px] border border-borderDefault bg-white rounded-[4px] flex-shrink-0"
            >
              <Image
                className="w-full object-cover rounded-t-[4px]"
                style={{ height: 300 }}
                src={product.image}
                width={1000}
                height={1000}
                alt={product.name}
              />

              <div className="mt-3 p-2 lg:p-4">
                <h2 className="text-sm lg:text-xl text-baseBlack">
                  {product.name}
                </h2>
                <div className="flex justify-between items-center my-2">
                  <div className="flex gap-1 items-center">
                    <Image
                      alt={product.stall}
                      src={product.img}
                      width={16}
                      height={16}
                    />
                    <h3 className="text-gray-600 text-sm">{product.stall}</h3>
                  </div>
                  <div className="flex gap-1 items-center">
                    <Icon name="location" width={18} height={18} />
                    <h4 className="text-gray-600 text-sm">
                      {product.location}
                    </h4>
                  </div>
                </div>
                <p className="text-sm lg:text-xl text-primary">
                  <span className="text-[10px] md:text-sm">Rp.</span>
                  {product.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                </p>
                <Link
                  href={`https://wa.me/${product.nomor}`}
                  className="mt-2 md:mt-6 px-3 py-2 bg-primary text-baseWhite text-sm rounded-md w-full block text-center hover:scale-105"
                >
                  Pesan
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

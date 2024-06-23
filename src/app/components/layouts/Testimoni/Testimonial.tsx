"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Icon from "../../atom/Icon";
import { review } from "@/app/lib/review";

const generateStarIcons = (rating: number) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const stars = Array.from({ length: 5 }, (_, index) => {
    if (index < fullStars) {
      return <Icon key={index} name="star" />;
    } else if (hasHalfStar && index === fullStars) {
      return <Icon key={index} name="half-star" />;
    } else {
      return <Icon key={index} name="star-outline" />;
    }
  });

  return <div className="flex gap-1">{stars}</div>;
};

export default function Testimonial() {
  return (
    <div className="my-20 lg:mx-[100px] mx-5">
      <div className="text-center">
        <h1 className="font-semibold lg:text-2xl text-lg text-baseBlack">
          Testimoni Langsung dari Pengunjung
        </h1>
        <h2 className="text-gray-600 mt-2">
          Apa yang dikatakan pengunjung tentang pengalaman mereka
        </h2>
      </div>
      <Marquee className="mt-8 md:mt-10" pauseOnHover={true} gradient={true}>
        <div className="flex px-2 gap-5">
          {review.map((data) => (
            <figure
              key={data.id}
              className="max-w-md h-auto rounded-[20px] px-8 py-7 border border-slate-200"
            >
              <figcaption className="flex gap-5">
                <div className="w-14 h-14 rounded-full">
                  <Image
                    alt="profil"
                    src={data.image}
                    className="rounded-full h-full w-full object-cover"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="font-semibold text-dark">{data.name}</span>
                  <span className="text-sm text-slate-500">{data.status}</span>
                </div>
              </figcaption>
              <blockquote>
                <p className="text-gray text-base mt-6 line-clamp-2">
                  {data.comment}
                </p>

                <div className="flex gap-1 mt-5">
                  {generateStarIcons(data.rating)}
                </div>
              </blockquote>
            </figure>
          ))}
        </div>
      </Marquee>
    </div>
  );
}

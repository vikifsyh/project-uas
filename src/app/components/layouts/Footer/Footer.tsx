import React from "react";
import Link from "next/link";
import Icon from "../../atom/Icon";

const sosialMedia = [
  {
    id: 1,
    icon: <Icon name="youtube" />,
    link: "youtube.com",
  },

  {
    id: 2,
    icon: <Icon name="instagram" />,
    link: "instagram.com",
  },
  {
    id: 3,
    icon: <Icon name="facebook" />,
    link: "facebook.com",
  },
  {
    id: 4,
    icon: <Icon name="twitter" />,
    link: "twitter.com",
  },
];

export default function Footer() {
  return (
    <div className="bg-white w-full">
      <div className="py-10">
        <h1 className="text-center text-sm md:text-base font-semibold text-baseBlack">
          connect with us
        </h1>
        <div className="flex gap-4 justify-center mt-4">
          {sosialMedia.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              className="p-2 bg-baseBlack rounded-full cursor-pointer"
            >
              {item.icon}
            </Link>
          ))}
        </div>
        <p className="text-center text-xs md:text-base mt-4 font-semibold text-baseBlack">
          {" "}
          &copy; 2024 UMP Culinary. All Rights Reserved
        </p>
        <div className="flex gap-2 md:gap-4 text-baseBlack text-xs md:text-base justify-center mt-4">
          <p>support</p>
          <p>|</p>
          <p>contact us</p>
          <p>|</p>
          <p>terms</p>
          <p>|</p>
          <p>rules</p>
          <p>|</p>
          <p>privacy</p>
          <p className="hidden lg:flex">|</p>
          <p className="hidden lg:flex">
            do not sell or shar emy personal information
          </p>
        </div>
      </div>
    </div>
  );
}

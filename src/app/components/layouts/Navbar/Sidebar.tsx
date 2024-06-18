"use client";
import Image from "next/image";
import React from "react";
import Logo from "../../../../../public/img/ump-culinary.png";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="relative">
      <div className="bg-white z-10 fixed inset-y-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto antialiased transition-transform duration-200 -translate-x-full max-w-64 xl:ml-6 rounded-2xl xl:left-0 xl:translate-x-0">
        <Link
          href={"/"}
          className="px-8 py-6 m-0 text-sm whitespace-nowrap dark:text-white text-slate-700 flex items-center"
        >
          <div className="w-[50px] h-auto">
            <Image alt="ump-culinary" src={Logo} />
          </div>
          <h1 className="ml-1 text-lg font-bold transition-all duration-200 ">
            <span className="text-primary">UMP</span>{" "}
            <span className="text-secondary">CULINARY</span>
          </h1>
        </Link>

        <hr className="h-px mt-0 " />

        <div className="my-5 items-center block w-auto max-h-screen overflow-auto">
          <ul className="mx-2">
            <li
              className={`mt-0.5 px-5 py-3 w-full rounded-lg cursor-pointer ${
                pathname === "/dashboard" ? "bg-primary/10" : ""
              }`}
            >
              <p className="font-semibold">Kelola Makanan</p>
            </li>
          </ul>
        </div>

        <div className="absolute bottom-0 left-0 right-0 mx-4 mb-4">
          <button
            onClick={() => signOut()}
            className="w-full px-8 py-2 font-bold text-center text-white align-middle transition-all ease-in bg-red-500 border-0 rounded-lg shadow-md select-none hover:shadow-xs hover:-translate-y-px"
          >
            Keluar
          </button>
        </div>
      </div>
    </div>
  );
}

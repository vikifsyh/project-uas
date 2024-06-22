"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "../../../../../public/img/ump-culinary.png";
import { myFontIntegral } from "@/app/fonts";
import Icon from "../../atom/Icon";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const pathname = usePathname();
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { data: session, status }: { data: any; status: string } = useSession();

  useEffect(() => {
    if (isMenuOpen || isSearchVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const closeMenuOnNavigation = () => {
      setMenuOpen(false);
    };

    document.addEventListener(
      "next_router:routeChangeStart",
      closeMenuOnNavigation
    );

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener(
        "next_router:routeChangeStart",
        closeMenuOnNavigation
      );
    };
  }, [isMenuOpen, isSearchVisible]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <nav
      className={`sticky bg-blur w-full px-5 py-4 lg:px-[100px] lg:py-5 flex justify-between items-center border-b border-[#CACACA] top-0 z-50`}
    >
      <Link href={"/"} className="hidden lg:flex items-center">
        <div className="w-[50px] h-auto">
          <Image width={50} height={50} alt="ump-culinary" src={Logo} />
        </div>
      </Link>

      <div className="lg:hidden flex justify-between items-center w-full">
        <div
          className="lg:hidden cursor pointer"
          onClick={() => setMenuOpen(true)}
        >
          <Icon name="hamburger" />
        </div>
        <Link href={"/"} className="flex items-center">
          <div className="w-[50px] h-auto">
            <Image width={50} height={50} alt="ump-culinary" src={Logo} />
          </div>
        </Link>
        <div
          className="cursor-pointer"
          onClick={() => {
            setSearchVisible(true);
          }}
        >
          <Icon name="search" />
        </div>

        {isMenuOpen && (
          <>
            <div
              className="bg-baseBlack/20 fixed h-screen inset-0 z-10"
              onClick={() => setMenuOpen(false)}
            ></div>
            <aside className="fixed inset-0 w-2/3 h-screen bg-white z-50">
              <div className="p-5">
                <div className="w-[50px] h-auto">
                  <Link className="flex items-center" href={"/"}>
                    <Image
                      alt="ump-culinary"
                      src={Logo}
                      width={50}
                      height={50}
                    />
                    <h1
                      className={`flex gap-1 ${myFontIntegral.className} text-xl`}
                    >
                      <span className="text-primary">UMP</span>
                      <span className="text-secondary">CULINARY</span>
                    </h1>
                  </Link>
                </div>
                <div className="mt-5 flex flex-col">
                  <div className="px-10 py-3 hover:bg-primary/10 rounded-md cursor-pointer">
                    <Link
                      className="text-lg -ml-5 text-baseBlack  font-semibold"
                      href={"/"}
                      onClick={closeMenu}
                    >
                      Beranda
                    </Link>
                  </div>
                  <div className="px-10 py-3 hover:bg-primary/10 rounded-md cursor-pointer">
                    <Link
                      className="text-lg -ml-5 text-baseBlack  font-semibold"
                      href={"/kuliner"}
                      onClick={closeMenu}
                    >
                      Kuliner
                    </Link>
                  </div>

                  <div className="px-10 py-3 hover:bg-primary/10 rounded-md cursor-pointer">
                    <Link
                      className="text-lg -ml-5 text-baseBlack  font-semibold"
                      href={"/about"}
                      onClick={closeMenu}
                    >
                      Tentang Kami
                    </Link>
                  </div>

                  {status === "authenticated" ? (
                    <div className="relative gap-3 items-center flex mt-4 ">
                      <div className="flex items-center gap-1 ">
                        <Icon name="user" width={32} height={32} />
                        <h4
                          className="whitespace-nowrap font-medium text-base text-primary cursor-pointer"
                          onClick={toggleDropdown}
                        >
                          {session?.user?.name}
                        </h4>
                      </div>
                      {isDropdownOpen && (
                        <div className="absolute right-0 left-0 mx-auto mt-24 w-full bg-white border border-gray-200 ">
                          <button
                            onClick={() => signOut()}
                            className=" px-4 py-2 text-sm text-error hover:bg-gray-100 w-full text-left flex items-center justify-between"
                          >
                            Keluar
                            <Icon name="logout" width={24} height={24} />
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => signIn()}
                      className="ease-in duration-200 w-full block rounded-lg p-2 text-center text-white bg-primary hover:bg-primary/50 focus:outline-none focus:ring-2 focus:ring-blue focus:ring-opacity-50"
                    >
                      Masuk
                    </button>
                  )}
                </div>
              </div>
            </aside>
          </>
        )}
      </div>

      {/* desktop version menu */}
      <ul className="hidden lg:flex lg:gap-10 text-gray-400">
        <Link href={"/"}>
          <div
            className={`font-medium text-base lg:text-lg ease-in duration-200 hover:text-primary  ${
              pathname === "/" ? "text-primary" : ""
            }`}
          >
            Beranda
          </div>
        </Link>
        <Link href={"/kuliner"}>
          <div
            className={`font-medium text-base lg:text-lg ease-in duration-200 hover:text-primary  ${
              pathname === "/kuliner" ? "text-primary" : ""
            }`}
          >
            Kuliner
          </div>
        </Link>

        <Link href={"/about"}>
          <div
            className={`font-medium text-base lg:text-lg ease-in duration-200 hover:text-primary  ${
              pathname === "/about" ? "text-primary " : ""
            }`}
          >
            Tentang Kami
          </div>
        </Link>
      </ul>

      <div className="items-center gap-9 flex">
        {status === "authenticated" ? (
          <div className="relative gap-3 items-center hidden lg:flex">
            <div className="flex items-center gap-1">
              <Icon name="user" width={32} height={32} />
              <h4
                className="whitespace-nowrap font-medium text-sm lg:text-base text-primary cursor-pointer"
                onClick={toggleDropdown}
              >
                {session?.user?.name}
              </h4>
            </div>
            {isDropdownOpen && (
              <div className="absolute right-0 left-0 -ml-4 mx-auto mt-20 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <button
                  onClick={() => signOut()}
                  className=" px-4 py-2 text-sm text-error hover:bg-gray-100 w-full text-left flex items-center justify-between"
                >
                  Keluar
                  <Icon name="logout" width={24} height={24} />
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => signIn()}
            className="hidden lg:flex px-4 p-3 rounded-lg border ease-in duration-300  bg-primary hover:bg-primary/50 text-baseWhite"
          >
            Masuk
          </button>
        )}
      </div>
    </nav>
  );
}

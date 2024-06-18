"use client";
import Icon from "@/app/components/atom/Icon";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../../../../public/img/ump-culinary.png";
import { signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

const SigninForm = ({ searchParams }: any) => {
  const { push } = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const callbackUrl = searchParams.callbackUrl || "/";
  const handleLogin = async (e: any) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: e.target.email.value,
        password: e.target.password.value,
        callbackUrl: callbackUrl,
      });
      if (!res?.error) {
        e.target.reset();
        setIsLoading(false);
        push(callbackUrl);
      } else {
        setIsLoading(false);
        if (res.status === 401) {
          setError(
            "Email atau password yang dimasukkan salah. Silakan ganti password jika kamu mengalami kesulitan login."
          );
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Image alt="logo" src={Logo} width={56} height={56} />
        </div>
        <h2 className="mt-3 text-center text-3xl font-extrabold text-primary">
          Selamat Datang Kembali!
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 max-w">
          Baru di UMP Culinary?{" "}
          <Link
            href={"/register"}
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Daftar
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {error !== "" && (
            <div className="bg-errorBackground border border-error rounded-md px-3 py-2 mb-4">
              <p className="text-sm text-error ">{error}</p>
            </div>
          )}
          <form className="space-y-6" onSubmit={(e) => handleLogin(e)}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Alamat Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Masukan alamat email"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Kata sandi
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Masukan kata sandi"
                />
              </div>
            </div>

            <div className="flex items-center justify-end">
              <div className="text-sm">
                <Link
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Lupa kata sandi?
                </Link>
              </div>
            </div>

            <div>
              <button
                disabled={isLoading}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {isLoading ? "Loading..." : "Masuk"}
              </button>
            </div>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-100 text-gray-500">
                  Atau lanjutkan dengan
                </span>
              </div>
            </div>

            <div className="mt-6 ">
              <button
                type="button"
                onClick={() =>
                  signIn("google", { callbackUrl, redirect: false })
                }
                className="w-full flex items-center justify-center px-8 py-3 border bg-gray-200 rounded-md shadow-sm text-sm font-medium text-gray-700  hover:bg-gray-50"
              >
                <Icon name="google" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;

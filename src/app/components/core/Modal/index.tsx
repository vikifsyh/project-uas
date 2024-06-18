"use client";
import { useRouter } from "next/navigation";
import { useRef, ReactNode, MouseEventHandler } from "react";

export default function Modal({ children }: { children: ReactNode }) {
  const overlay = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const close: MouseEventHandler = (e) => {
    if (e.target === overlay.current) {
      router.back();
    }
  };

  return (
    <div
      ref={overlay}
      className="fixed inset-0 z-50 left-0 right-0 top-0 bottom-0 flex justify-center items-center bg-black/60"
      onClick={close}
    >
      <div className="relative max-w-full mx-4 sm:mx-6 md:mx-10 lg:mx-20 xl:mx-40 p-4 sm:p-6 md:p-8 bg-white rounded-lg">
        {children}
      </div>
    </div>
  );
}

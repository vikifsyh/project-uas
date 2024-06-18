import localFont from "next/font/local";

export const myFontIntegral = localFont({
  src: [
    {
      path: "../../public/font/IntegralCF-Bold.otf",
      weight: "700",
    },
  ],
  display: "swap",
});

export const myFontAlliance = localFont({
  src: [
    {
      path: "../../public/font/Alliance No.1 Regular.otf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../../public/font/Alliance No.1 Medium.otf",
      style: "normal",
      weight: "500",
    },
    {
      path: "../../public/font/Alliance No.1 SemiBold.otf",
      style: "normal",
      weight: "600",
    },
    {
      path: "../../public/font/Alliance No.1 Bold.otf",
      style: "normal",
      weight: "700",
    },
  ],
  display: "swap",
});

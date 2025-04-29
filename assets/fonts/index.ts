import localFont from "next/font/local";

export const headingsFont = localFont({
  src: [
    {
      path: "./Montserrat-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-headings",
  display: "swap",
});

export const copyFont = localFont({
  src: [
    {
      path: "./Montserrat-SemiBold.ttf",
      weight: "600",
      style: "semibold",
    },
  ],
  variable: "--font-copy",
  display: "swap",
});
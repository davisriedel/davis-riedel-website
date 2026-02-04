import { Inter, Share_Tech } from "next/font/google";
import localFont from "next/font/local";

export const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});
export const headingFont = Share_Tech({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
});

export const faRegular = localFont({
  src: "./fontawesome/fa-regular-400.woff2",
  variable: "--fontawesome-regular",
});
export const faBrands = localFont({
  src: "./fontawesome/fa-brands-400.woff2",
  variable: "--fontawesome-brands",
});

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

const regular = localFont({
	src: "./fontawesome/fa-regular-400.woff2",
});
const solid = localFont({
	src: "./fontawesome/fa-solid-900.woff2",
});
const brands = localFont({
	src: "./fontawesome/fa-brands-400.woff2",
});
// TODO: Workaround because fonts must be consts in module scope
export const iconFonts = { regular, solid, brands };

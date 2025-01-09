import { Inter, Share_Tech } from "next/font/google";

export const bodyFont = Inter({
	subsets: ["latin"],
	variable: "--font-body",
});
export const headingFont = Share_Tech({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-heading",
});

import { Inter, Share_Tech } from "next/font/google";

// imported in root layout
import "@fortawesome/fontawesome-free/css/regular.min.css";

export const bodyFont = Inter({
	subsets: ["latin"],
	variable: "--font-body",
});
export const headingFont = Share_Tech({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-heading",
});


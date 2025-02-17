"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Redirect() {
	useEffect(() => {
		// Check for stored language preference in localStorage
		const storedLang = localStorage.getItem("lang");

		// If no stored preference, fallback to browser's language
		const browserLang = navigator.language;
		let detectedLang: string;

		if (storedLang) {
			detectedLang = storedLang;
		} else if (browserLang.startsWith("de")) {
			detectedLang = "de";
		} else {
			detectedLang = "en";
		}

		redirect(`/${detectedLang}`);
	}, []);

	return null; // Ensure the component does not render anything
}

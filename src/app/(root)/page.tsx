"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
	useEffect(() => {
		// Detect the browser's preferred language
		const browserLang = navigator.language;

		let detectedLocale: string;
		if (browserLang.startsWith("de")) {
			detectedLocale = "de";
		} else {
			detectedLocale = "en";
		}

		redirect(`/${detectedLocale}`);
	}, []);
}

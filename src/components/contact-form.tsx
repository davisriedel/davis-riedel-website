"use client";

import { sendContactForm } from "@/actions/contact-form-send";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";
import { AnimatedLink } from "./animated-link";

export function ContactForm({ lang }: { lang: "en" | "de" }) {
	const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
	const formRef = useRef<HTMLFormElement>(null);

	const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const { error } = await sendContactForm(formData);

		if (error) {
			console.error(error);
			setStatus("error");
			return;
		}

		setStatus("success");
		formRef.current?.reset();
	};

	return (
		<div className="max-w-md mx-auto p-6 bg-gray-100 dark:bg-gray-800 shadow-md rounded-md">
			<form
				ref={formRef}
				name="contact"
				onSubmit={handleFormSubmit}
				className="space-y-4"
			>
				<input type="hidden" name="form-name" value="contact" />

				<div>
					<label
						htmlFor="name"
						className="block text-sm font-medium text-gray-700 dark:text-gray-300"
					>
						Name
					</label>
					<Input
						id="name"
						name="name"
						type="text"
						placeholder="Name"
						required
						className="bg-white dark:bg-gray-700 dark:text-gray-300"
					/>
				</div>

				<div>
					<label
						htmlFor="email"
						className="block text-sm font-medium text-gray-700 dark:text-gray-300"
					>
						Email
					</label>
					<Input
						id="email"
						name="email"
						type="email"
						placeholder="Email"
						required
						className="bg-white dark:bg-gray-700 dark:text-gray-300"
					/>
				</div>

				<div>
					<label
						htmlFor="message"
						className="block text-sm font-medium text-gray-700 dark:text-gray-300"
					>
						{lang === "de" ? "Nachricht" : "Message"}
					</label>
					<Textarea
						id="message"
						name="message"
						placeholder="Your message"
						required
						rows={4}
						className="bg-white dark:bg-gray-700 dark:text-gray-300"
					/>
				</div>

				<div>
					<label
						htmlFor="consent"
						className="flex items-center text-sm text-gray-700 dark:text-gray-300"
					>
						<Checkbox
							name="consent"
							required
							className="mr-2 bg-white dark:bg-gray-700 dark:border-gray-600"
						/>
						{lang === "de" ? (
							<span>
								Ich habe die{" "}
								<AnimatedLink href="/de/datenschutz">
									Datenschutzerklärung
								</AnimatedLink>{" "}
								gelesen und stimme ihr zu.
							</span>
						) : (
							<span>
								I have read the{" "}
								<AnimatedLink href="/en/privacy">Privacy Policy</AnimatedLink>{" "}
								and consent to it.
							</span>
						)}
					</label>
				</div>

				<Button type="submit" className="w-full">
					{lang === "de" ? "Senden" : "Submit"}
				</Button>
			</form>

			{status === "success" && (
				<p className="mt-4 text-sm text-green-600 dark:text-green-400">
					{lang === "de"
						? "Vielen Dank! Ihre Nachricht wurde abgeschickt."
						: "Thank you! Your message has been sent successfully."}
				</p>
			)}
			{status === "error" && (
				<p className="mt-4 text-sm text-red-600 dark:text-red-400">
					{lang === "de"
						? "Senden fehlgeschlagen. Bitte versuchen Sie es erneut."
						: "Oops! Something went wrong. Please try again."}
				</p>
			)}
		</div>
	);
}

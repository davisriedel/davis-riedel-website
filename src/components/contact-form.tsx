"use client";

import { useRef, useState } from "react";
import { sendContactForm } from "@/actions/contact-form-send";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
    <div className="mx-auto max-w-md rounded-md bg-gray-100 p-6 shadow-md dark:bg-gray-800">
      <form
        className="space-y-4"
        name="contact"
        onSubmit={handleFormSubmit}
        ref={formRef}
      >
        <input name="form-name" type="hidden" value="contact" />

        <div>
          <label
            className="block font-medium text-gray-700 text-sm dark:text-gray-300"
            htmlFor="name"
          >
            Name
          </label>
          <Input
            className="bg-white dark:bg-gray-700 dark:text-gray-300"
            id="name"
            name="name"
            placeholder="Name"
            required
            type="text"
          />
        </div>

        <div>
          <label
            className="block font-medium text-gray-700 text-sm dark:text-gray-300"
            htmlFor="email"
          >
            Email
          </label>
          <Input
            className="bg-white dark:bg-gray-700 dark:text-gray-300"
            id="email"
            name="email"
            placeholder="Email"
            required
            type="email"
          />
        </div>

        <div>
          <label
            className="block font-medium text-gray-700 text-sm dark:text-gray-300"
            htmlFor="message"
          >
            {lang === "de" ? "Nachricht" : "Message"}
          </label>
          <Textarea
            className="bg-white dark:bg-gray-700 dark:text-gray-300"
            id="message"
            name="message"
            placeholder="Your message"
            required
            rows={4}
          />
        </div>

        <div>
          <label
            className="flex items-center text-gray-700 text-sm dark:text-gray-300"
            htmlFor="consent"
          >
            <Checkbox
              className="mr-2 bg-white dark:border-gray-600 dark:bg-gray-700"
              name="consent"
              required
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

        <Button className="w-full" type="submit">
          {lang === "de" ? "Senden" : "Submit"}
        </Button>
      </form>

      {status === "success" && (
        <p className="mt-4 text-green-600 text-sm dark:text-green-400">
          {lang === "de"
            ? "Vielen Dank! Ihre Nachricht wurde abgeschickt."
            : "Thank you! Your message has been sent successfully."}
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-red-600 text-sm dark:text-red-400">
          {lang === "de"
            ? "Senden fehlgeschlagen. Bitte versuchen Sie es erneut."
            : "Oops! Something went wrong. Please try again."}
        </p>
      )}
    </div>
  );
}

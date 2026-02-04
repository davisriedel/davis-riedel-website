"use server";

import { Resend } from "resend";
import { ContactFormEmailTemplate } from "@/emails/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactForm(formData: FormData) {
  "use server";

  return await resend.emails.send({
    from: "Davis Riedel <no-reply@resend.davis-riedel.de>",
    to: ["mail@davis-riedel.de"],
    subject: "New Message via www.davis-riedel.de",
    react: <ContactFormEmailTemplate formData={formData} />,
  });
}

import type * as React from "react";

interface ContactFormEmailTemplateProps {
  formData: FormData;
}

export const ContactFormEmailTemplate: React.FC<
  Readonly<ContactFormEmailTemplateProps>
> = ({ formData }) => (
  <div>
    <h1>New message via www.davis-riedel.de:</h1>
    <p>
      <b>Form: </b>
      {formData.get("form-name")?.toString()}
    </p>
    <p>
      <b>Name: </b>
      {formData.get("name")?.toString()}
    </p>
    <p>
      <b>Email: </b>
      {formData.get("email")?.toString()}
    </p>
    <p>
      <b>Consent: </b>
      {formData.get("consent")?.toString()}
    </p>
    <p>
      <b>Message: </b>
      <br />
      {formData.get("message")?.toString()}
    </p>
  </div>
);

import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Us | Smartinovate",
  description:
    "Get in touch with Smartinovate for IoT, automation, and smart solution inquiries in Sri Lanka.",
};

export default function ContactPage() {
  // This file stays a Server Component (no "use client")
  return <ContactClient />;
}

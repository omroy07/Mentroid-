import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactFAQ from "@/components/contact/ContactFAQ";

export const metadata = {
  title: "Discuss Your AI or Software Project | Mentroid",
  description:
    "Tell Mentroid what you want to build or improve. Share your workflow, current tools and project stage through a clear project enquiry.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#f0eee9] text-[#202020]">
      <ContactHero />
      <ContactForm />
      <ContactFAQ />
    </main>
  );
}
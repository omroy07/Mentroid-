import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Amazing people and amazing services.",
    name: "Priyaranjan Jha",
    role: "Client",
    service: "Chatbot Development",
  },
  {
    quote:
      "Excellent experience! The video was professional, and their service was top-notch.",
    name: "Shivam Jha",
    role: "Surveyor",
    service: "Photo / Video Editing",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[#f7f9fb] py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-[var(--accent-blue)]">
            Client Experiences
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            Built with people.
            <br />
            Proven through experience.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            We work closely with our clients to turn ideas, problems, and
            requirements into practical digital solutions.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="relative rounded-3xl border border-black/10 bg-white p-7 sm:p-9"
            >
              {/* Quote Icon */}
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f7f9fb]">
                <Quote
                  size={20}
                  strokeWidth={1.7}
                  className="text-[var(--accent-blue)]"
                />
              </div>

              {/* Quote */}
              <blockquote className="mt-8 max-w-xl text-xl font-medium leading-9 tracking-tight text-slate-900 sm:text-2xl">
                “{testimonial.quote}”
              </blockquote>

              {/* Client */}
              <div className="mt-10 flex items-end justify-between gap-5 border-t border-black/10 pt-6">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {testimonial.name}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    {testimonial.role}
                  </p>
                </div>

                <span className="rounded-full border border-black/10 px-3 py-1.5 text-xs font-medium text-slate-500">
                  {testimonial.service}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Future Proof */}
        <div className="mt-8 rounded-3xl border border-dashed border-black/15 bg-white/50 p-6 sm:p-8">
          <p className="max-w-3xl text-sm leading-7 text-slate-500">
            More client stories and measurable outcomes will be added as
            Mentroid continues to ship AI systems and digital products for
            businesses.
          </p>
        </div>

      </div>
    </section>
  );
}
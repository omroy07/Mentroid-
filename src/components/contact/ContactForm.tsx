"use client";

import { FormEvent, useLayoutEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, ChevronDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projectAreas = [
  "AI development",
  "Chatbot",
  "Automation",
  "AI product",
  "Machine learning",
  "Web application",
  "Consulting",
  "Not sure yet",
];

const projectStages = [
  "Exploring an idea",
  "Building a prototype",
  "Extending a product",
  "Improving a workflow",
  "Not sure yet",
];

type FormState = {
  name: string;
  email: string;
  company: string;
  website: string;
  projectArea: string;
  projectStage: string;
  projectDetails: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  company: "",
  website: "",
  projectArea: "",
  projectStage: "",
  projectDetails: "",
};

export default function ContactEnquiry() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [form, setForm] = useState<FormState>(initialForm);

  const [submitted, setSubmitted] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".enquiry-reveal", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    /*
     * Connect this to your actual server/API.
     * Only set submitted=true after the server
     * confirms successful acceptance.
     */

    setSubmitted(true);
  };

  return (
    <section
      ref={sectionRef}
      id="project-enquiry"
      className="px-5 pb-12 sm:px-8 sm:pb-24 md:px-10 md:pb-28 lg:px-12 lg:pb-32 xl:px-16 2xl:px-20"
    >
      <div className="mx-auto max-w-[1660px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-20">
          {/* ===================================================
              LEFT — IMAGE / VIDEO + TEXT
          =================================================== */}

          <div className="enquiry-reveal">
            {/* LEFT TEXT */}

            <div className="mt-8  pt-6 sm:mt-10 sm:pt-7">
              <h2 className="max-w-[650px] text-[clamp(34px,4.5vw,60px)] font-[450] leading-[0.98] tracking-[-0.055em] text-[#202020]">
                Tell us what you want to build or improve
              </h2>

              <p className="mt-6 max-w-[560px] text-[15px] font-[450] leading-[1.6] tracking-[-0.01em] text-[#454545] sm:text-[16px]">
                Describe the task, the people who use it and the tools involved.
                If you have an existing application or prototype, explain what
                works and where it falls short.
              </p>
            </div>
            <div className="mt-8 space-y-4 sm:mt-9 sm:space-y-4">
              {[
                "Share the problem, workflow or product you want to improve.",
                "Tell us who uses it and what outcome you want to achieve.",
                "Mention your existing tools, systems, integrations or prototype.",
                "You don't need a complete technical brief to get started.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <div className="mt-[2px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#bcb9b3]">
                    <Check
                      size={12}
                      strokeWidth={1.8}
                      className="text-[#202020]"
                    />
                  </div>

                  <p className="max-w-[520px] text-[14px] font-[450] leading-[1.5] tracking-[-0.01em] text-[#454545] sm:text-[16px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ===================================================
              RIGHT — FORM
          =================================================== */}

          <div className="enquiry-reveal">
            <form
              onSubmit={handleSubmit}
              className="rounded-[12px] border border-[#bcb9b3] bg-[#f8f7f4] p-6 sm:p-8 md:p-10 lg:p-11 xl:p-12"
            >
              {/* FORM HEADER */}

              <div className="mb-10 pb-7">
               

                <h3 className="mt-4 max-w-[560px] text-[clamp(30px,3.5vw,48px)] font-[450] leading-[1] tracking-[-0.055em] text-[#202020]">
                  Send a project overview
                </h3>
              </div>

              {/* FIELDS */}

              <div className="grid grid-cols-1 gap-x-7 gap-y-8 sm:grid-cols-2 leading-[1] tracking-[-0.055em]">
                <InputField
                  label="Name"
                  required
                  value={form.name}
                  placeholder="Your name"
                  onChange={(value) => updateField("name", value)}
                />

                <InputField
                  label="Email"
                  required
                  type="email"
                  value={form.email}
                  placeholder="you@example.com"
                  onChange={(value) => updateField("email", value)}
                />

                <InputField
                  label="Company or project"
                  value={form.company}
                  placeholder="Company or project name"
                  onChange={(value) => updateField("company", value)}
                />

                <InputField
                  label="Website"
                  type="url"
                  value={form.website}
                  placeholder="https://"
                  onChange={(value) => updateField("website", value)}
                />

                <SelectField
                  label="Project area"
                  value={form.projectArea}
                  options={projectAreas}
                  onChange={(value) => updateField("projectArea", value)}
                />

                <SelectField
                  label="Project stage"
                  value={form.projectStage}
                  options={projectStages}
                  onChange={(value) => updateField("projectStage", value)}
                />

                {/* DESCRIPTION */}

                <div className="sm:col-span-2">
                  <label className="mb-3 block text-[12px] font-medium uppercase tracking-[0.12em] text-[#454545] sm:text-[11px]">
                    What would you like to build or improve
                    <span className="ml-1 text-[#ed4343]">*</span>
                  </label>

                  <textarea
                    required
                    rows={7}
                    value={form.projectDetails}
                    placeholder="Include your current workflow, tools and result needed."
                    onChange={(event) =>
                      updateField("projectDetails", event.target.value)
                    }
                    className="w-full resize-none  bg-transparent px-0 py-3 text-[15px] font-[450] leading-[1.5] tracking-[-0.01em] text-[#202020] outline-none transition-colors placeholder:text-[#99958f] focus:border-[#202020]"
                  />
                </div>
              </div>

              {/* SUBMIT */}

              <div className="mt-10 flex flex-col gap-6 border-t border-[#bcb9b3] pt-7 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-[350px] text-[14px] leading-[1.5] text-[#77736d] ">
                  Please leave out confidential information at this stage. We'll use your details to respond to your enquiry.
                </p>

                <button
                  type="submit"
                  disabled={submitted}
                  className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-[10px] border border-[#202020] bg-[#202020] px-6 py-3.5 text-[10px] font-medium uppercase tracking-[0.11em] text-[#f8f7f4] transition-all duration-300 hover:bg-transparent hover:text-[#202020] sm:text-[11px]"
                >
                  {submitted ? (
                    <>
                      Enquiry sent
                      <Check size={15} strokeWidth={1.6} />
                    </>
                  ) : (
                    <>
                      Send project enquiry
                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   INPUT FIELD
========================================================= */

type InputFieldProps = {
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
};

function InputField({
  label,
  value,
  placeholder,
  onChange,
  type = "text",
  required = false,
}: InputFieldProps) {
  return (
    <div>
      <label className="mb-3 block text-[10px] font-medium uppercase tracking-[0.12em] text-[#454545] sm:text-[11px]">
        {label}

        {required && <span className="ml-1 text-[#536fce]">*</span>}
      </label>

      <input
        required={required}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="w-full border-b border-[#bcb9b3] bg-transparent px-0 py-3 text-[15px] font-[450] tracking-[-0.01em] text-[#202020] outline-none transition-colors placeholder:text-[#99958f] focus:border-[#202020]"
      />
    </div>
  );
}

/* =========================================================
   SELECT FIELD
========================================================= */

type SelectFieldProps = {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

function SelectField({ label, value, options, onChange }: SelectFieldProps) {
  return (
    <div>
      <label className="mb-3 block text-[10px] font-medium uppercase tracking-[0.12em] text-[#454545] sm:text-[11px]">
        {label}
      </label>

      <div className="relative">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full appearance-none border-b border-[#bcb9b3] bg-transparent px-0 py-3 pr-8 text-[15px] font-[450] tracking-[-0.01em] text-[#202020] outline-none transition-colors focus:border-[#202020]"
        >
          <option value="">Select an option</option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <ChevronDown
          size={16}
          strokeWidth={1.5}
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[#77736d]"
        />
      </div>
    </div>
  );
}

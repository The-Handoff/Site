import Image from "next/image";
import { Logo } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import miaPhoto from "@/assets/mentors/mia.jpg";
import tanyaPhoto from "@/assets/mentors/tanya.jpg";
import miaAndTanyaPhoto from "@/assets/mentors/mia-and-tanya.jpg";
import wordmark from "@/assets/brand/the-handover-cropped-transparent.png";
import { countryOptions, stateOptions } from "@/data/salesforceLeadOptions";

const expectations = [
  {
    title: "Two Mentors, Two Mentees",
    body: "Every session is Mia and Tanya with just two mentees. Small enough that the conversation is about your work, not a generic demo.",
  },
  {
    title: "Four-Week Cohort",
    body: "One session a week for four weeks. Short enough to commit to, long enough to change how you work.",
  },
  {
    title: "Built Around You",
    body: "No two cohorts are the same. We shape each one around your level, your use case and the pain points you bring, starting with how you're using AI today.",
  },
  {
    title: "Salesforce + Claude",
    body: "Our focus is where the two meet: using Claude to build, configure and work in Salesforce faster. It's what we use every day, and it's a natural fit for the ecosystem.",
  },
  {
    title: "Three Workflows, Running",
    body: "By the end of the four weeks you'll have three Claude workflows running in your actual job. Not notes on what you could try, but things you're already using.",
  },
];

// Tags are short facts shown as pills. Keep them deliberately different between
// mentors (e.g. one shows tenure, the other a role) so the cards never read as a
// side-by-side comparison.
const mentors: {
  name: string;
  photo: typeof miaPhoto;
  bio: string;
  tags: { label: string; href?: string }[];
}[] = [
  {
    name: "Mia",
    photo: miaPhoto,
    bio: "A dyslexic, big-picture thinker, Mia rebuilt her team's CI/CD pipeline around Claude. Now it writes her PRs and documentation after she ships, so she stays focused on building things that do good.",
    tags: [
      { label: "Salesforce MVP" },
      { label: "Nonprofit" },
      { label: "Architect" },
      { label: "Pace Yourself", href: "https://www.youtube.com/@paceyourself_" },
    ],
  },
  {
    name: "Tanya",
    photo: tanyaPhoto,
    bio: "The other half of the duo. Deeply experienced at making Claude work in real Salesforce workflows, and loves helping others get there faster.",
    tags: [],
  },
];

const faqs = [
  {
    question: "Is there a cost to join?",
    answer:
      "No — The Handover mentorship program is completely free.",
  },
  {
    question: "Who is this for?",
    answer:
      "Anyone using or building Salesforce in their professional life who wants to learn how to bring AI into the way they work. You don't need to be technical or already using Claude.",
  },
  {
    question: "What will I walk away with?",
    answer:
      "Three Claude workflows running in your actual Salesforce work, built with Mia and Tanya over the four weeks.",
  },
  {
    question: "Is every cohort the same?",
    answer:
      "No. Each cohort is shaped around its two mentees: your experience with AI, how you use Salesforce, and the problems you want solved. That's why the registration form asks about your role and how you've used Claude.",
  },
  {
    question: "How big is each cohort?",
    answer:
      "Small and personal. Each session is you and one other mentee, working directly with both Mia and Tanya.",
  },
  {
    question: "How often do we meet, and for how long?",
    answer: "Once a week, for an hour, across a four-week cohort.",
  },
  {
    question: "What timezone are sessions run in?",
    answer:
      "Sessions are scheduled in the Sydney/Melbourne timezone, after standard work hours — so bring your evening self.",
  },
  {
    question: "Who are the mentors?",
    answer:
      "Mia and Tanya. Both use Claude every day to move faster in their own Salesforce work, and are keen to help you do the same.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="sticky top-0 z-10 border-b border-black/5 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Image src={wordmark} alt="The Handover" className="h-8 w-auto" priority />
          <a
            href="#apply"
            className="rounded-full bg-pbc-orange px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-pbc-orange-dark"
          >
            Register Interest
          </a>
        </div>
      </header>

      <main className="flex-1">
        <section className="px-6 pt-12 pb-16 text-center">
          <Reveal>
            <Logo className="mx-auto h-auto w-full max-w-xl drop-shadow-xl sm:max-w-2xl" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-pbc-blue-dark">
              A mentorship program for Salesforce professionals
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-lg leading-8 text-foreground/70">
              Two mentors. Two mentees. Four weeks to get Claude working in your job. Mia and Tanya
              already use it every day to move faster in Salesforce. Now they&apos;re making The Handover to you.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href="#apply"
              className="mt-8 inline-block rounded-full bg-pbc-orange px-8 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-pbc-orange-dark"
            >
              Register Your Interest
            </a>
          </Reveal>
        </section>

        <section id="what-to-expect" className="px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <Reveal className="text-center">
              <h2 className="font-display text-3xl font-semibold text-pbc-blue-dark">
                What to Expect
              </h2>
              <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-pbc-gold-champagne to-pbc-gold-bronze" />
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {expectations.map((item, i) => (
                <Reveal
                  key={item.title}
                  delay={i * 0.08}
                  className={i === expectations.length - 1 && expectations.length % 2 === 1 ? "sm:col-span-2" : undefined}
                >
                  <div
                    className={`h-full rounded-2xl border p-6 shadow-sm ${
                      i === expectations.length - 1
                        ? "border-2 border-pbc-orange/50 bg-white/80"
                        : "border-pbc-blue/20 bg-pbc-blue/5"
                    }`}
                  >
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-foreground/70">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="mentors" className="px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <Reveal className="text-center">
              <h2 className="font-display text-3xl font-semibold text-pbc-blue-dark">
                Meet Your Mentors
              </h2>
              <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-pbc-gold-champagne to-pbc-gold-bronze" />
            </Reveal>

                    <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {mentors.map((mentor, i) => (
                <Reveal key={mentor.name} delay={0.15 + i * 0.1}>
                  <div className="flex h-full flex-col items-center rounded-2xl border border-black/5 bg-white/80 p-6 text-center shadow-sm">
                    <Image
                      src={mentor.photo}
                      alt={mentor.name}
                      className="h-28 w-28 rounded-full object-cover shadow-sm"
                    />
                    <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                      {mentor.name}
                    </h3>
                    {mentor.tags.length > 0 && (
                      <ul className="mt-3 flex flex-wrap justify-center gap-2">
                        {mentor.tags.map((tag) => {
                          const pill =
                            "rounded-full border border-pbc-blue/20 bg-pbc-blue/10 px-3 py-1 text-sm font-medium text-pbc-blue-dark";
                          return (
                            <li key={tag.label}>
                              {tag.href ? (
                                <a
                                  href={tag.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`${pill} inline-block transition-colors hover:bg-pbc-blue/20`}
                                >
                                  {tag.label} ↗
                                </a>
                              ) : (
                                <span className={`${pill} inline-block`}>{tag.label}</span>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                    <p className="mt-3 text-foreground/70">{mentor.bio}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="px-6 py-16">
          <div className="mx-auto max-w-2xl">
            <Reveal className="text-center">
              <h2 className="font-display text-3xl font-semibold text-pbc-orange-dark">
                Frequently Asked Questions
              </h2>
              <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-pbc-gold-champagne to-pbc-gold-bronze" />
            </Reveal>

            <div className="mt-10 space-y-3">
              {faqs.map((faq, i) => (
                <Reveal key={faq.question} delay={i * 0.06}>
                  <details className="group rounded-2xl border border-black/5 bg-white/80 p-5 shadow-sm open:shadow-md">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-display text-lg font-semibold text-foreground">
                      {faq.question}
                      <span className="ml-4 text-pbc-orange transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-foreground/70">{faq.answer}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="apply" className="px-6 py-16">
          <div className="mx-auto max-w-xl">
            <Reveal className="text-center">
              <h2 className="font-display text-3xl font-semibold text-pbc-orange-dark">
                Register Your Interest
              </h2>
              <p className="mt-3 text-foreground/70">
                Fill in the form below and we&apos;ll be in touch about next steps.
              </p>
            </Reveal>

            {/*
              Salesforce Web-to-Lead form, matching the HTML generated from
              Setup -> Web-to-Lead for The Handover org (oid
              00DQE00000FXBNR). Field set, maxlengths, and the lead_source
              value ("Web") are copied verbatim from that generated form —
              lead_source in particular must stay "Web" since LeadSource is a
              restricted picklist in Salesforce and any other value would
              cause the submission to fail.
            */}
            <Reveal delay={0.1}>
              <form
                action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DQE00000FXBNR"
                method="POST"
                className="mt-10 space-y-5 rounded-2xl border border-black/5 bg-white/90 p-8 shadow-sm"
              >
                <input type="hidden" name="oid" value="00DQE00000FXBNR" />
                <input
                  type="hidden"
                  name="retURL"
                  value="https://the-handover.github.io/Site/thank-you/"
                />
                <input type="hidden" name="lead_source" value="Web" />

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="First Name"
                    name="first_name"
                    autoComplete="given-name"
                    maxLength={40}
                    required
                  />
                  <Field
                    label="Last Name"
                    name="last_name"
                    autoComplete="family-name"
                    maxLength={80}
                    required
                  />
                </div>
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  maxLength={80}
                  required
                />
                <Field label="City" name="city" autoComplete="address-level2" maxLength={40} />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Select label="State/Province" name="state_code" options={stateOptions} />
                  <Select label="Country" name="country_code" options={countryOptions} />
                </div>
                <Field
                  label="What's your LinkedIn profile URL?"
                  name="00NQE00000bzmH1"
                  type="url"
                  autoComplete="url"
                  maxLength={255}
                />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Select
                    label="How have you used Claude before?"
                    name="00NQE00000bzmSD"
                    options={[
                      { value: "Used for work", label: "Used for work" },
                      { value: "Used personally", label: "Used personally" },
                      { value: "Have not tried yet", label: "Have not tried yet" },
                    ]}
                  />
                  <Select
                    label="Have you used Claude Code?"
                    name="00NQE00000bzmTp"
                    options={[
                      { value: "Yes", label: "Yes" },
                      { value: "No", label: "No" },
                      { value: "Not sure", label: "Not sure" },
                    ]}
                  />
                </div>
                <Checkbox
                  label="Are you currently employed within the Salesforce ecosystem?"
                  name="00NQE00000bzmLm"
                />
                <div>
                  <label htmlFor="00NQE00000bzirf" className="block text-sm font-medium text-foreground">
                    Tell us about your current role
                  </label>
                  <textarea
                    id="00NQE00000bzirf"
                    name="00NQE00000bzirf"
                    rows={3}
                    className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 text-foreground focus:border-pbc-blue focus:outline-none focus:ring-2 focus:ring-pbc-blue/30"
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-foreground">
                    Why are you interested?
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 text-foreground focus:border-pbc-blue focus:outline-none focus:ring-2 focus:ring-pbc-blue/30"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-pbc-orange px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-pbc-orange-dark"
                >
                  Submit
                </button>
              </form>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 px-6 py-8 text-center text-sm text-foreground/50">
        The Handover — {new Date().getFullYear()}
      </footer>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  maxLength,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  maxLength?: number;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-pbc-orange-dark"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        maxLength={maxLength}
        required={required}
        className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 text-foreground focus:border-pbc-blue focus:outline-none focus:ring-2 focus:ring-pbc-blue/30"
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: ReadonlyArray<{ value: string; label: string }>;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-foreground">
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="mt-1 w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-foreground focus:border-pbc-blue focus:outline-none focus:ring-2 focus:ring-pbc-blue/30"
      >
        {options.map((opt) => (
          <option key={`${opt.value}-${opt.label}`} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function Checkbox({ label, name }: { label: string; name: string }) {
  return (
    <label htmlFor={name} className="flex items-center gap-2 text-sm font-medium text-foreground">
      <input
        id={name}
        name={name}
        type="checkbox"
        value="1"
        className="h-4 w-4 rounded border-black/20 text-pbc-orange focus:ring-pbc-blue/30"
      />
      {label}
    </label>
  );
}

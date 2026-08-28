import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import {
  Search,
  BarChart3,
  Target,
  Layers,
  Code2,
  Link2,
  FileSearch,
  Sparkles,
  Brain,
  Gauge,
  Network,
  MapPin,
  Phone,
  Mail,
  GraduationCap,
  BadgeCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Harsh Bhatt — Junior SEO Executive | SEO Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Harsh Bhatt, a data-driven SEO specialist in Dehradun, India — keyword research, analytics, on-page optimization and AI search (AIO/GEO) trends.",
      },
      { property: "og:title", content: "Harsh Bhatt — Junior SEO Executive" },
      {
        property: "og:description",
        content:
          "Data-driven SEO specialist focused on keyword research, analytics, on-page optimization, and AI search trends.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  component: Index,
});

const skills = [
  { icon: Search, title: "Keyword Research", desc: "Intent-first keyword discovery and prioritisation." },
  { icon: Target, title: "Competitor Analysis", desc: "SERP gap studies and content benchmarking." },
  { icon: BarChart3, title: "Google Analytics", desc: "GA4 traffic, engagement and conversion tracking." },
  { icon: Gauge, title: "Search Console", desc: "Query, coverage and indexing diagnostics." },
  { icon: Network, title: "Keyword Mapping", desc: "One page, one intent — mapped across the site." },
  { icon: Layers, title: "Topic Clustering", desc: "Pillar and cluster architecture for topical depth." },
  { icon: Code2, title: "HTML Signals", desc: "Headings, schema and semantic markup hygiene." },
  { icon: Link2, title: "Canonical Tags", desc: "Duplicate control and consolidation of signals." },
  { icon: FileSearch, title: "On-Page SEO", desc: "Titles, metas, internal links and content depth." },
  { icon: Sparkles, title: "AIO / GEO", desc: "Optimising for AI overviews and generative engines." },
  { icon: Brain, title: "NLP Optimization", desc: "Entity coverage and natural language relevance." },
];

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(1, "Please write a message").max(1000),
});

function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  return (
    <form action="https://api.web3forms.com/submit" method="POST" className="surface-card space-y-4 p-6">
      <input type="hidden" name="access_key" value="f4f1e600-5878-4751-9277-6b67e08f3e5e" />

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            value={values.name}
            maxLength={100}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            placeholder="Your name"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            value={values.email}
            maxLength={255}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            placeholder="you@company.com"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          maxLength={1000}
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
          placeholder="Let's get in touch for SEO roles or projects."
          required
        />
      </div>

      <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto">
        Send message
      </Button>
    </form>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-xs font-medium tracking-[0.2em] text-primary uppercase">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{title}</h2>
      <div className="mt-5 h-px w-16 bg-primary/60" />
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="font-display text-sm font-bold tracking-widest uppercase">
            Harsh<span className="text-primary">.</span>Bhatt
          </span>
          <div className="hidden gap-8 text-sm text-muted-foreground sm:flex">
            <a href="#about" className="transition-colors hover:text-primary">About</a>
            <a href="#skills" className="transition-colors hover:text-primary">Skills</a>
            <a href="#projects" className="transition-colors hover:text-primary">Projects</a>
            <a href="#contact" className="transition-colors hover:text-primary">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section
          className="relative overflow-hidden px-6 py-24 sm:py-32"
          style={{ backgroundImage: "var(--gradient-hero)" }}
        >
          <div className="mx-auto max-w-6xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-wide text-primary uppercase">
              <MapPin className="size-3.5" /> Dehradun, India
            </p>
            <h1 className="max-w-3xl text-4xl leading-[1.05] font-bold sm:text-6xl">
              Harsh Bhatt — <span className="text-gradient">Junior SEO Executive</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Data-driven SEO specialist focused on keyword research, analytics, on-page
              optimization, and AI search trends.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild variant="hero" size="xl">
                <a href="#projects">View Projects</a>
              </Button>
              <Button asChild variant="outlineAccent" size="xl">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-border/60 px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading eyebrow="01 — About" title="About Me" />
            <div className="space-y-5 text-muted-foreground">
              <p>
                I'm an SEO practitioner based in <span className="text-foreground">Dehradun, Uttarakhand</span>,
                working hands-on across the full on-page and analytics stack. Most of what I know
                comes from executing independently — auditing real sites, mapping keywords, shipping
                changes and measuring what actually moved.
              </p>
              <p>
                I run structured tests rather than guessing: hypothesis, change, measurement in
                Search Console and GA4, then iterate. I'm currently deep in how AI overviews and
                generative engines select sources, and how NLP-oriented content structure changes
                visibility there.
              </p>
              <p>
                Continuous learning is the core of the practice — search changes fast, so my process
                is built to change with it.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="border-t border-border/60 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="02 — Expertise" title="Skills &amp; Tools" />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((s) => (
                <div
                  key={s.title}
                  className="surface-card group p-5 transition-colors hover:border-primary/50"
                >
                  <s.icon className="size-5 text-primary" />
                  <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="border-t border-border/60 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="03 — Work" title="Projects &amp; Case Studies" />

            <div className="surface-card mt-10 p-7">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <FileSearch className="size-5 text-primary" />
                  <span className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
                    Case Study · EkoStay
                  </span>
                </div>
                <span className="rounded-full border border-silver/30 px-3 py-1 text-[11px] tracking-wide text-silver uppercase">
                  Personal SEO research
                </span>
              </div>

              <h3 className="mt-4 text-xl font-semibold sm:text-2xl">Meta Title &amp; Description</h3>
              <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
                A self-initiated title tag and meta description assessment for EkoStay, a luxury
                villa rental platform — evaluating keyword intent, user incentives and SERP
                structural alignment for high-intent travel queries.
              </p>

              {/* Before / After SERP previews */}
              <div className="mt-8 grid gap-5 lg:grid-cols-2">
                <div className="rounded-xl border border-border/60 bg-background/50 p-5">
                  <p className="text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                    Before — original snippet
                  </p>
                  <div className="mt-4 rounded-lg border border-border/50 bg-card/60 p-4">
                    <p className="text-xs text-muted-foreground">https://www.ekostay.com</p>
                    <p className="mt-1 text-base font-medium text-silver">
                      EkoStay
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                     Flat 26% off on all properties.gift-icon The Great Getaway sale.Flat 26% OFF on All PROPERTIES. click to call +91 8169019090. 
                    </p>
                  </div>
                  <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                    <li>Broken code element rendering as text (gift-icon).</li>
                    <li>Aggressive ALL CAPS reducing readability.</li>
                    <li>"FLAT 26% OFF" repeated twice, wasting characters.</li>
                    <li>Generic term "properties" with weak entity signal.</li>
                    <li>Long title at risk of truncation on mobile.</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-primary/40 bg-primary/5 p-5">
                  <p className="text-[11px] font-semibold tracking-[0.18em] text-primary uppercase">
                    After — proposed snippet
                  </p>
                  <div className="mt-4 rounded-lg border border-border/50 bg-card/60 p-4">
                    <p className="text-xs text-muted-foreground">https://www.ekostay.com</p>
                    <p className="mt-1 text-base font-medium text-primary">
                      Book Private Villa with Pool: Flat 26% Off | EkoStay
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The Great Getaway Sale is live! Book luxury private villas with pools at
                      EkoStay and get a flat 26% off. Reserve online or call +91 8169019090.
                    </p>
                  </div>
                  <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                    <li>Direct CTA ("Book") plus a value hook ("Flat 26% Off").</li>
                    <li>Sentence case, clean and professional presentation.</li>
                    <li>"Luxury private villas with pools" as a precise entity.</li>
                    <li>Dual CTA — reserve online or call.</li>
                    <li>52-char title, description under 150 — zero truncation.</li>
                  </ul>
                </div>
              </div>

              {/* Metrics */}
              <div className="mt-6 grid gap-3 sm:grid-cols-4">
                {[
                  { v: "52", l: "Title characters" },
                  { v: "<150", l: "Description characters" },
                  { v: "0", l: "Broken elements left" },
                  { v: "2", l: "Conversion paths" },
                ].map((m) => (
                  <div key={m.l} className="rounded-lg border border-border/60 p-4">
                    <p className="text-lg font-semibold text-primary">{m.v}</p>
                    <p className="text-xs text-muted-foreground">{m.l}</p>
                  </div>
                ))}
              </div>

              {/* Detail columns */}
              <div className="mt-8 grid gap-6 border-t border-border/60 pt-8 text-sm sm:grid-cols-3">
                <div>
                  <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                    Strategic focus
                  </p>
                  <ul className="mt-2 space-y-1.5 text-muted-foreground">
                    <li>Theoretical title framework built on semantic search patterns.</li>
                    <li>Transactional intent matched to accommodation requirements.</li>
                    <li>Value-based hook tested against competing SERP listings.</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                    Execution
                  </p>
                  <ul className="mt-2 space-y-1.5 text-muted-foreground">
                    <li>Technical cleanup of broken text and casing.</li>
                    <li>Entity-specific rewrite of the core offering.</li>
                    <li>Promotional hook consolidated into one mention.</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                    Technical alignment
                  </p>
                  <ul className="mt-2 space-y-1.5 text-muted-foreground">
                    <li>Clear Intent + Benefit + Brand boundaries for NLP parsing.</li>
                    <li>Readable, scannable formatting for users and crawlers.</li>
                    <li>Display thresholds respected across mobile and desktop.</li>
                  </ul>
                </div>
              </div>

              <p className="mt-6 text-xs text-muted-foreground">
                Self-initiated research exercise. No client performance data is claimed.
              </p>
            </div>
          </div>
        </section>



        {/* Certifications */}
        <section className="border-t border-border/60 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="04 — Credentials" title="Certifications &amp; Education" />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="surface-card flex gap-4 p-6">
                <BadgeCheck className="size-5 shrink-0 text-primary" />
                <div>
                  <h3 className="text-base font-semibold">SEO Certification — Skillwaala</h3>
                  <p className="mt-1 text-sm text-muted-foreground">BR Softech · March 2026</p>
                </div>
              </div>
              <div className="surface-card flex gap-4 p-6">
                <GraduationCap className="size-5 shrink-0 text-primary" />
                <div>
                  <h3 className="text-base font-semibold">Bachelor of Arts (Multidisciplinary)</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Undergraduate · IGNOU · June 2024–June 2027 (Expected)
                  </p>
                </div>
              </div>
              <div className="surface-card flex gap-4 p-6">
                <GraduationCap className="size-5 shrink-0 text-primary" />
                <div>
                  <h3 className="text-base font-semibold">Senior Secondary (12th)</h3>
                  <p className="mt-1 text-sm text-muted-foreground">NIOS · 2023–2024</p>
                </div>
              </div>
              <div className="surface-card flex gap-4 p-6">
                <GraduationCap className="size-5 shrink-0 text-primary" />
                <div>
                  <h3 className="text-base font-semibold">Higher Secondary (10th)</h3>
                  <p className="mt-1 text-sm text-muted-foreground">NIOS · 2019–2020</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-border/60 px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionHeading eyebrow="05 — Contact" title="Get in Touch" />
              <p className="mt-6 text-sm text-muted-foreground">
               Eager to join a growth-focused team as a full-time SEO Executive.
              </p>
              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a href="tel:+91" className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary">
                    <Phone className="size-4 text-primary" />
                  </a>
                </li>
                <li>
                  <a href="mailto:harshbhatt7579@gmail.com" className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary">
                    <Mail className="size-4 text-primary" /> 
                  </a>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="size-4 text-primary" /> Dehradun, Uttarakhand
                </li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 px-6 py-8">
        <p className="mx-auto max-w-6xl text-xs text-muted-foreground">
          © {new Date().getFullYear()} Harsh Bhatt · SEO Portfolio
        </p>
      </footer>
    </div>
  );
}

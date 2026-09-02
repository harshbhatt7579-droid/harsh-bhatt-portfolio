import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
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
  GraduationCap,
  BadgeCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8, ease: "easeInOut" },
};

const slideInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const staggerItem = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

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
    <motion.form
      action="https://api.web3forms.com/submit"
      method="POST"
      className="surface-card space-y-4 p-6"
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
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
    </motion.form>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
      <p className="text-xs font-medium tracking-[0.2em] text-primary uppercase">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{title}</h2>
      <div className="mt-5 h-px w-16 bg-primary/60" />
    </motion.div>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <motion.div
            initial="initial"
            animate="animate"
          >
            <div className="hidden gap-8 text-sm text-muted-foreground sm:flex">
              <a href="#about" className="transition-colors hover:text-primary">About</a>
              <a href="#skills" className="transition-colors hover:text-primary">Skills</a>
              <a href="#projects" className="transition-colors hover:text-primary">Projects</a>
              <a href="#contact" className="transition-colors hover:text-primary">Contact</a>
            </div>
          </motion.div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section
          className="relative overflow-hidden px-6 py-24 sm:py-32"
          style={{ backgroundImage: "var(--gradient-hero)" }}
        >
          <div className="mx-auto max-w-6xl">
            <motion.p
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-wide text-primary uppercase"
              variants={slideInUp}
              initial="initial"
              animate="animate"
            >
              <MapPin className="size-3.5" /> Dehradun, India
            </motion.p>
            <motion.h1
              className="max-w-3xl text-4xl leading-[1.05] font-bold sm:text-6xl"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              Harsh Bhatt — <span className="text-gradient">Junior SEO Executive</span>
            </motion.h1>
            <motion.p
              className="mt-6 max-w-2xl text-lg text-muted-foreground"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
            >
              Data-driven SEO specialist focused on keyword research, analytics, on-page
              optimization, and AI search trends.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div variants={staggerItem}>
                <Button asChild variant="hero" size="xl">
                  <a href="#projects">View Projects</a>
                </Button>
              </motion.div>
              <motion.div variants={staggerItem}>
                <Button asChild variant="outlineAccent" size="xl">
                  <a href="#contact">Get in Touch</a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-border/60 px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading eyebrow="01 — About" title="About Me" />
            <motion.div
              className="space-y-5 text-muted-foreground"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
            >
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
            </motion.div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="border-t border-border/60 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="02 — Expertise" title="Skills &amp; Tools" />
            <motion.div
              className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
            >
              {skills.map((s) => (
                <motion.div
                  key={s.title}
                  className="surface-card group p-5 transition-colors hover:border-primary/50"
                  variants={staggerItem}
                  whileHover={{ y: -4 }}
                >
                  <s.icon className="size-5 text-primary" />
                  <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="border-t border-border/60 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="03 — Work" title="Projects &amp; Case Studies" />
            <CaseStudies />
          </div>
        </section>


        {/* Certifications */}
        <section className="border-t border-border/60 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="04 — Credentials" title="Certifications &amp; Education" />
            <motion.div
              className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div className="surface-card flex gap-4 p-6" variants={staggerItem}>
                <BadgeCheck className="size-5 shrink-0 text-primary" />
                <div>
                  <h3 className="text-base font-semibold">SEO Certification — Skillwaala</h3>
                  <p className="mt-1 text-sm text-muted-foreground">BR Softech · March 2026</p>
                </div>
              </motion.div>
              <motion.div className="surface-card flex gap-4 p-6" variants={staggerItem}>
                <GraduationCap className="size-5 shrink-0 text-primary" />
                <div>
                  <h3 className="text-base font-semibold">Bachelor of Arts (Multidisciplinary)</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Undergraduate · IGNOU · June 2024–June 2027 (Expected)
                  </p>
                </div>
              </motion.div>
              <motion.div className="surface-card flex gap-4 p-6" variants={staggerItem}>
                <GraduationCap className="size-5 shrink-0 text-primary" />
                <div>
                  <h3 className="text-base font-semibold">Senior Secondary (12th)</h3>
                  <p className="mt-1 text-sm text-muted-foreground">NIOS · 2023–2024</p>
                </div>
              </motion.div>
              <motion.div className="surface-card flex gap-4 p-6" variants={staggerItem}>
                <GraduationCap className="size-5 shrink-0 text-primary" />
                <div>
                  <h3 className="text-base font-semibold">Higher Secondary (10th)</h3>
                  <p className="mt-1 text-sm text-muted-foreground">NIOS · 2019–2020</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-border/60 px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionHeading eyebrow="05 — Contact" title="Get in Touch" />
              <motion.p
                className="mt-6 text-sm text-muted-foreground"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.2 }}
              >
                Open to SEO roles, freelance audits and collaborations.
              </motion.p>
              <motion.ul
                className="mt-8 space-y-4 text-sm"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.li variants={staggerItem} className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="size-4 text-primary" /> Dehradun, Uttarakhand
                </motion.li>
                <motion.li variants={staggerItem}>
                  <a href="mailto:harshbhatt7579@gmail.com" className="text-muted-foreground transition-colors hover:text-primary">
                    harshbhatt7579@gmail.com
                  </a>
                </motion.li>
              </motion.ul>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 px-6 py-8">
        <motion.p
          className="mx-auto max-w-6xl text-xs text-muted-foreground"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          © {new Date().getFullYear()} Harsh Bhatt · SEO Portfolio
        </motion.p>
      </footer>
    </div>
  );
}

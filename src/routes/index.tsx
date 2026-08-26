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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const projects = [
  {
    name: "Local Service Site — Organic Growth Rebuild",
    tag: "On-Page + Technical",
    overview:
      "A regional service business with thin, duplicated pages and no clear keyword targeting. I audited the full site independently, mapped every URL to a single search intent and rebuilt the on-page layer.",
    strategy: [
      "Full keyword research split by intent: informational, commercial and local.",
      "Keyword mapping sheet so no two pages competed for the same query.",
      "Rewrote titles, metas and H1–H3 structure with NLP-driven entity coverage.",
      "Fixed canonical tags and consolidated duplicate service pages.",
    ],
    results: [
      ["Indexed pages", "+38%"],
      ["Avg. position", "24 → 11"],
      ["Impressions (90d)", "+2.1x"],
      ["Duplicate URLs", "-27"],
    ],
  },
  {
    name: "Content Hub — Topic Cluster & AI Search Test",
    tag: "Clustering + AIO/GEO",
    overview:
      "A blog publishing scattered posts with no structure. I designed a pillar-and-cluster model and ran a hands-on test on how content gets surfaced in AI overviews and generative answers.",
    strategy: [
      "Built 4 pillar topics with supporting cluster articles and internal link paths.",
      "Structured answers, FAQs and schema for AI overview eligibility.",
      "Tracked query-level movement in Search Console before and after rollout.",
      "Iterated headings and summaries based on which passages were cited.",
    ],
    results: [
      ["Clicks (90d)", "+64%"],
      ["Ranking keywords", "+180"],
      ["AI overview picks", "9 queries"],
      ["Avg. session depth", "+1.4 pages"],
    ],
  },
];

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(1, "Please write a message").max(1000),
});

function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    const { name, email, message } = parsed.data;
    window.location.href = `mailto:harshbhatt7579@gmail.com?subject=${encodeURIComponent(
      `Portfolio enquiry from ${name}`,
    )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;
    toast.success("Opening your email app with the message ready to send.");
  };

  return (
    <form onSubmit={onSubmit} className="surface-card space-y-4 p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={values.name}
            maxLength={100}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            placeholder="Your name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={values.email}
            maxLength={255}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            placeholder="you@company.com"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          rows={5}
          maxLength={1000}
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
          placeholder="Tell me about your site and what you'd like to rank for."
        />
      </div>
      <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto">
        Send message
      </Button>
    </form>
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
            <h2 className="text-3xl font-bold">About Me</h2>
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
            <h2 className="text-3xl font-bold">Skills &amp; Tools</h2>
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
            <h2 className="text-3xl font-bold">Projects &amp; Case Studies</h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {projects.map((p) => (
                <article key={p.name} className="surface-card p-6">
                  <span className="text-xs font-medium tracking-wider text-primary uppercase">
                    {p.tag}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold">{p.name}</h3>
                  <Tabs defaultValue="overview" className="mt-5">
                    <TabsList className="w-full">
                      <TabsTrigger value="overview" className="flex-1">Overview</TabsTrigger>
                      <TabsTrigger value="strategy" className="flex-1">Strategy Applied</TabsTrigger>
                      <TabsTrigger value="results" className="flex-1">Results</TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview" className="mt-4 text-sm text-muted-foreground">
                      {p.overview}
                    </TabsContent>
                    <TabsContent value="strategy" className="mt-4">
                      <ul className="space-y-2.5 text-sm text-muted-foreground">
                        {p.strategy.map((s) => (
                          <li key={s} className="flex gap-2.5">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                    <TabsContent value="results" className="mt-4">
                      <div className="grid grid-cols-2 gap-3">
                        {p.results.map(([label, value]) => (
                          <div key={label} className="rounded-lg bg-secondary/60 p-4">
                            <div className="font-display text-xl font-bold text-primary">{value}</div>
                            <div className="mt-1 text-xs text-muted-foreground">{label}</div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="border-t border-border/60 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold">Certifications &amp; Education</h2>
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
                  <h3 className="text-base font-semibold">BA Degree (Pursuing)</h3>
                  <p className="mt-1 text-sm text-muted-foreground">IGNOU</p>
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
              <h2 className="text-3xl font-bold">Get in Touch</h2>
              <p className="mt-4 text-sm text-muted-foreground">
                Open to SEO roles, freelance audits and collaborations.
              </p>
              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a href="tel:+917302952577" className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary">
                    <Phone className="size-4 text-primary" /> 7302952577
                  </a>
                </li>
                <li>
                  <a href="mailto:harshbhatt7579@gmail.com" className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary">
                    <Mail className="size-4 text-primary" /> harshbhatt7579@gmail.com
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

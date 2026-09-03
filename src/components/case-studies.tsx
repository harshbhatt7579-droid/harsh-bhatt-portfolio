import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, FileSearch, X } from "lucide-react";

import { Button } from "@/components/ui/button";

type Serp = {
  url: string;
  title: string;
  description: string;
  notes: string[];
};

type Block = { heading: string; points: string[] };

type ComparePair = {
  heading: string;
  about: string;
  beforeLabel: string;
  before: string;
  beforeMeta?: string;
  afterLabel: string;
  after: string;
  afterMeta?: string;
};

type CaseStudy = {
  id: string;
  client: string;
  tag: string;
  title: string;
  summary: string;
  highlights: string[];
  before?: Serp;
  after?: Serp;
  metrics?: { v: string; l: string }[];
  overview?: { heading: string; text: string };
  pairs?: ComparePair[];
  blocks: Block[];
  note: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: "ekostay",
    client: "EkoStay",
    tag: "Personal SEO research",
    title: "Meta Title & Description",
    summary:
      "A self-initiated title tag and meta description assessment for EkoStay, a luxury villa rental platform — evaluating keyword intent, user incentives and SERP structural alignment for high-intent travel queries.",
    highlights: ["Before → After SERP", "Intent-led rewrite", "Truncation control"],
    before: {
      url: "https://www.ekostay.com",
      title: "EkoStay",
      description:
        "Flat 26% off on all properties.gift-icon The Great Getaway sale.Flat 26% OFF on All PROPERTIES. click to call +91 8169019090.",
      notes: [
        "Broken code element rendering as text (gift-icon).",
        "Aggressive ALL CAPS reducing readability.",
        '"FLAT 26% OFF" repeated twice, wasting characters.',
        'Generic term "properties" with weak entity signal.',
        "Long title at risk of truncation on mobile.",
      ],
    },
    after: {
      url: "https://www.ekostay.com",
      title: "Book Private Villa with Pool: Flat 26% Off | EkoStay",
      description:
        "The Great Getaway Sale is live! Book luxury private villas with pools at EkoStay and get a flat 26% off. Reserve online or call +91 8169019090.",
      notes: [
        'Direct CTA ("Book") plus a value hook ("Flat 26% Off").',
        "Sentence case, clean and professional presentation.",
        '"Luxury private villas with pools" as a precise entity.',
        "Dual CTA — reserve online or call.",
        "52-char title, description under 150 — zero truncation.",
      ],
    },
    metrics: [
      { v: "52", l: "Title characters" },
      { v: "<150", l: "Description characters" },
      { v: "0", l: "Broken elements left" },
      { v: "2", l: "Conversion paths" },
    ],
    blocks: [
      {
        heading: "Strategic focus",
        points: [
          "Theoretical title framework built on semantic search patterns.",
          "Transactional intent matched to accommodation requirements.",
          "Value-based hook tested against competing SERP listings.",
        ],
      },
      {
        heading: "Execution",
        points: [
          "Technical cleanup of broken text and casing.",
          "Entity-specific rewrite of the core offering.",
          "Promotional hook consolidated into one mention.",
        ],
      },
      {
        heading: "Technical alignment",
        points: [
          "Clear Intent + Benefit + Brand boundaries for NLP parsing.",
          "Readable, scannable formatting for users and crawlers.",
          "Display thresholds respected across mobile and desktop.",
        ],
      },
    ],
    note: "Self-initiated research exercise. No client performance data is claimed.",
  },
  {
    id: "on-page-audit",
    client: "example.com",
    tag: "SEO audit exercise",
    title: "SEO Audit Case-Study: Analyzing Optimization",
    summary:
      "This project involved conducting a comprehensive SEO audit of example.com to identify critical optimization opportunities. The scope of the audit focused on improving site visibility and user experience through strategic on-page element optimization. Key areas analyzed included H1 tags, meta descriptions, URL structures, and page titles. The main solution provided involved refining these elements for clarity, accurate character counts, and targeted keyword usage, ensuring alignment with modern AI search techniques without altering the core business intent.",
    highlights: ["URL structure", "H1 hierarchy", "AI-search aligned"],
    overview: {
      heading: "Overview",
      text: "This project involved conducting a comprehensive SEO audit of example.com to identify critical optimization opportunities. The scope of the audit focused on improving site visibility and user experience through strategic on-page element optimization. Key areas analyzed included H1 tags, meta descriptions, URL structures, and page titles. The main solution provided involved refining these elements for clarity, accurate character counts, and targeted keyword usage, ensuring alignment with modern AI search techniques without altering the core business intent.",
    },
    pairs: [
      {
        heading: "URL Optimization",
        about:
          "This section outlines the URL optimization strategy, focusing on shortening the URL structure, improving clarity, and ensuring the inclusion of 'www' to create a more readable and SEO-friendly web address.",
        beforeLabel: "Original URL",
        before: "https://example.com/seo-strategies-for-2026-bridging-ai-and-traditional-search/",
        afterLabel: "Optimised URL",
        after: "https://www.example.com/seo-strategies-2026/",
      },
      {
        heading: "H1 Optimization",
        about:
          "The main heading was refined to align perfectly with the target topic and ensure clarity for both the audience and search engines. Additionally, the size of the heading was adjusted to optimize the visual hierarchy and page layout.",
        beforeLabel: "Original H1",
        before: "Effective SEO Strategies 2026: Bridging AI and Traditional Search Methods for Business",
        afterLabel: "Optimised H1",
        after: "2026 SEO Strategies: Bridging AI and Traditional Search",
      },
      {
        heading: "Title Optimization",
        about:
          "The title was refined to seamlessly incorporate primary keywords while maintaining the optimal character length, ensuring both search engine relevance and user click-through potential.",
        beforeLabel: "Original Title",
        before: "SEO Strategies for 2026: Bridging AI and Traditional Search –",
        beforeMeta: "Title length 73 · Pixel width 674",
        afterLabel: "Optimised Title",
        after: "2026 SEO Strategies: Bridging AI and Traditional Search",
        afterMeta: "Title length 54",
      },
      {
        heading: "Description Optimisation",
        about:
          "The Meta Description was crafted to offer clear, direct value to the reader. By avoiding forceful calls-to-action and focusing on actionable insights for 2026 SEO, it establishes authority and relevance naturally.",
        beforeLabel: "Original Meta Description",
        before:
          "Learn the most effective search engine optimization strategies for 2026 to boost your Google rankings, drive organic traffic, and master modern AI search techniques with our complete step-by-step guide for businesses.",
        beforeMeta: "Length 217",
        afterLabel: "Optimised Meta Description",
        after:
          "Discover effective 2026 SEO strategies to boost your Google rankings, drive organic traffic, and master modern AI search techniques with our complete guide.",
        afterMeta: "Length 156",
      },
    ],
    blocks: [
      {
        heading: "Impact & Key Takeaways",
        points: [
          "Enhanced Search Visibility: Aligning URLs, H1 headers, and meta tags ensures search engines correctly index and rank the content for targeted 2026 SEO queries.",
          "Improved User Engagement: Clear, informative titles and descriptions improve click-through rates (CTR) by directly matching user search intent.",
          "Optimized Visual Hierarchy: Structural H1 adjustments maintain a clean content hierarchy, improving readability and overall user experience.",
        ],
      },
    ],
    note: "Audit exercise on a sample domain. No client performance data is claimed.",
  },
];

function SerpCard({ serp, variant }: { serp: Serp; variant: "before" | "after" }) {
  const isAfter = variant === "after";
  return (
    <div
      className={
        isAfter
          ? "rounded-xl border border-primary/40 bg-primary/5 p-5"
          : "rounded-xl border border-border/60 bg-background/50 p-5"
      }
    >
      <p
        className={
          isAfter
            ? "text-[11px] font-semibold tracking-[0.18em] text-primary uppercase"
            : "text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase"
        }
      >
        {isAfter ? "After — proposed snippet" : "Before — original snippet"}
      </p>
      <div className="mt-4 rounded-lg border border-border/50 bg-card/60 p-4">
        <p className="text-xs text-muted-foreground">{serp.url}</p>
        <p className={`mt-1 text-base font-medium ${isAfter ? "text-primary" : "text-silver"}`}>
          {serp.title}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">{serp.description}</p>
      </div>
      <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
        {serp.notes.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

function CaseStudyDetail({ study, onClose }: { study: CaseStudy; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <>
      <motion.div
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.aside
        className="fixed top-0 right-0 z-50 h-full w-full max-w-3xl overflow-y-auto border-l border-border/60 bg-card shadow-2xl"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        role="dialog"
        aria-modal="true"
        aria-label={`${study.client} case study`}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border/60 bg-card/95 px-6 py-4 backdrop-blur">
          <span className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Case Study · {study.client}
          </span>
          <button
            onClick={onClose}
            aria-label="Close case study"
            className="rounded-full border border-border/60 p-2 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="px-6 py-8 sm:px-8">
          <h3 className="text-2xl font-semibold sm:text-3xl">{study.title}</h3>
          <p className="mt-3 text-sm text-muted-foreground">{study.summary}</p>

          {study.before && study.after && (
            <div className="mt-8 grid gap-5">
              <SerpCard serp={study.before} variant="before" />
              <SerpCard serp={study.after} variant="after" />
            </div>
          )}

          {study.metrics && (
            <div className="mt-6 grid gap-3 sm:grid-cols-4">
              {study.metrics.map((m) => (
                <div key={m.l} className="rounded-lg border border-border/60 p-4">
                  <p className="text-lg font-semibold text-primary">{m.v}</p>
                  <p className="text-xs text-muted-foreground">{m.l}</p>
                </div>
              ))}
            </div>
          )}

          <div className="mt-8 grid gap-6 border-t border-border/60 pt-8 text-sm sm:grid-cols-2">
            {study.blocks.map((b) => (
              <div key={b.heading}>
                <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                  {b.heading}
                </p>
                <ul className="mt-2 space-y-1.5 text-muted-foreground">
                  {b.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-muted-foreground">{study.note}</p>
        </div>
      </motion.aside>
    </>
  );
}

export function CaseStudies() {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = caseStudies.find((c) => c.id === openId) ?? null;

  return (
    <>
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {caseStudies.map((study) => (
          <motion.article
            key={study.id}
            className="surface-card flex flex-col p-7 transition-colors hover:border-primary/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4 }}
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <FileSearch className="size-5 text-primary" />
                <span className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
                  Case Study · {study.client}
                </span>
              </div>
              <span className="rounded-full border border-silver/30 px-3 py-1 text-[11px] tracking-wide text-silver uppercase">
                {study.tag}
              </span>
            </div>

            <h3 className="mt-4 text-xl font-semibold sm:text-2xl">{study.title}</h3>
            <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{study.summary}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {study.highlights.map((h) => (
                <span
                  key={h}
                  className="rounded-full border border-border/60 px-3 py-1 text-[11px] text-muted-foreground"
                >
                  {h}
                </span>
              ))}
            </div>

            <div className="mt-7">
              {study.id === "on-page-audit" ? (
                <span className="inline-flex items-center gap-2 rounded-full border border-silver/30 px-4 py-2 text-xs text-silver/70">
                  Coming soon
                </span>
              ) : (
                <Button variant="outlineAccent" onClick={() => setOpenId(study.id)}>
                  View full case study <ArrowRight className="size-4" />
                </Button>
              )}
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {active && <CaseStudyDetail study={active} onClose={() => setOpenId(null)} />}
      </AnimatePresence>
    </>
  );
}

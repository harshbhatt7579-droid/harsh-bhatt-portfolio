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
    title: "On-Page Audit — URL, H1, Title & Description",
    summary:
      "A comprehensive on-page SEO audit identifying optimization opportunities across H1 tags, meta descriptions, URL structure and page titles — refined for clarity, accurate character counts and targeted keyword usage without altering core business intent.",
    highlights: ["URL structure", "H1 hierarchy", "AI-search aligned"],
    blocks: [
      {
        heading: "URL optimization",
        points: [
          "Shortened the URL structure for readability.",
          'Ensured inclusion of "www" for a consistent canonical host.',
          "Clearer, SEO-friendly slug aligned to the page topic.",
        ],
      },
      {
        heading: "H1 optimization",
        points: [
          "Refined the main heading to align exactly with the target topic.",
          "Improved clarity for both readers and search engines.",
          "Adjusted heading size to correct visual hierarchy and layout.",
        ],
      },
      {
        heading: "Title optimization",
        points: [
          "Primary keywords incorporated naturally into the title.",
          "Kept within optimal character length to avoid truncation.",
          "Balanced search relevance with click-through potential.",
        ],
      },
      {
        heading: "Description optimization",
        points: [
          "Written to offer clear, direct value to the reader.",
          "Avoided forceful calls-to-action in favour of actionable insight.",
          "Framed around 2026 SEO practice to establish authority naturally.",
        ],
      },
      {
        heading: "Impact & key takeaways",
        points: [
          "Enhanced search visibility: aligned URLs, H1s and meta tags help engines index and rank the content for targeted queries.",
          "Improved user engagement: clear titles and descriptions match search intent and support CTR.",
          "Optimized visual hierarchy: structural H1 adjustments keep a clean content hierarchy and better readability.",
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
              <Button variant="outlineAccent" onClick={() => setOpenId(study.id)}>
                View full case study <ArrowRight className="size-4" />
              </Button>
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

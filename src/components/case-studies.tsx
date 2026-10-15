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

type ArticleBlock = { h?: string; p?: string[]; ul?: string[] };

type ArticleDoc = {
  url: string;
  title: string;
  blocks: ArticleBlock[];
  notes: string[];
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
  articleBefore?: ArticleDoc;
  articleAfter?: ArticleDoc;
  metrics?: { v: string; l: string }[];
  overview?: { heading: string; text: string };
  pairs?: ComparePair[];
  blocks: Block[];
  note: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: "ekostay",
    client: "E••••••",
    tag: "Personal SEO research",
    title: "Meta Title & Description",
    summary:
      "A self-initiated title tag and meta description assessment for E••••••, a luxury villa rental platform — evaluating keyword intent, user incentives and SERP structural alignment for high-intent travel queries.",
    highlights: ["Before → After SERP", "Intent-led rewrite", "Truncation control"],
    before: {
      url: "https://www.e••••••.com",
      title: "E••••••",
      description:
        "Flat 26% off on all properties.gift-icon The Great Getaway sale.Flat 26% OFF on All PROPERTIES. click to call +91 8•••••••••.",
      notes: [
        "Broken code element rendering as text (gift-icon).",
        "Aggressive ALL CAPS reducing readability.",
        '"FLAT 26% OFF" repeated twice, wasting characters.',
        'Generic term "properties" with weak entity signal.',
        "Long title at risk of truncation on mobile.",
      ],
    },
    after: {
      url: "https://www.e••••••.com",
      title: "Book Private Villa with Pool: Flat 26% Off | E••••••",
      description:
        "The Great Getaway Sale is live! Book luxury private villas with pools at E•••••• and get a flat 26% off. Reserve online or call +91 8•••••••••.",
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
    note: "No client performance data is claimed.",
  },
  {
    id: "content-optimisation",
    client: "example.com",
    tag: "Content optimisation",
    title: "Content Optimisation: Rewriting a Blog Page for Search & AI Visibility",
    summary:
      "A full content optimisation pass on a long-form SEO blog page. The original article was a single wall of text with no heading hierarchy, no scannable structure and no clear intent per section. The rewrite keeps the same subject and business intent, but restructures it into entity-led sections, direct-answer openings and scannable formatting so both search crawlers and AI answer engines can extract it.",
    highlights: ["Before → After article", "Heading hierarchy", "Scannable & extractable"],
    articleBefore: {
      url: "https://example.com/blog/2026/01/seo-guide-full-updated-post-final/",
      title: "SEO Guide 2026 – Everything You Need To Know About SEO",
      blocks: [
        {
          p: [
            "In this article we are going to discuss everything about SEO in 2026, SEO fundamentals and what you should do for your website. SEO stands for search engine optimization and it is the process of optimizing your website so that it can rank higher on Google and other search engines like Bing, and nowadays there are also AI tools like ChatGPT, Gemini and Perplexity where people are searching, so SEO is very important for every business in 2026 and if you are not doing SEO then you are losing traffic and customers.",
            "First of all you should know that search engines use crawlers which are also called spiders and these crawlers crawl your website and store your pages in the index, and after that when someone searches something the search engine shows the results, so you have to make sure your website is crawlable and indexable otherwise nothing will work. Also there are different types of search intent like informational, commercial, transactional and navigational and you should always keep intent in mind while doing keyword research because keywords are the base of SEO and without keywords you cannot rank.",
            "Now coming to content, content is king as everyone says and Google likes quality content, so you should write good quality content which is helpful for users and Google has a framework called E-E-A-T which means experience, expertise, authoritativeness and trustworthiness and you should follow it. Also you should do on page SEO which includes title tag, meta description, headings, URL structure, image alt text and internal linking, and off page SEO which includes backlinks and brand mentions and local SEO like Google Business Profile, and technical SEO like sitemap, robots.txt and page speed also matters a lot for rankings.",
            "So in conclusion SEO in 2026 is not very different but it is also different because of AI, and if you follow all the above SEO tips and tricks and keep updating your content regularly then you will definitely see improvement in your rankings and traffic. If you want to know more about SEO then keep reading our blog for more SEO tips.",
          ],
        },
      ],
      notes: [
        "One H1 followed by four unbroken paragraphs — no H2/H3 hierarchy at all.",
        "Every topic (crawling, intent, content, on-page, off-page, technical) is buried inside one paragraph.",
        "Answers arrive at the end of sentences, so nothing is extractable as a direct answer.",
        "Repetitive filler (\"SEO is very important\", \"tips and tricks\") inflates length without adding value.",
        "URL carries dates and \"full-updated-post-final\"; title runs past display limits.",
        "No lists, no bold key terms, no defined entities for AI models to cite.",
      ],
    },
    articleAfter: {
      url: "https://example.com/seo-in-2026/",
      title: "SEO in 2026: Search, AI Answer Engines & GEO",
      blocks: [
        {
          h: "1. What is SEO in 2026?",
          p: [
            "Search Engine Optimization (SEO) in 2026 is no longer defined solely by ranking in the traditional “top 10 organic links” on Google or Bing. While foundational search principles remain vital, modern SEO encompasses visibility across an entire ecosystem of AI-driven search engines, Large Language Models (LLMs), and direct answer engines like ChatGPT, Gemini, and Perplexity.",
            "Today, effective SEO bridges traditional Search Engine Optimization with Generative Engine Optimization (GEO) — ensuring your brand is not only indexed by search crawlers but also cited, extracted, and recommended by AI language models.",
          ],
        },
        {
          h: "The Shift: Traditional SEO vs. AI Search (GEO)",
          ul: [
            "Search Engine Crawling & Indexing: Search engines rely on web crawlers (spiders) to discover pages and store them in an index. Traditional optimization focuses on matching user Search Intent (Informational, Commercial, Navigational, Transactional) through optimized keywords, meta tags, and structured data.",
            "LLM Citations & AI Overviews: AI platforms synthesize information directly from authoritative sources across the web. Instead of targeting fixed keyword volume alone, 2026 SEO focuses on Prompt Research, clear entity relationships, and unstructured content readability so AI models can cite your brand in direct answers.",
          ],
        },
        {
          h: "The Core Pillars of Modern SEO",
          ul: [
            "Entity-Based Content & E-E-A-T: Search algorithms evaluate content based on Experience, Expertise, Authoritativeness, and Trustworthiness. Establishing clear entities (people, products, and concepts) helps search engines and AI models recognize your site as a trusted primary source.",
            "Technical Accessibility: Clean XML sitemaps, fast load times (Core Web Vitals), and proper robots.txt directives so both traditional bots and AI crawlers can access your content without friction.",
            "Omnichannel Brand Presence: Beyond your own site, algorithms assess third-party citations, user reviews, forums (like Reddit), and digital PR to gauge brand authority across the wider web.",
          ],
        },
        {
          h: "2. Keyword & Prompt Research",
          p: [
            "Traditional keyword research is no longer just about search volume; in 2026, it is about understanding user intent across both traditional search engines and AI conversational models.",
          ],
          ul: [
            "Informational: The user wants to learn something (e.g., “What is AI search?”).",
            "Commercial: The user is evaluating options before buying (e.g., “Best SEO tools for beginners”).",
            "Transactional: The user is ready to make a purchase or take action (e.g., “Buy Semrush subscription”).",
            "Navigational: The user is looking for a specific website or page (e.g., “Google Search Console login”).",
          ],
        },
        {
          h: "From Keywords to AI Prompt Research",
          ul: [
            "Keyword Research: Targets broad search terms, search volume, and Keyword Difficulty (KD%) to rank on Google and Bing.",
            "Prompt Research: Analyzes natural language questions and multi-turn prompts entered into AI tools like ChatGPT, Gemini, and Perplexity. Optimizing for prompts helps content get extracted as an AI Overview citation.",
          ],
        },
        {
          h: "3. Quality Content & E-E-A-T",
          p: [
            "Creating content in 2026 requires more than just meeting a word count. Search engines and AI answer engines prioritize helpful, reliable, and expert-driven content that directly addresses user needs.",
          ],
          ul: [
            "Experience: First-hand or real-world experience with the topic (e.g., actual product testing or personal case studies).",
            "Expertise: Demonstrated knowledge, qualifications, or credentials of the content creator.",
            "Authoritativeness: Recognition as a go-to source through citations, reviews, and backlinks.",
            "Trustworthiness: The most critical pillar — factual accuracy, site security (HTTPS), transparent contact details, and clear editorial policies.",
          ],
        },
        {
          h: "Structuring High-Quality Content",
          ul: [
            "Lead with Direct Value: Open each section by answering the main question immediately before diving into context or examples.",
            "Optimize for Scannability: Short paragraphs, clear H2/H3 subheadings, bulleted lists, and bold text so readers and AI crawlers can parse key information.",
            "Include Original Insights: Unique data, visual evidence, expert quotes, or proprietary media to differentiate content from AI-generated summaries.",
          ],
        },
        {
          h: "4. On-Page SEO & User Experience (UX)",
          p: [
            "On-page SEO focuses on optimizing individual web pages to help search engines understand your content structure while providing a seamless user experience.",
          ],
          ul: [
            "Title Tags: 50–60 characters, primary keyword included, page value clearly described to maximize CTR.",
            "Meta Descriptions: Concise summaries (under 105 characters) with a clear Call to Action.",
            "Heading Hierarchy (H1–H3): A single H1 for the main topic, H2s for main sections, H3s for supporting details.",
            "URL Structure: Clean, short, hyphen-separated URLs containing the primary keyword (e.g., /seo-guide-2026/).",
            "Image Optimization: Descriptive Alt text for visual search and compressed next-gen formats (WebP) for faster loading.",
          ],
        },
        {
          h: "5. Off-Page SEO & Building Brand Authority",
          p: [
            "Off-page SEO involves actions taken outside your own website to impact rankings within Search Engine Results Pages (SERPs) and AI answer engines.",
          ],
          ul: [
            "High-Quality Backlinks: Links from reputable, industry-relevant websites act as votes of confidence for search algorithms.",
            "Unlinked Brand Mentions: Search engines and LLMs monitor brand mentions across forums, news outlets, and review platforms.",
            "Local SEO & Profiles: An optimized Google Business Profile and regional directories capture local intent and “visit-in-person” queries.",
          ],
        },
        {
          h: "Conclusion: Mastering SEO in 2026",
          p: [
            "SEO is an evolving discipline that bridges technical optimization with high-value content. By combining traditional search best practices (keyword research, technical crawling, on-page tags) with modern AI requirements (GEO, prompt research, and E-E-A-T), you can build a sustainable digital presence that ranks on search engines and gets cited across AI answer engines.",
          ],
        },
      ],
      notes: [
        "Single H1 with numbered H2 sections — a clean, crawlable hierarchy.",
        "Each section opens with a direct answer before context, matching AI extraction patterns.",
        "Definitions converted to labelled bullets so entities are machine-readable.",
        "Filler and repetition removed; every line carries a distinct point.",
        "Shortened, keyword-led URL and a title within display limits.",
        "Coverage extended to GEO, prompt research and E-E-A-T, which the original never defined.",
      ],
    },
    blocks: [
      {
        heading: "Strategic focus",
        points: [
          "Preserve the original topic and business intent — restructure, not rewrite the message.",
          "Map one clear question to one section so each block can stand alone as an answer.",
          "Define entities (GEO, E-E-A-T, search intent) explicitly instead of implying them.",
        ],
      },
      {
        heading: "Execution",
        points: [
          "Split the wall of text into a numbered H2/H3 hierarchy under a single H1.",
          "Converted buried definitions into labelled bullet lists.",
          "Removed filler phrasing and duplicate claims, tightened the URL and title.",
        ],
      },
      {
        heading: "Impact & Key Takeaways",
        points: [
          "Scannability: readers can locate any subtopic without reading the full page.",
          "Extractability: direct-answer openings give AI answer engines a clean citation unit.",
          "Topical depth: GEO and prompt research close the gaps the original left open.",
        ],
      },
    ],
    note: "This case study reflects optimization strategies executed for an active, real-world project. To protect client confidentiality and NDA agreements, domain identifiers have been anonymized using example.com. Full performance data, methodology, and verified audit reports are available upon request for review.",
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

function ArticleCard({ doc, variant }: { doc: ArticleDoc; variant: "before" | "after" }) {
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
        {isAfter ? "After — optimised article" : "Before — original article"}
      </p>

      <div className="mt-4 overflow-hidden rounded-lg border border-border/50 bg-card/60">
        <div className="flex items-center gap-2 border-b border-border/50 bg-background/60 px-3 py-2">
          <span className="size-2 rounded-full bg-muted-foreground/40" />
          <span className="size-2 rounded-full bg-muted-foreground/30" />
          <span className="size-2 rounded-full bg-muted-foreground/20" />
          <span className="ml-2 truncate rounded bg-card/80 px-2 py-0.5 text-[11px] text-muted-foreground">
            {doc.url}
          </span>
        </div>
        <div className="max-h-[420px] overflow-y-auto px-5 py-5">
          <h5
            className={`text-lg leading-snug font-bold ${isAfter ? "text-primary" : "text-silver"}`}
          >
            {doc.title}
          </h5>
          <div className="mt-4 space-y-4">
            {doc.blocks.map((b, i) => (
              <div key={i} className="space-y-2">
                {b.h && (
                  <p className="text-sm font-semibold text-silver">{b.h}</p>
                )}
                {b.p?.map((t) => (
                  <p key={t} className="text-sm leading-relaxed text-muted-foreground">
                    {t}
                  </p>
                ))}
                {b.ul && (
                  <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground">
                    {b.ul.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
        {doc.notes.map((n) => (
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
          {!study.overview && <p className="mt-3 text-sm text-muted-foreground">{study.summary}</p>}

          {study.overview && (
            <div className="mt-6 rounded-xl border border-border/60 bg-background/40 p-5">
              <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                {study.overview.heading}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {study.overview.text}
              </p>
            </div>
          )}

          {study.before && study.after && (
            <div className="mt-8 grid gap-5">
              <SerpCard serp={study.before} variant="before" />
              <SerpCard serp={study.after} variant="after" />
            </div>
          )}

          {study.articleBefore && study.articleAfter && (
            <div className="mt-8 grid gap-6">
              <ArticleCard doc={study.articleBefore} variant="before" />
              <ArticleCard doc={study.articleAfter} variant="after" />
            </div>
          )}


          {study.pairs && (
            <div className="mt-8 space-y-6">
              {study.pairs.map((p) => (
                <div key={p.heading} className="rounded-xl border border-border/60 p-5">
                  <h4 className="text-base font-semibold text-silver">{p.heading}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.about}</p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-lg border border-border/60 bg-background/50 p-4">
                      <p className="text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                        {p.beforeLabel}
                      </p>
                      <p className="mt-2 text-sm break-words text-silver/80">{p.before}</p>
                      {p.beforeMeta && (
                        <p className="mt-2 text-xs text-muted-foreground">{p.beforeMeta}</p>
                      )}
                    </div>
                    <div className="rounded-lg border border-primary/40 bg-primary/5 p-4">
                      <p className="text-[11px] font-semibold tracking-[0.18em] text-primary uppercase">
                        {p.afterLabel}
                      </p>
                      <p className="mt-2 text-sm break-words text-primary">{p.after}</p>
                      {p.afterMeta && (
                        <p className="mt-2 text-xs text-muted-foreground">{p.afterMeta}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
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

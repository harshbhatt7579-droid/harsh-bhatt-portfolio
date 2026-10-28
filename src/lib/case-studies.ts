import auditCover from "@/assets/01-pagespeed-diagnostics.jpg.asset.json";
import imgPagespeedDiagnostics from "@/assets/01-pagespeed-diagnostics.jpg.asset.json";
import imgPagespeedScores from "@/assets/02-pagespeed-scores.jpg.asset.json";
import imgGscUrlInspection from "@/assets/03-gsc-url-inspection.jpg.asset.json";
import imgRichResultsBefore from "@/assets/04-rich-results-before.jpg.asset.json";
import imgRichResultsAfter from "@/assets/05-rich-results-after.jpg.asset.json";
import imgBlogThumbnail from "@/assets/06-blog-thumbnail.jpg.asset.json";
import imgCwvTrend from "@/assets/07-cwv-mobile-trend.jpg.asset.json";
import imgCwvIssues from "@/assets/08-cwv-issues-table.jpg.asset.json";

// Categories for the filter pills. Add a new category here, then use it on a
// case study below and the pill appears automatically.
export const caseStudyCategories = [
  "Technical SEO Audit",
  "On-Page SEO Audit",
  "Off-Page / Link Building",
  "Keyword Research",
  "Content Strategy",
] as const;

export type CaseStudyCategory = (typeof caseStudyCategories)[number];

export interface CaseStudyImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface CaseStudyFinding {
  heading: string;
  subheading?: string;
  paragraphs: string[];
  images: CaseStudyImage[];
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string; // max 60 characters, shown in full on the card
  category: CaseStudyCategory;
  description?: string;
  images: CaseStudyImage[]; // cover = images[0]; count is images.length
  intro?: string;
  findings: CaseStudyFinding[];
}

// Content is kept exactly as supplied in the Technical SEO Audit document.
const auditImages = {
  pagespeedDiagnostics: {
    src: imgPagespeedDiagnostics.url,
    alt: "PageSpeed Insights diagnostics list",
    caption: "PageSpeed Insights: diagnostics",
  },
  pagespeedScores: {
    src: imgPagespeedScores.url,
    alt: "PageSpeed Insights desktop scores of 100 for Performance, Best Practices and SEO",
    caption: "PageSpeed Insights: Desktop scores",
  },
  gscUrlInspection: {
    src: imgGscUrlInspection.url,
    alt: "Search Console URL Inspection showing indexing not allowed because of noindex",
    caption: "Google Search Console: URL Inspection result",
  },
  richResultsBefore: {
    src: imgRichResultsBefore.url,
    alt: "Rich Results Test before the fix, with no items detected",
    caption: "Rich Results Test: before — no items detected",
  },
  richResultsAfter: {
    src: imgRichResultsAfter.url,
    alt: "Rich Results Test after the fix, with 2 valid items detected",
    caption: "Rich Results Test: after — 2 valid items detected",
  },
  blogThumbnail: {
    src: imgBlogThumbnail.url,
    alt: "Blog listing thumbnail for the client's campaign page",
    caption: "Blog listing: thumbnail display",
  },
  cwvTrend: {
    src: imgCwvTrend.url,
    alt: "Core Web Vitals mobile trend moving from need improvement to good",
    caption: "Search Console, Core Web Vitals (Mobile)",
  },
  cwvIssues: {
    src: imgCwvIssues.url,
    alt: "Core Web Vitals table listing the INP and LCP mobile issues",
    caption: "Why URLs aren't considered good",
  },
} satisfies Record<string, CaseStudyImage>;

const technicalSeoAudit: CaseStudy = {
  id: "technical-seo-audit",
  slug: "technical-seo-audit",
  title: "Technical SEO Audit — Site Speed, LCP, Indexing, Schema",
  category: "Technical SEO Audit",
  description:
    "Four real-world audits across site speed, Core Web Vitals, indexing and structured data.",
  images: [
    {
      src: auditCover.url,
      alt: auditImages.pagespeedDiagnostics.alt,
    },
    auditImages.pagespeedDiagnostics,
    auditImages.pagespeedScores,
    auditImages.gscUrlInspection,
    auditImages.richResultsBefore,
    auditImages.richResultsAfter,
    auditImages.blogThumbnail,
    auditImages.cwvTrend,
    auditImages.cwvIssues,
  ],
  intro:
    "Four real-world audits across site speed, Core Web Vitals, indexing and structured data. Each one shows what I found, how I found it, and what I recommended.",
  findings: [
    {
      heading: "Site Speed: Gzip off, too many requests",
      subheading: "Server settings and page weight",
      paragraphs: [
        "The investigation revealed two things. Gzip was disabled on the server, so the HTML, CSS, and JS files were being sent to the browser without being compressed.",
        "On top of that, around 30 requests were being made as soon as the page loaded, most of which were for large images and various JS scripts.",
        "Enabling Gzip and minifying and combining files can make the page significantly lighter and faster.",
      ],
      images: [auditImages.pagespeedDiagnostics],
    },
    {
      heading: "LCP: The main image was at the back of the line",
      subheading: "Largest Contentful Paint",
      paragraphs: [
        "The browser was loading the large image that appears first on the page along with everything else.",
        'We told the developer team to add fetchpriority="high" to that image so it would be fetched first, allowing the page\'s main content to appear quickly.',
      ],
      images: [auditImages.pagespeedScores],
    },
    {
      heading: "Noindex: The page was live but hidden from Google",
      subheading: "Google Search Console · URL Inspection",
      paragraphs: [
        'When the page was entered into Search Console\'s URL Inspection, both crawl and fetch were successful, but "Indexing allowed?" showed "No." The reason was the noindex in the robots meta tag.',
        "As long as this tag is there, the page won't appear in search. The correct course of action is to remove the tag and then request indexing again.",
      ],
      images: [auditImages.gscUrlInspection],
    },
    {
      heading: "Schema markup: Missing from essential pages",
      subheading: "Structured data",
      paragraphs: [
        "I opened the source of the Home, About, and FAQ pages and found no schema on any of them. Schema tells Google what a page is about.",
        "It's best to add Organization markup to the Home and About pages, and FAQPage to the FAQ page, then check it with the Rich Results Test.",
      ],
      images: [auditImages.richResultsBefore, auditImages.richResultsAfter],
    },
    {
      heading: "Thumbnail: Image cropping on the blog listing",
      subheading: "Blog listing · Image display",
      paragraphs: [
        "On the blog listing page, the thumbnail was getting cropped, which looked off and meant the full image wasn't visible. I reported this to the tech team and asked them to share the correct thumbnail dimensions (width and height in pixels), so that thumbnails could be created to that exact size.",
        "With the right dimensions in place, the image now displays in full without any cropping.",
      ],
      images: [auditImages.blogThumbnail],
    },
    {
      heading: "Core Web Vitals: Issues with LCP and INP on mobile",
      subheading: "Google Search Console · Core Web Vitals",
      paragraphs: [
        "The Search Console Core Web Vitals report showed two issues on mobile: LCP (Largest Contentful Paint) over 2.5 seconds and INP (Interaction to Next Paint) over 200ms. I investigated why the main content was taking so long to load and where the delay was coming from in the page rendering after user interactions.",
        'Based on this, I provided suggestions for improvements to the tech team. After that, the number of URLs in the "Need improvement" category gradually decreased and they started to turn green.',
      ],
      images: [auditImages.cwvTrend, auditImages.cwvIssues],
    },
  ],
};

export const caseStudies: CaseStudy[] = [technicalSeoAudit];

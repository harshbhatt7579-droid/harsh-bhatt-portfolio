# Portfolio proof pages

## What will change
- Create four standalone proof pages: On-Page SEO, Off-Page SEO, Technical Audit, and one combined Analysis & Reporting page.
- Show only user-provided evidence in the matching page. Preserve supplied screenshots and video unchanged; do not infer blurred labels or add performance claims.
- Keep Off-Page SEO and Technical Audit pages honest and minimal where proof has not been supplied.
- Keep the homepage, project name, domain, colors, and existing font choices unchanged. Do not add cross-links between proof pages.

## Technical details
- Use the existing typed `/case/$slug` route pattern with four fixed slugs and page-specific noindex metadata.
- Store the original uploaded media as Lovable Assets pointers and render from those pointers without editing the media.
- Use the prior exact on-page audit captures and recording on the On-Page page, and the Google Search Console captures on Analysis & Reporting.
- Preserve route-specific titles and descriptions; keep case data limited to verified labels and original proof.
- Check the preview error/build log and open each page directly to confirm the page stands alone.
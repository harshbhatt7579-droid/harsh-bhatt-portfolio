# Portfolio update

## What will change
- Update the homepage title and social titles to “SEO Specialist,” remove Lovable-branded author/site metadata, and keep the current site address unchanged.
- Replace the three existing draft case studies with the requested short message and a contact button. Keep the homepage design and education details as they are.
- Simplify the About and Skills descriptions, and use the requested contact sentence.
- Add one reusable, unlisted case-study page format. Keep it empty until real case details are supplied; require a page-specific title, description, and share image, and hide proof images unless they are confirmed brand-blurred.

## Technical details
- Store only supplied case details in a typed data file and render them through `/case/$slug`; pages will be `noindex` and will not be linked from the homepage.
- Remove the current case-study display code and add the new route and metadata without changing homepage styling or domain.

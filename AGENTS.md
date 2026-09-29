<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project structure
- Shared site chrome and editorial building blocks live in `src/components/site/` (Header, Footer, PageShell, Reveal, SectionHeading, StoreMap, WhatsAppCta); route files compose them. Keeps the five marketing pages visually consistent.
- Store contact/business facts live only in `src/lib/site.ts` so they change in one place.

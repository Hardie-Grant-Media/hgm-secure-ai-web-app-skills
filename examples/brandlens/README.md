# Building Brandlens with AI

Brandlens tracks how brands are discussed online. HGM used AI to plan, build and test the app while people controlled the scope, access and release decisions.

This sanitised case study excludes credentials, private project details, source passages, private URLs and raw AI responses.

## The AI development process

1. **People set the brief.** HGM approved the users, required features, data, limits and success measures before AI changed anything.
2. **AI planned the build.** The approved brief became a technical plan covering access, data, testing and clear stop points.
3. **AI built in staging.** Work stayed on a feature branch and one test backend. Supabase MCP provided narrow development access, not permission to release.
4. **Evidence supported deployment.** Automated checks and a real browser proved the key journeys. Approved GitHub changes now deploy automatically through Netlify.

AI accelerated the technical work. It did not decide the product or approve its own release.

## YAGNI: build only what is needed now

The first release included only features tied to an approved requirement:

- a shared brand portfolio
- manager and viewer access
- daily public-source scans
- sentiment evidence and trends

Alerts, exports, competitor comparisons, social account connections and custom reporting stayed out because they were not needed for the first release.

## KISS: choose the simplest secure design

The build used:

- one React web app
- one Supabase backend
- two clear staff roles
- server-side AI calls and secrets
- one GitHub-to-Netlify release path

This reused HGM's standard tools and avoided custom infrastructure or unnecessary layers.

## Technology

| Purpose | Tool |
| --- | --- |
| Interface | React, TypeScript, Vite, Tailwind and shadcn/ui |
| Data and access | Supabase |
| AI discovery and assessment | OpenAI |
| Controlled development access | Supabase MCP |
| Source and deployment | GitHub and Netlify |

Supabase MCP was development access and is not part of the finished app.

## Evidence

The public Halliday Wine Companion test checked three sources, found 20 unique mentions, produced a 30-day sentiment score of `+40` and created no duplicate results when repeated.

Sentiment remains an AI assessment, not an objective fact or exhaustive media-monitoring record.

## Current status

The web interface is deployed on Netlify. Netlify's GitHub integration automatically builds and deploys approved changes from the deployment branch.

Independent review and approval of the daily monitoring schedule remain separate human controls.

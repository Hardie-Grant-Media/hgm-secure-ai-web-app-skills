# Building Brandlens with AI

Brandlens tracks how brands are discussed online. This case study shows HGM teams how an approved idea became a working app with AI while people retained control of scope, access and release.

This sanitised case study excludes credentials, private project details, source passages, private URLs and raw AI responses.

## Why this case study exists

The case study gives HGM staff and executives a concrete example of AI-assisted development. It shows where people made decisions, what AI did, how access was limited and what evidence was required before deployment.

It is a reusable internal reference, not a product sales page or complete technical manual.

## What Brandlens was built to do

Brandlens gives HGM a daily, reviewable view of how selected brands appear across the public web.

- Staff maintain a shared portfolio containing each brand's official identity, aliases, market, language and social-profile links.
- The app discovers relevant public sources, retains the cited passage and records gaps when a page cannot be checked.
- Each mention includes an AI sentiment assessment and reason, while the dashboard shows volume, score and scan health over time.

Social-profile links help identify a brand. They are context only, not connected social integrations.

## How it was built

1. **People set the brief.** HGM approved the audience, essential features, data boundaries and success measures before any build work began.
2. **AI planned the build.** The HGM web-app skills helped AI turn the brief into a practical plan for access, data, testing and approval points.
3. **AI built in staging.** AI wrote and tested the app on a feature branch against one named test environment, with secrets kept out of the browser and source code.
4. **People reviewed the evidence.** Automated checks, database readback and a real browser proved the important journeys before approved changes deployed through Netlify.

AI accelerated the technical work. It did not decide the product or approve its own release.

## How guidance and access worked

- **HGM web-app skills** provided reusable instructions that kept the work inside the approved brief and required evidence before each major handoff.
- **Supabase MCP** gave AI controlled development access to the named test backend. It was not part of the app and did not provide permission to release it.
- **Human approval** remained responsible for product decisions, access, deployment and activation of automated daily monitoring.

## Technology and purpose

| Purpose | Tool | What it does |
| --- | --- | --- |
| Staff interface | React, TypeScript, Vite, Tailwind and shadcn/ui | Provides the portfolio, evidence and scan-history screens. |
| Data and access | Supabase | Handles sign-in, roles, records, daily summaries and background work. |
| Discovery and assessment | OpenAI | Finds cited public sources and assesses the sentiment of relevant passages. |
| Source and deployment | GitHub and Netlify | Stores reviewed changes and automatically builds and deploys the approved branch. |

## Evidence

The public Halliday Wine Companion test checked three sources and found 20 unique mentions: eight positive, 12 neutral and none negative. It produced a 30-day sentiment score of `+40`, reported no coverage failures and created no duplicate results when repeated.

Sentiment remains an AI assessment, not an objective fact or exhaustive media-monitoring record.

## Current status

The web interface is deployed on Netlify. Netlify's GitHub integration automatically builds and deploys approved changes from the deployment branch.

Brandlens predates the current Entra SAML baseline. Its workflow remains a useful example, but its sign-in must not be copied as the HGM internal-app standard and must use Entra SAML before production access review can pass.

Independent review and approval of the daily monitoring schedule remain separate human controls. The public-web and AI-assessment limitations also remain visible in the app.

# Building Brandlens with AI

Brandlens tracks how brands are discussed online. This case study shows HGM teams how an approved idea became a working app with AI while people retained control of scope, access and release.

This sanitised case study excludes credentials, private project details, source passages, private URLs and raw AI responses.

## Why this case study exists

The case study gives HGM staff and executives a concrete example of AI-assisted development. It shows where people made decisions, what AI did, how access was limited and what evidence was required before deployment.

It is a reusable internal reference, not a product sales page or complete technical manual.

## How it was built

1. **People set the brief.** HGM approved the users, required features, data, limits and success measures before AI changed anything.
2. **AI planned the build.** The approved brief became a technical plan covering access, data, testing and clear stop points.
3. **AI built in staging.** Work stayed on a feature branch and one test backend. Supabase MCP provided narrow development access, not permission to release.
4. **People reviewed the evidence.** Automated checks and a real browser proved the key journeys. Approved GitHub changes now deploy automatically through Netlify.

AI accelerated the technical work. It did not decide the product or approve its own release.

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

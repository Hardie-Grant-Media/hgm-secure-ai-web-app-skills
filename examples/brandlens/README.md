# How Brandlens was built

Brandlens helps HGM staff understand how a brand is discussed online over time. Managers add the brand details; viewers can read the results and supporting evidence without changing the setup.

This is a sanitised internal example. It explains which tools were used, how the test version was checked, and why the work stopped before release. It does not publish the raw chat, credentials, email addresses, private project details, source passages, private URLs, or raw AI responses.

## What was agreed first

- The product requirements and technical plan were approved before building started.
- The work was limited to a separate feature branch and one named test environment.
- The existing one-off scanning process had to keep working while the new daily-monitoring process was tested.
- Managers could configure and run brands; viewers could only read results.
- Halliday Wine Companion could be used as a public test brand.
- Daily schedules and production side effects stayed off.

## What was used, and why

| Tool | Plain-language purpose |
| --- | --- |
| React, TypeScript, Vite, TanStack Router, Tailwind and shadcn/ui | HGM's standard building blocks for the staff-facing website. |
| Supabase | The controlled service for staff sign-in, brand settings, results and daily background work. |
| OpenAI | Finds likely public sources and assesses the sentiment of relevant evidence. The result is an AI assessment, not an objective fact. |
| Supabase MCP | A development-only connection that let the coding assistant inspect one named test environment and make only approved test changes. It is not part of the staff app. |
| GitHub | Keeps each change on a separate branch so people can review it before merge. |
| Netlify | The approved host for the website. Its preview and release steps remain pending. |

## How the HGM skills guided the work

HGM skills are reusable instructions for the coding assistant. They kept the build in a consistent order and prevented a successful test from being called a release.

1. `hgm-web-app` kept the work moving through planning, building, security checks, proof and human handoff.
2. `build-hgm-web-app` kept implementation on a feature branch and connected the local app only to the approved test environment.
3. `secure-hgm-supabase`, the official Supabase skill and Supabase Postgres guidance checked staff access, private credentials, data rules and background work.
4. The Supabase MCP was read-only while the target was being checked. It could make changes only for the approved test work. The exact target remains in the non-public environment record.
5. Browser acceptance tooling checked the real journey, mobile and desktop layout, keyboard use, page structure, links and browser errors.
6. `review-hgm-web-app` defines the next independent review. It has not been run, so this example does not claim Brandlens is ready for production.

## What happens during a scan

1. Find likely public pages that mention the brand.
2. Open permitted pages and keep only the relevant passage.
3. Ask AI to classify the passage as positive, neutral or negative and explain why.
4. Save the evidence and update the brand's daily summary.

Social profile links help identify the correct brand. They are not connected accounts or guaranteed monitoring sources.

## What the test proved

Halliday Wine Companion was used as the approved public test brand.

| Evidence | Result |
| --- | ---: |
| Public sources checked | 3 |
| Unique mentions | 20 |
| Positive | 8 |
| Neutral | 12 |
| Negative | 0 |
| 30-day sentiment score | +40 |
| Source failures | 0 |
| Repeated test | No duplicate scans, sources, or mentions |

All background work finished, the totals matched the 20 unique mentions, and no source failure was silently hidden. The +40 score is an AI assessment of this test evidence, not a promise that every online mention was found.

Use [the staging canary report](../../templates/staging-canary-report.md) to record the detailed evidence and its owner.

## What still needs to happen

This example stops after successful local and staging checks. It does not complete or imply:

- a Netlify preview
- an independent review
- a named human release decision
- a merge to the protected branch
- production setup, credentials, data or access changes
- activation of the daily schedule
- publication of these documentation changes to GitHub Pages

See [the master skill](../../skills/hgm-web-app/SKILL.md) and its [staging-proof reference](../../skills/hgm-web-app/references/staging-proof.md) for the detailed controls used behind this plain-language example.

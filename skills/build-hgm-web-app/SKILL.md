---
name: build-hgm-web-app
description: Implement an approved HGM Technical Brief in a feature branch and isolated non-production environment using React, TypeScript, TanStack Router, Tailwind, shadcn/ui, Supabase, and Netlify. Do not invent or expand product requirements.
---

# Build an HGM Web App

Implement only an approved HGM Technical Brief and provide observable evidence from a non-production preview.

## Preconditions

Before changing anything:

1. Read every applicable `AGENTS.md` from repository root to target path.
2. Read the approved requirements and HGM Technical Brief. Identify their safety boundaries, environments, acceptance tests, and stop points.
3. Read [the technology standard](../../docs/technology-standard.md), [security guardrails](../../docs/security-guardrails.md), and the relevant section of [application profiles](../../docs/application-profiles.md).
4. Confirm the working branch and exact non-production Supabase and Netlify targets.
5. Stop if the technical brief is missing, unapproved, conflicts with repository rules, or requires an unresolved product or permission decision.
6. For any Supabase work, apply the official `supabase` skill. For SQL, schema, RLS, indexes, connections, locking, data access, or query-performance work, also apply `supabase-postgres-best-practices`.
7. Confirm the Supabase MCP is scoped to the exact approved development project and follow [the MCP workflow](../../docs/supabase-mcp-and-postgres.md).

## Work within the approved architecture

- Do not ideate, select features, or expand the approved product scope. Return unresolved product decisions to the owner.
- Build the smallest end-to-end MVP that satisfies the approved acceptance tests.
- Apply YAGNI: do not add work for possible future needs.
- Apply KISS: use the simplest secure implementation consistent with the repository.
- Use React and TypeScript with a Vite SPA unless the technical brief approves a rendering exception.
- Use TanStack Router file-based routes, typed context, validated parameters, and explicit pending, empty, error, not-found, and denied states.
- Treat `beforeLoad` and hidden UI as navigation behavior only. Enforce access in Supabase.
- Use route loaders and the Supabase client for ordinary data needs. Add TanStack Query only for a demonstrated shared-cache or mutation requirement.
- Inspect the current shadcn configuration and current component documentation before changing UI. Reuse installed components and semantic tokens.
- Use only the Supabase capabilities required by the technical brief. Keep private objects unexposed and the browser API surface narrow.
- Use Supabase MCP `search_docs` for current documentation and project-scoped MCP tools for approved inspection or non-production work. Use read-only mode for discovery; an MCP connection does not authorize mutation.
- Put secrets, third-party integrations, anonymous writes, webhooks, quotas, and privileged work in authorized Edge Functions.
- Add the fewest dependencies necessary, pin direct versions, and commit the lockfile.

When Supabase schema, Auth, RLS, Storage, or Edge Functions are involved, apply `secure-hgm-supabase` as part of the work.

## Enforce the safety boundaries

- Change only the approved files, behavior, schemas, systems, data, and environments.
- Preserve protected routes, interfaces, contracts, data, permissions, and delivery controls.
- Do not add speculative features, fallbacks, abstractions, services, roles, permissions, or release paths.
- Do not use production data, credentials, schedules, webhooks, messages, payments, or integrations in preview.
- Never expose a secret or service-role key to React, logs, examples, or screenshots.
- Never weaken RLS, use user-editable metadata for authorization, or make a function privileged merely to bypass a permission error.
- Fail clearly when an assumption is broken. Do not silently continue or invent a default.

## Verify behavior

Run the repository's proportionate checks, including as applicable:

- formatting, linting, and strict type checks
- business-rule unit tests
- Data API, RLS, Storage, and Edge Function integration tests
- allowed, unauthenticated, unauthorized, and cross-tenant cases
- invalid input, dependency failure, and absence of prohibited side effects
- production build and critical browser journeys
- keyboard and accessibility checks
- dependency, secret, and security scans
- Supabase migration verification and database/security advisors
- applicable Supabase Postgres best-practice checks, with measured query evidence when performance is material

Verify the exact Netlify preview and its declared non-production Supabase target. A passing build alone is not acceptance evidence.

## Stop points

Stop before:

- creating or broadening production access
- using or copying production data or credentials
- applying a production migration or deploying a production Edge Function
- activating production schedules, webhooks, or external side effects
- destructive or irreversible operations without separate authorization
- merging, pushing directly to a protected branch, or releasing production

## Handoff

Report:

- implemented behavior and changed areas
- current branch, commit if available, preview URL, and non-production Supabase target
- MCP project reference, mode, enabled feature groups, and Postgres best-practice categories applied
- checks run and observable results
- allowed and denied cases verified
- deviations, unresolved risks, and assumptions
- human decisions and release steps still required

Do not claim a draft, queued deployment, or preview is live production.

---
name: scope-hgm-web-app
description: Translate approved HGM app requirements into a decision-complete technical plan for an internal app, public app, or customer portal. Use before implementation. Do not perform ideation, product discovery, feature selection, or business-case work.
---

# Plan HGM Web-App Technical Delivery

Produce an approved-build-ready HGM Technical Brief without changing code, data, accounts, or external systems.

Require approved product requirements before starting. Do not invent or expand the purpose, users, workflows, features, data, non-goals, acceptance criteria, or success measures. If any product decision is missing, stop and name the required owner decision.

## Read first

1. Read every applicable `AGENTS.md` from the repository root to the target path.
2. Read [the technology standard](../../docs/technology-standard.md) and [application profiles](../../docs/application-profiles.md).
3. Use [the HGM Technical Brief template](../../templates/hgm-app-brief.md) as the output contract.
4. Read [the security guardrails](../../docs/security-guardrails.md) when the app handles identity, non-public data, uploads, integrations, anonymous writes, or privileged operations.
5. When scoping an existing Supabase app, apply the official `supabase` skill and use project-scoped, read-only Supabase MCP to inspect only the approved non-production project. Follow [the MCP workflow](../../docs/supabase-mcp-and-postgres.md).

## Confirm approved inputs

Determine from supplied context and read-only evidence:

- approved requirement source, version, owner, users, and excluded users
- internal, public, customer-portal, or combined profile
- critical workflows, routes, data, integrations, and side effects
- authentication, ownership, membership, roles, and access lifecycle
- accessibility, public discoverability, retention, support, and retirement needs
- existing systems or patterns that should be reused
- plain-language safety boundaries: what the AI may change, must protect, must not do, and when it must stop
- an environment manifest and any approved architecture exceptions, including owner, rationale, compensating controls, and review date

Resolve technical facts from the repository before asking the user. Ask only for technical decisions that materially affect architecture, risk, identity, data use, or delivery. Return unresolved product decisions to the product owner without proposing features or alternatives.

## Apply the baseline

- Record the approved MVP and use it to bound the technical plan.
- Apply YAGNI: omit anything that does not support a current acceptance test.
- Apply KISS: prefer the simplest secure design that meets the approved outcome.
- Require React, TypeScript, TanStack Router, Tailwind, shadcn/ui, Supabase, GitHub, Netlify, and the minimum capabilities needed by the approved outcome.
- Default to a Vite SPA. Record a rendering exception only for an explicit public indexing or server-rendering need.
- Require Microsoft Entra SAML SSO and explicit app membership for internal users. Record SAML plan readiness, provider metadata ownership, assigned users or groups, provider verification, and removal. Do not plan a password or email-domain fallback.
- For public apps, expose only approved public fields and keep customer data out of anonymous reads. Separate public reads from anonymous writes and abuse-sensitive operations.
- For customer portals, default to passwordless email magic links or one-time codes with automatic account creation disabled unless explicitly approved. Define secure enrollment, user ownership or tenant membership, removal, and the sensitive data or actions that require MFA.
- Use route guards only for navigation. Put authorization in grants, RLS, Storage policies, and Edge Functions.
- Default to synthetic data and isolated non-production environments.
- Do not add optional Supabase services, TanStack Query, a second UI kit, or another platform without a current requirement.

## Define testable boundaries

For every workflow, specify:

- allowed identity, data, action, and observable result
- unauthenticated and authenticated-but-unauthorized attempts
- cross-user or cross-tenant attempts where relevant
- invalid input and dependency failure
- prohibited data, side effects, dependencies, and production access that must remain absent

Do not accept “secure,” “admin,” or “staff only” as a complete permission rule. Name the actor, resource, action, enforcing boundary, and denial behavior.

Copy the approved Safety Boundaries into the technical brief and translate each boundary into technical permissions, protected scope, and observable tests. Do not create, broaden, or reinterpret the product boundaries.

## Output

Return a completed HGM Technical Brief with no silent blanks. Mark unavailable information as an explicit open decision with its owner and impact.

End with:

- technical recommendation
- unresolved blockers
- approvals required before build
- the exact evidence or decision needed next

Do not write code, create a repository, provision Supabase or Netlify, change access, contact integrations, or perform a release.

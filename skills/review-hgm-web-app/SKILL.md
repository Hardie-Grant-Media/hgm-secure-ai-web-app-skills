---
name: review-hgm-web-app
description: Perform a read-only technical review of an HGM web-app change and Netlify preview against its approved requirements, HGM Technical Brief, security rails, and release evidence. Do not perform product ideation or change systems.
---

# Review an HGM Web App

Provide an independent, evidence-based release recommendation without changing code or systems.

## Read and identify

1. Read every applicable `AGENTS.md` from repository root to target path.
2. Read the approved requirements, HGM Technical Brief, [technology standard](../../docs/technology-standard.md), [security guardrails](../../docs/security-guardrails.md), [delivery guidance](../../docs/delivery-and-operations.md), and relevant [application profile](../../docs/application-profiles.md).
3. Use [the review report template](../../templates/review-report.md) as the output contract.
4. Identify the exact pull-request commit, Netlify preview, non-production Supabase target, checks, migrations, and evidence under review.
5. If the requirements, technical brief, commit, target, or critical evidence are missing, record the gap rather than assuming it passed.
6. Apply the official `supabase` and `supabase-postgres-best-practices` skills for any Supabase or Postgres change. Use project-scoped, read-only Supabase MCP to inspect the declared non-production target when access is available.
7. Identify who owns each required evidence item. Evidence produced only by the implementation agent is not independent review evidence.

## Review the approved scope

Confirm:

- the implementation does not invent or expand product requirements
- the change is the smallest useful MVP that satisfies the approved acceptance tests
- every added feature, service, dependency, role, and abstraction has a current need
- the implementation is the simplest secure design that meets the technical brief
- requested workflows and acceptance criteria are present
- protected behavior, routes, contracts, data, and delivery controls remain intact
- the technical brief's safety boundaries hold and prohibited dependencies, services, permissions, data, and side effects remain absent
- deviations are explicit and approved
- implementation remains simple, focused, and consistent with repository conventions

## Review the application boundary

- Verify React, TypeScript, TanStack Router, Tailwind, shadcn/ui, Supabase, and Netlify use follows the approved standard.
- Treat route guards and hidden UI as user experience only; trace authorization to grants, RLS, Storage policies, or Edge Function checks.
- Check internal Entra membership, public exposure, or customer ownership and tenancy according to the selected profile.
- Verify Auth provider state separately from public signup, invitation or enrollment, application membership, recovery, SMTP, password policy, and account removal whenever those controls are required.
- Verify every approved architecture or identity exception has an owner, rationale, compensating controls, approval evidence, and review date.
- Reject email-suffix or user-editable-metadata authorization and role-only `authenticated` policies.
- Inspect exposed objects, grants, RLS, views, privileged functions, Storage, secrets, function validation, integrations, abuse controls, and logging.
- Verify previews do not use production data, credentials, schedules, or external side effects.

## Review evidence

Assess current results for:

- formatting, linting, types, unit and integration tests, and build
- allowed, unauthenticated, unauthorized, removed-member, and cross-tenant cases
- invalid input, dependency failure, and absence of prohibited behavior
- browser journeys, responsive behavior, keyboard use, and accessibility
- dependency, secret, and security scanning
- migrations, Supabase advisors, compatibility, and recovery
- staging target readback, Auth-control state, terminal queue outcomes, bounded retries, idempotent replay, aggregates, coverage failures, and cost counters when applicable
- MCP project scoping and mode, plus applicable Postgres schema, query, RLS, indexing, connection, and performance evidence
- monitoring, incident, support, access-review, rollback, and retirement ownership
- an owner, exact target, observation time, and source for every material staging or release claim

Inspect the exact preview when access is available. Do not treat a screenshot, draft, queued job, or successful navigation as proof of the underlying control.

`Green — Pass` is unavailable while a required Netlify preview or independent evidence is absent. Record the result as `Amber — Conditional pass` or `Red — Fail` according to the risk and demonstrated behavior.

## Recommendation

Return one plain-language traffic-light outcome while preserving the formal recommendation:

- `Green — Pass`: no unresolved blocker; evidence supports a human release decision.
- `Amber — Conditional pass`: no demonstrated security failure, but named evidence or action is required before release consideration.
- `Red — Fail`: a required behavior is absent, a prohibited behavior is present, a security boundary is weak or unverified, or the change exceeds its authority.

Use concrete findings with evidence, impact, required action, and owner. Separate release blockers from advisory improvements.

## Hard boundary

Remain read-only. Do not edit files, rerun tools that mutate state, merge, deploy, apply migrations, create users, change access or secrets, activate integrations, or release production.

List every human decision still required and avoid claiming the application is production-ready when critical evidence is unavailable.

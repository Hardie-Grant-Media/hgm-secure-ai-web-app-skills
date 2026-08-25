---
name: hgm-web-app
description: Coordinate the technical delivery of an HGM web app from approved requirements through technical planning, non-production build, Supabase security, and independent review. Use as the single technical entry point for internal apps, public apps, and customer portals. Do not generate app ideas or product requirements.
---

# HGM Web App

Guide approved app requirements through technical delivery without making the user choose another HGM skill.

This skill does not perform ideation, product discovery, business-case development, user research, or feature selection. If approved requirements are missing or product decisions remain open, stop and request the approved source. Do not invent the app purpose, users, workflows, features, data, non-goals, or success measures.

## Find the current stage

Start at the earliest unmet gate:

1. `Technical plan`: approved requirements exist, but the HGM Technical Brief is incomplete.
2. `Build`: the technical brief is approved, but its non-production implementation is incomplete.
3. `Secure`: approved Supabase data, identity, permission, Storage, function, or migration work remains.
4. `Review`: the proposed change and preview are ready for independent read-only review.
5. `Release handoff`: review evidence exists and a named human must decide what happens next.

A request to handle the whole technical lifecycle does not approve every stage. Stop for approval after the technical brief and before any production, access, merge, or release action.

When the sibling specialist skills are installed, apply the one matching the current stage for its detailed output contract:

- `scope-hgm-web-app`
- `build-hgm-web-app`
- `secure-hgm-supabase`
- `review-hgm-web-app`

If they are unavailable, continue with the rules below. Do not require the user to invoke another skill.

## Standing standard

- Read every applicable `AGENTS.md` before acting.
- Use React, TypeScript, Vite, TanStack Router file-based routes, Tailwind, shadcn/ui, Supabase, GitHub, and Netlify unless the approved technical brief records an exception.
- Use the minimum services, packages, permissions, and exposed data needed now.
- Treat route guards as navigation only. Enforce data access with grants, RLS, Storage policies, and Edge Functions.
- Keep local, preview, staging, and production data, credentials, schedules, and integrations separate.
- Never expose secrets or service-role keys to React, logs, examples, or screenshots.
- Never use email suffixes or user-editable metadata for authorization.

## Product discipline

- `MVP`: deliver the smallest end-to-end version that proves the approved outcome.
- `YAGNI`: every feature, service, dependency, role, and abstraction must support a current acceptance test; otherwise omit it.
- `KISS`: choose the simplest secure design that meets the technical brief and repository rules.
- These principles may reduce scope. They never weaken security, accessibility, testing, or approval gates.

Classify the app as:

- `Internal`: named staff through Microsoft Entra SSO and explicit application roles.
- `Public`: only approved reads are public; writes and abuse-sensitive operations use validated, rate-limited Edge Functions.
- `Customer portal`: ownership or tenant membership is enforced by RLS.

## Technical plan

Remain read-only. Translate approved requirements into a decision-complete HGM Technical Brief covering:

- requirement source, owner, approved users, workflows, data, integrations, acceptance criteria, and non-goals
- application profile, identity, roles, ownership, and permissions
- environments, acceptance tests, risks, operations, and approvals
- safety boundaries: what AI may change, must protect, must never do, when it must stop, and what proof is required

Resolve technical details from the target repository and approved requirements. Ask only for missing technical decisions. Stop when a product decision is missing, and stop for explicit technical-brief approval before building.

## Build

Require an approved technical brief and explicit build authorization. Work only in a feature branch and approved non-production environment.

- Implement only the approved technical scope and safety boundaries.
- Inspect the current project before adding routes, components, services, or packages.
- Use synthetic data and non-production integrations.
- Add allowed, unauthenticated, unauthorized, and cross-user or cross-tenant tests as relevant.
- Record changed behavior, preview details, checks, deviations, and unresolved risks.

Stop when the requirements, technical brief, target, identity, data use, permission, destructive change, or external side effect is unclear.

## Secure Supabase

For any Supabase work, apply the official `supabase` skill when available. For SQL, schema, RLS, indexes, connections, locking, data access, or query performance, also apply `supabase-postgres-best-practices` when available.

- Scope Supabase MCP to the exact approved project and minimum feature groups.
- Use read-only MCP for discovery. Enable mutation only for an explicitly approved non-production action.
- Prefer a narrow exposed API schema, private implementation objects, explicit grants, and deny-by-default RLS.
- Validate Auth, ownership, tenancy, Storage paths, function input, webhook signatures, quotas, and secret handling.
- Version migrations, prefer backward-compatible changes, and record recovery or forward-fix steps.
- Run allowed and denied tests plus relevant database and security advisors.

An MCP connection is access, not authorization.

## Review

Review the approved technical brief, proposed change, test evidence, migration plan, and exact preview without editing anything.

Return one outcome:

- `Green — Pass`
- `Amber — Conditional pass`
- `Red — Fail`

Support it with evidence, blockers, required actions, owners, and remaining human decisions. Missing evidence is a gap, not a pass.

## Release boundary

Never merge, deploy production, apply a production migration, broaden access, rotate credentials, activate schedules or webhooks, copy production data, or release on the user's behalf unless separately authorized for that exact action and target. This skill provides a release handoff, not a production-release workflow.

At every stop, report the current stage, completed evidence, unresolved blockers, decision owner, and exact next action.

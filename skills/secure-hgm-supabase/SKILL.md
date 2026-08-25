---
name: secure-hgm-supabase
description: Design, implement, or review Supabase Auth, Postgres, grants, RLS, Storage, Edge Functions, and migrations for an approved HGM app using the official Supabase MCP and Postgres best-practices skill. Use only local or authorised non-production targets unless a separate production action is explicitly authorised.
---

# Secure HGM Supabase Work

Make the approved data and permission model enforceable and testable at Supabase boundaries.

## Establish scope and target

1. Read every applicable `AGENTS.md`, the approved requirements, the HGM Technical Brief, and [the security guardrails](../../docs/security-guardrails.md).
2. Read the relevant profile in [application profiles](../../docs/application-profiles.md) and use [the threat and permission checklist](../../templates/threat-permission-checklist.md).
3. Apply the official `supabase` skill. Also apply `supabase-postgres-best-practices` whenever writing or reviewing SQL, schemas, RLS, indexes, connections, locking, data access, or query performance.
4. Read and follow [the Supabase MCP and Postgres workflow](../../docs/supabase-mcp-and-postgres.md).
5. Resolve the exact local or approved non-production project before any command that can change schema, data, functions, Auth, or Storage.
6. Use project-scoped Supabase MCP with minimum feature groups. Use read-only mode for discovery and review; enable mutation only for the exact approved non-production action.
7. Fetch the current Supabase changelog and use MCP `search_docs` for relevant official documentation. Discover CLI commands with `--help`; do not guess current flags or migration conventions.
8. If the request is review-only, remain read-only. If implementation is authorized, change only the approved non-production scope.

## Model the boundary

Apply MVP, YAGNI, and KISS to the data layer: secure only the approved workflow, omit speculative services and roles, and use the simplest enforceable permission model. Never simplify by weakening grants, RLS, validation, or tests.

For each actor and resource, define:

- required grant
- row ownership, tenant membership, role, or public predicate
- allowed select, insert, update, delete, upload, download, and privileged actions
- denied unauthenticated, unauthorized, removed-member, cross-user, and cross-tenant cases
- function, webhook, quota, and integration boundaries

Use the Supabase user ID as stable identity. Never authorize through email suffixes, client-provided roles, `user_metadata`, or `raw_user_meta_data`.

## Database and Data API

- Keep internal tables and helper functions in unexposed schemas.
- Prefer a narrow `api` schema for objects the browser must reach.
- Set grants explicitly for `anon` and `authenticated`; do not assume project defaults.
- Enable RLS on every exposed table and view, then add policies for the actual action and relationship.
- `TO authenticated` alone is insufficient. Add ownership, membership, or permission predicates.
- For updates, provide the needed select policy and constrain both existing rows with `USING` and resulting rows with `WITH CHECK`.
- Make exposed views preserve caller permissions or revoke browser access.
- Prefer security-invoker behavior. When `SECURITY DEFINER` is genuinely required, keep it unexposed, set an empty search path, schema-qualify names, validate the caller, and restrict execution.

## Auth, Storage, and functions

- Internal apps use approved Entra SSO through Supabase SAML SSO and stable application membership.
- Customer apps use the approved Supabase Auth enrollment, verification, recovery, and removal flow.
- Account for stale JWT claims when authorization relies on app metadata.
- Use private Storage by default and scope object paths to the approved user or tenant relationship.
- Test Storage creation and replacement separately because upsert requires insert, select, and update access.
- Keep secrets and service-role keys out of the client.
- Edge Functions must validate authentication, authorization, method, content type, size, schema, and business rules.
- Verify webhook signatures, make retries idempotent, and bound rates, quotas, cost, pagination, files, and generated output.

## Migrations and verification

- Create migration files with the current Supabase CLI workflow.
- Prefer additive, backward-compatible changes and expand-and-contract for destructive work.
- Test migrations in an isolated target and verify both schema and data behavior.
- Run allowed and denied queries for every policy and Storage boundary.
- Test functions with valid, invalid, unauthenticated, unauthorized, and dependency-failure requests.
- Run current Supabase database and security advisors and address relevant findings.
- Load only the Postgres best-practice rule categories relevant to the change. Prioritize security, query paths, connections, and schema design; require evidence before adding performance complexity.
- Record recovery or forward-fix steps for consequential changes.

After repeated failures, stop retrying the same operation. Re-read the error, current documentation, configuration, grants, policies, and logs before selecting another approach.

## Production boundary and output

Do not apply production migrations, deploy production functions, change production Auth or Storage, rotate credentials, copy production data, activate schedules, or broaden access without explicit authorization for that exact action and target.

Report:

- target and whether work was read-only or mutating
- MCP project reference, mode, enabled feature groups, and tool calls used
- Supabase documentation and Postgres best-practice categories applied
- changed or reviewed objects and permission model
- migrations and compatibility implications
- allowed and denied tests with results
- advisor findings and resolution
- recovery approach, remaining risks, and production decisions still required

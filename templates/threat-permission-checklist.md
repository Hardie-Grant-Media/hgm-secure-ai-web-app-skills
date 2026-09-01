# HGM Threat and Permission Checklist

Use this checklist while scoping, building, and reviewing. It prompts decisions; it does not replace a threat model for a high-risk application.

## Application boundary

- [ ] Intended users and explicitly excluded users are named.
- [ ] Internal, public, and customer-facing routes are separated.
- [ ] Data, Storage, functions, integrations, and deployment environments are listed.
- [ ] Trust boundaries and privileged operations are visible.
- [ ] Safety boundaries and prohibited side effects are recorded in plain language.

## Identity lifecycle

- [ ] Authentication method is approved for the application profile.
- [ ] Enrollment, verification, recovery, removal, and session revocation are defined.
- [ ] Internal access confirms the Entra SAML provider, assigned user or group, and active app membership; no fallback staff login exists.
- [ ] Customer access uses the approved passwordless method and automatic account creation is disabled unless approved.
- [ ] Sensitive customer data and privileged actions require MFA at the RLS or Edge Function boundary.
- [ ] Shared accounts and email-suffix authorization are prohibited.
- [ ] User-editable metadata is not used for authorization.

## Permission matrix

For every protected resource, complete this table.

| Actor or relationship | Read | Create | Update | Delete | Export or privileged action |
| --- | --- | --- | --- | --- | --- |
| Anonymous |  |  |  |  |  |
| Signed in without membership |  |  |  |  |  |
| Owner or member |  |  |  |  |  |
| Administrator |  |  |  |  |  |

- [ ] Each allowed cell has an enforcing grant, RLS policy, or Edge Function check.
- [ ] Each denied cell has an observable test.
- [ ] Cross-user and cross-tenant access are tested.
- [ ] Role or ownership reassignment is constrained by update checks.
- [ ] Administrative operations repeat authorization server-side.

## Data and privacy

- [ ] Every data set has a source, purpose, classification, owner, and retention decision.
- [ ] Only required fields are collected and returned.
- [ ] Public projections exclude private and operational fields.
- [ ] Anonymous reads exclude all customer data.
- [ ] Preview uses synthetic or approved non-production data.
- [ ] Logs and errors exclude secrets and unnecessary personal data.
- [ ] Export, correction, deletion, and retirement requirements are recorded.

## Supabase surface

- [ ] Exposed schemas and objects are explicit.
- [ ] Grants for `anon` and `authenticated` are explicit.
- [ ] Every exposed table and view has effective RLS or equivalent protection.
- [ ] Views preserve caller permissions or are inaccessible to browser roles.
- [ ] Functions have the minimum `EXECUTE` grants.
- [ ] `SECURITY DEFINER` is absent unless justified, isolated, constrained, and tested.
- [ ] Storage buckets and object paths match the permission matrix.
- [ ] Supabase advisors have been reviewed after schema changes.
- [ ] Supabase MCP is scoped to the exact approved development project.
- [ ] MCP uses read-only mode for scoping and review and enables only required feature groups.
- [ ] MCP output is treated as untrusted data and credentials are not recorded.
- [ ] The official Supabase and Supabase Postgres best-practices skills were applied.
- [ ] Only relevant Postgres rules were used; performance changes have present evidence rather than speculative optimization.

## Browser and Edge Functions

- [ ] Route guards are treated as user experience, not authorization.
- [ ] Only publishable configuration reaches the browser.
- [ ] Edge Functions validate authentication, authorization, method, size, schema, and business rules.
- [ ] Third-party credentials remain in server-side secrets.
- [ ] Webhook signatures and duplicate delivery are handled safely.
- [ ] Rate, quota, cost, file, pagination, and search limits are proportionate.
- [ ] Errors fail closed and do not reveal internal details.

## Delivery and recovery

- [ ] Local, preview or staging, and production targets are separated.
- [ ] Preview cannot reach production data, credentials, schedules, or external side effects.
- [ ] Dependencies are minimal and pinned with a committed lockfile.
- [ ] Migrations are versioned, compatible, and tested outside production.
- [ ] Recovery or forward-fix steps and evidence are recorded.
- [ ] Monitoring, alerts, support, incident, and retirement owners are named.
- [ ] AI stops before merge, production changes, access changes, or release.
- [ ] A named human makes and verifies the release decision.
